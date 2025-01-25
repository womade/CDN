var _supportLocalStorage = $.type(window.localStorage && window.localStorage.getItem)=="function";
let h264list = [];
function hasUsableSWF(){
    var swf;     
    if(typeof window.ActiveXObject != "undefined"){
            swf = new  ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        }else{
             swf = navigator.plugins['Shockwave Flash'];
        }
        return swf ? true : false;
    };


function getH264List(callback) {
    if (h264list.length > 0) return callback();
    $.ajax({
        url: 'https://cdn.ssss.fun/cam/data/ipclistbycodeformat.json',
        // url: 'https://jia.360.cn/data/configdata/ipclistbycodeformat.json',
        dataType: 'jsonp',
        jsonpCallback: 'callback',
        success: function(list) {
            h264list = list.h264_list;
            callback()
        }
    })
}

function debounce (fn, delay) {
    var timer = null
    return function () {
        var _this = this
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            fn.call(_this)
        }, delay)
    }
}

var DEBOUNCE_DELAY = 5 * 1000
var Silence_TIME = 60 * 60 * 1000 * 24 * 365
var AUTO_CLOSE = 60 * 1000
function Silence () {
    this.delay = Silence_TIME
    this.timer = null
    this.playerList = []
    this.show = false

    window.addEventListener('click', this.refresh.bind(this))
    window.addEventListener('mousemove', this.refresh.bind(this))
    window.addEventListener('keypress', this.refresh.bind(this))
}

function refresh () {
    var _this = this
    if (this.timer) {
        clearTimeout(this.timer)
    }
    this.timer = setTimeout(function () {
        if ($('.pic-box.playing').length > 0 && _this.show === false) {
            _this.show = true
            $.confirm({
                title: '提示',
                content: '检测到页面长时间无人操作，画面即将暂停播放',
                autoClose: 'agree|' + AUTO_CLOSE,
                buttons: {
                    agree: {
                        text: '同意',
                        action: function () {
                            location.reload()
                        }
                    },
                    cancel: {
                        text: '取消',
                        action: function () {
                            _this.show = false
                        }
                    }
                }
            });
        }
    }, this.delay)
}

Silence.prototype.refresh = debounce(refresh, DEBOUNCE_DELAY)

var silence = new Silence()

JDOC.on( 'click', 'a.js_channel_manage', function( _evt ){
    _evt.preventDefault();
    var _p = $( this )
        , _url = _p.attr( 'href' )
        ;
    _url = JC.f.addUrlParams( _url, { ref: encodeURIComponent( location.href ) } );
    // console.log( _url );
    location.href = _url;
});

/**
 * 列表
 */
(function(window, $doc, $listBox, $listTmpl, ipcsArr, getLocalStorage, setLocalStorage, undefined){


    if(!_supportLocalStorage){
        window._n_ls = true;
        $("#nav_up").hide();
        $listBox.addClass('no-ls');
    }

    var filterData = function(filterFun, _data, dealFun){
            if(!filterFun) return _baseData;
            var retArr = [];
            _data = _data||_baseData;
            /* 逐条筛选 */
            $.each(_data, function(i, ipc){
                dealFun && dealFun(ipc, i);
                filterFun(ipc, i) && retArr.push( ipc );
            });
            return retArr;
        },
        /* SN作为Key的快速索引表 */
        _map = {}, 
        /* 置顶数据 */
        _upData = getLocalStorage('_up', true)||{},
        /* 对服务端返回的数据进行过滤和二次加工 */
        _baseData = filterData(
            function(ipc, i){
                /* 从服务端返回的数据里过滤掉Demo设备 */
                return ipc.isDemo!=1;
            }, 
            ipcsArr,
            function(ipc, i){
                var sn = ipc.sn, _upVal = _upData[sn];

                /* 合入置顶信息 */
                if(_upVal){
                    ipc._up_date = _upVal;
                };

                /* 序列或支持信息 */
                if($.type(ipc.support)=="string"){
                    try{
                        ipc.support = JSON.parse(ipc.support);
                    }catch(e){
                        ipc.support = { _res:ipc.support };
                    }
                }
                ipc._id = i;
                _map[sn] = ipc;
            }
        ),

        /* 当前页主逻辑 */
        _app = window._app = {
            _init:function(){
                /* 数据类别 （可选值 all || my || share || up，默认为all） */
                _app._cate_key = JC.f.getUrlParam( 'cate' ) || 'all';
                // console.log( _app._cate_key )
                
                /* 每页显示数量默认为4（符合条件的结果>4则按每页9个显示） */
                _app.pageSize = 9;

                /* 默认展现模式 */
                // _app._v_type = getLocalStorage('_vtype')||'pic';
                _app._v_type = 'pic';

                _app._initUIEvt();
                // _app.updataRetData();
                // _app.renderPage();

                _app.updateCate(_app._cate_key);
                /* 搜索可选项 */
                _app._kwsArr = getLocalStorage('_kws', true)||[];
                _app.renderSuggest('_default');
            },

            /* 初始化UI交互逻辑 */
            _initUIEvt:function(){

                /* 自定义关键词搜索 */
                var $searchForm = $("#ipc_search").submit(function(){
                        var kw = $.trim(this.kw.value);
                        _app.search( kw );
                        return false;
                    }),
                    $btnClear = $searchForm.find(".btn-clear").click(function(){
                        $btnClear.hide();
                        _app.search('');
                        $kwIpt.val('');
                        return false;
                    }),
                    $suggest = _app.$suggest = $searchForm.next(),
                    $kwIpt = _app.$kwIpt = $searchForm.find(".kw").focus(function(){
                        $suggest.show();
                    }).blur(function(){
                        $suggest.hide();
                    }).on("change input focus blur",function(){
                        $btnClear[this.value?'show':'hide']();
                    });

                /* 关键词备选项增删操作 */
                $suggest.mousedown(function(){
                    return false
                })
                /* 通过搜索历史进行检索 */
                .on("click","._kw",function(){
                    var kw = $(this).closest("li").data("kw");
                    $kwIpt.val( kw );
                    _app.search( kw );
                    return false;
                })
                /* 添加或移除搜索历史 */
                .on("click","._kw_del",function(){
                    _app.setKws($(this).closest("li").data("kw"), 'del');
                    return false;
                });
            
                /* 分类切换 */
                $doc.on("click","a[data-cate]", function(){
                    // var $btn = $(this), cateKey = $btn.data('cate');
                    // // console.log( cateKey )
                    // // JWIN.trigger( Const.pushState, [ { cate: cateKey } ] );
                    // _app.updateCate(cateKey);
                    // return false;
                })
                /* 开始播放 */
                .on("change",'input[name="v-type"]', function(){
                    _app.setViewType($(this).val());
                })
                /* 同步历史模式状态到UI */
                .find("input[name='v-type'][value='"+_app._v_type+"']").prop("checked",true);

                /* 翻页组件交互 */
                $listBox.on("click",".pagination a[data-page-num]", function(){
                    _app.renderPage(+$(this).data('page-num')-1);
                    return false;
                })
                /* 编辑名称 */
                .on("click",".btn-edit", function(){
                    $(this).parent().hide().prev().show();
                    return false;
                })
                /* 保存名称 */
                .on("submit",".tit-edit", function(){
                    var iptEl = this.ipcname, newName = $.trim(iptEl.value);
                    if(newName==''){
                        alert("摄像机名称不能为空！");
                        iptEl.focus();
                        return false;
                    }

                    var ofNum = newName.replace(/[^\x00-\xff]/g, "--").length-16;
                    if(ofNum>0){
                        alert("摄像机名称超出最大16个字节的限制，目前多出"+ofNum+"个字节！");
                        iptEl.focus();
                        return false;
                    }

                    var $form = $(this), sn = $form.data('sn');
                    /* 保存名称设置 */
                    $.ajax({
                        url: 'https://api.ssss.fun/cam/modifyDeviceInfo.php',
                        data: {
                            from:'mpc_ipcam_web',
                            sn: sn,
                            title: newName
                        },
                        dataType: 'json'
                    }).done(function(data) {
                        if(data.errorCode == 0){
                            /* 更新缓存 */
                            _map[sn].title = newName;
                            /* UI切换为非编辑模式 */
                            $form.hide().next().show();
                            /* 将新名称写入所有该写的地方 */
                            $('[data-ipc-tit="'+sn+'"]').text(newName);
                        }else{
                            alert("摄像机名称保存失败，异常信息：\n\n"+data.errorMsg);
                            iptEl.focus();
                        }
                    });
                    return false;
                })
                /* 开始播放 */
                .on("click",".btn-play", function(){
                    _app._initPlayer( $(this).parent() );
                    return false;
                })
                /* 开始播放 */
                .on("change",".ipt-up", function(){
                    var $ipt = $(this);
                    _app.setUpData($ipt.data("sn"), $ipt.prop('checked'));
                    return false;
                });
            },

            _swcNavsUi:function(cateKey){
                $('.navs [data-cate="'+cateKey+'"]').parent().addClass('on').siblings().removeClass('on');
            },

            /* 渲染搜索suggest选项 */
            renderSuggest:function(curTxt){
                /* 渲染模板 */
                var kws = _app._kwsArr;

                _app.$suggest.html(
                    $("#tmpl_kws").tmpl({
                        kwArr: kws,
                        curTxt:curTxt
                    })
                );
            },

            /* 保存关键词设置 act: add || del */
            setKws:function(txt, act){
                txt = txt+'';
                var kws = _app._kwsArr, kwIndex = $.inArray(txt, kws);

                /* 存在则移除 */
                if(kwIndex!=-1){
                    kws.splice(kwIndex, 1);
                }
                /* 添加新词到前面 */
                if(act=='add'){
                    kws.unshift(txt);
                }
                /* 保证只有9个关键词历史 */
                if(kws.length>9){
                    kws.splice(9)
                }
                setLocalStorage('_kws', kws, true);
                _app.renderSuggest(txt);
            },

            /* 设置默认展现模式 */
            setViewType:function(type){
                _app._v_type = type;
                setLocalStorage('_vtype', type);
                _app._playersSwitch();
            },

            /* 批量启动播放 */
            _playersSwitch: function(){
                /* 播放或取消播放 */
                var $picBoxs = $(".pic-box");
                if(_app._v_type == 'vod'){
                    $picBoxs.addClass('playing').find(".btn-play").click();
                }else{
                    $picBoxs.removeClass('playing').find(".mv-box").empty();
                }
            },

            /* 设置置顶数据 */
            setUpData:function(sn, isToUp){
                if(isToUp){
                    _map[sn]._up_date = _upData[sn] = +new Date();
                }else{
                    delete _upData[sn];
                    delete _map[sn]._up_date;
                }
                setLocalStorage('_up', _upData, true);
                /* 重新查询并排序 */
                _app.updateCate(_app._cate_key, true);
            },


            /* 分类筛选配置 */
            _cate_filters: {
                'my': function(ipc){
                    return ipc.role==0;
                },
                'share': function(ipc){
                    return ipc.role!=0;
                },
                'up': function(ipc){
                    return ipc._up_date;
                }
            },
            /* 更新分类 */
            updateCate: function(cateKey, notRender){
                var cateFilterFun = _app._cate_filters[cateKey];
                _app._cate_key = cateFilterFun?cateKey:'all';
                _app._swcNavsUi(_app._cate_key);
                _app.updataRetData(cateFilterFun);
                !notRender && _app.renderPage();
                if(_app._kw!='' && _app.$kwIpt.val()!=_app._kw){
                    _app.$kwIpt.val(_app._kw).blur();
                }
            },

            /* 按关键词搜索 */
            search: function(kw){
                _app._kw = kw+'';
                _app.updateCate('all');
                kw && _app.setKws( kw, 'add');
                _app.renderSuggest(kw, kw);
            },

            /* 根据筛选方法更新展示数据 */
            updataRetData: function(filterFun){
                /* 分类改变则重新检索数据 */
                _app._data = filterData(function(ipc){
                        /* 筛选数据 */
                        return (!filterFun || filterFun(ipc)) && (!_app._kw || (ipc.sn+'|'+ipc.title).indexOf(_app._kw)!=-1);
                    }).sort(function(a,b){
                        /* 排序 */
                        return (b._up_date||a._id)-(a._up_date||b._id);
                    });
                _app.pageSize = _app._data.length>4?9:4;
            },


            /* 渲染当前页数据到页面( pageNum下标从0开始 ) */
            renderPage:function(pageNum){
                /* 有传入页码则改变全局设置，没传页码则要展示的页以全局设置为准 */
                pageNum = _app.pageNum = +pageNum||0;

                var _data = _app._data, 
                    pageSize = _app.pageSize,
                    staIndex = pageNum*pageSize,
                    renderData = _data.slice(staIndex, staIndex+pageSize);

                if(pageNum>0 && renderData.length==0){
                    _app.renderPage(0);
                    return;
                }
                /* 渲染模板 */
                $listBox.html(
                    $listTmpl.tmpl({
                        _cate_key: _app._cate_key,
                        totalNum: _data.length,
                        pageRows: pageSize,
                        curPage: pageNum+1,
                        listData: renderData
                    })
                );
                _app._playersSwitch();
            },

            renderH265Player: function(container, ipcData) {
                var h265Options = {
                    autoplay: false, // 是否在实例化播放器后自动播放
                    container: container, // 要放置UI的DOM容器的Selector或DOM对象
                    isLive: true, // 是否直播
                    keyType: 0, // 解密方式
                    logLevel: 0, // 输出日志级别
                    minDecoderBufferSize: 1, // 要启动解码器时必须准备就绪的数据量
                    waitingPcmDur: 50, // waiting 时，缓存中准备多长时间的音频才播放，单位毫秒（默认500）
                    waitingYuvNum: 1, // waiting 时，对于没有声音的媒体源，至少准备几帧画面再启动播放（默认 10）
                    delayTimeLimit: 1000, // 直播延迟的最长毫秒值
                    lowpassFrequencyVal: 2000, // 低通滤波频率值
                    resample: 1
                }
                if (
                    typeof WebAssembly === 'undefined'
                    || typeof Worker === 'undefined'
                    || typeof fetch === 'undefined'
                    || typeof Blob === 'undefined'
                    || typeof URL === 'undefined'
                    || typeof ArrayBuffer === 'undefined'
                    || typeof Symbol === 'undefined'
                    || (typeof AudioContext === 'undefined' && typeof webkitAudioContext === 'undefined')
                ) {
                    $(container).html('<p class="error">您的浏览器版本过低，不能正常播放啊 /(ㄒoㄒ)/~~，请更新浏览器再试吧~</p>');
                } else {
                    var player = window.player = new window.QhwwPlayer(h265Options);
                    player.on({
                        stop: function() {
                            $listBox.find(".pic-box[data-sn='"+ipcData.sn+"']").removeClass('playing');
                            player.destroy();
                        },
                        pause: function() {
                            player.fullscreen = false;
                            $listBox.find(".pic-box[data-sn='"+ipcData.sn+"']").removeClass('playing');
                            player.destroy();
                        }
                    });
                    return player;
                }
            },

            renderFlashPlayer: function($mvBox,data, ipcData) {
                var sn = ipcData.sn,
                    isV2 = ipcData.streamv2;
                /* FLASH 全局回调 */
                if(!window.isJsReady){
                    window.initPlayer = function(params){
                        if(params.type == 'stop'){
                            $listBox.find(".pic-box[data-sn='"+params.sn+"']").removeClass('playing');
                        }else if(params.type == 'begin'){
                            _app._initPlayer( $listBox.find(".pic-box[data-sn='"+params.sn+"']") );
                        }
                    };
                    window.isJsReady = function(){ return true };  
                }

                var videoSrc = "http://flv-live.jia.360.cn/live_jia_personal/" + data.relayStream + ".flv"
                var flashvarsObj = {
                    autostart: true,
                    ctrbarhide: true,
                    buffertime: 3,
                    sn: sn,
                    newstreamurl: videoSrc,
                    poster: ipcData.poster
                };

                if(ipcData.type != '1'){
                    /* 非公开直播走私密流 */
                    flashvarsObj.key = data.playKey;
                }

                return swfobject.embedSWF(
                    "https://es.jia.360.cn/resource/swf/QPlayerEncrypt"+(isV2?'V2':'')+".swf?t=20170523", 
                    'player_'+ sn, "100%", "100%", "11.4.0",null,
                    flashvarsObj,{
                        allowfullscreen:"true",
                        wmode:"transparent",
                        allowscriptaccess:"always"
                    },{
                        id:"qh_player_"+ sn,
                        name:"qh_player_"+ sn
                    },
                    function(ret){
                        if(ret.success==false){
                            $mvBox.html('<p class="error">你还没有安装或禁用了flash player，不能正常播放啊 /(ㄒoㄒ)/~~，你可以<a href="http://www.adobe.com/go/getflashplayer" target="_blank" style="color: #D7F0FF;">现在安装</a>或取消禁用。</p>');
                        }
                    }
                );
            },

            /* 通过传入指定播放器容器来初始化播放器 */
            _initPlayer:function($picBox){
                _this = this;
                var ipcData = $picBox.addClass('playing').data(), 
                    sn = ipcData.sn,
                    isV2 = ipcData.streamv2,
                    $mvBox = $picBox.find(".mv-box").empty(),
                    qhwwPlayer,
                    toH264 = ipcData.videocode == '0',
                    player;
                    if (
                        typeof WebAssembly === 'undefined'
                        || typeof Worker === 'undefined'
                        || typeof fetch === 'undefined'
                        || typeof Blob === 'undefined'
                        || typeof URL === 'undefined'
                        || typeof ArrayBuffer === 'undefined'
                        || typeof Symbol === 'undefined'
                        || (typeof AudioContext === 'undefined' && typeof webkitAudioContext === 'undefined')
                    ) {
                        $mvBox.html('<p class="error">您的浏览器版本过低，不能正常播放啊 /(ㄒoㄒ)/~~，请更新浏览器版本再试吧~</p>');
                    } else {
                        player = qhwwPlayer = _this.renderH265Player($mvBox[0], ipcData);
                        $picBox.find(".mv-box").removeClass('qhww-status-stop')
                            .addClass('qhww-status-play')
                            .addClass('qhww-player-container');
                    }
                
                $.ajax({
                    url: isV2?'https://api.ssss.fun/cam/playV2.php':'https://api.ssss.fun/cam/play.php',
                    data: {
                        taskid:$.now(),
                        from:'mpc_ipcam_web',
                        sn: sn,
                        mode: 0
                    },
                    dataType: 'json',
                    error: function() {
                        $mvBox.html('<p class="error">网络异常，请稍后再试。</p>');
                    },
                    success: function(data) {
                        if (data && data.errorCode === 0) {     
                           if(qhwwPlayer){
                                var videoSrc = "https://flv-live.jia.360.cn/live_jia_personal/" + data.relayStream + ".flv"
                                if(ipcData.type != '1'){
                                    /* 非公开直播走私密流 */
                                    qhwwPlayer.key = data.playKey;
                                }
                                qhwwPlayer.src = videoSrc;
                                qhwwPlayer.play();
                            }
                        } else{
                            qhwwPlayer && qhwwPlayer.destroy();
                            $mvBox.html('<p class="error">'+(
                                {
                                    '441':'设备已离线，无法开启播放'
                                }[data.errorCode] || data.errorMsg
                            )+'</p>').removeClass('qhww-status-loading');
                        }
                    }
                });
            }

        };
    getH264List(function() {
        _app._init();
    })
})(
    window, $(document), 
    $('#ipcs_list_box'), $("#tmpl_list"),
    /* 服务端返回的摄像机数据 */
    window.__ipcs_data||[], 
    /* getLocalStorage */
    function(name, _isJson){
        var ret;
        try{
            if(_supportLocalStorage){
                ret = localStorage.getItem(name);
            }else{
                /* cookie 存储10天 */
                ret = new RegExp("(?:^| )" + name + "=([^;]*)(?:;|$)").test(document.cookie)? unescape(RegExp.$1||'') : null;
            }
            if(_isJson){
                ret = JSON.parse(ret);
            }
        }catch(e){}
        return ret;
    }, 
    /* setLocalStorage */
    function(name, val, _isJson){
        if(_isJson){
            val = JSON.stringify(val);
        }
        try{
            if(_supportLocalStorage){
                localStorage.setItem(name, val);
            }else{
                /* cookie 存储10天 */
                document.cookie = name+'='+escape(val)+'; expires='+(new Date(+new Date+1000*60*60*24*10).toGMTString());
            }
        }catch(e){}
    }
);


$('.qrcode').hover(function() {
    $('.img').fadeIn(50);
}, function() {
    $('.img').fadeOut(50);
},200);