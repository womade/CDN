window.alert = function(msg) {
    var div = document.createElement("div");
    div.innerHTML = "<style type=\"text/css\">"
            + ".ssssMask { position: fixed; z-index: 100; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); }                                                                                                                                                                       "
            + ".ssssMaskTransparent { position: fixed; z-index: 100; top: 0; right: 0; left: 0; bottom: 0; }                                                                                                                                                                                            "
            + ".ssssDialog { position: fixed; z-index: 200; width: 80%; max-width: 300px; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #fff; text-align: center; border-radius: 8px; overflow: hidden; opacity: 1; color: white; }"
            + ".ssssDialog .ssssDialogHd { padding: .2rem .27rem .08rem .27rem; }                                                                                                                                                                                                                         "
            + ".ssssDialog .ssssDialogHd .ssssDialogTitle { font-size: 18px; font-weight: 400; }                                                                                                                                                                                                           "
            + ".ssssDialog .ssssDialogBd { margin: 20px 15px; font-size: 17px; line-height: 1.2; word-wrap: break-word; word-break: break-all; color: #111111; }                                                                                                                                          "
            + ".ssssDialog .ssssDialogFt { position: relative; line-height: 48px; font-size: 18px; display: -webkit-box; display: -webkit-flex; display: flex; }                                                                                                                                          "
            + ".ssssDialog .ssssDialogFt:after { content: \" \"; position: absolute; left: 0; top: 0; right: 0; height: 1px; border-top: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); }               "
            + ".ssssDialog .ssssDialogBtn { display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; color: #1E89F2; text-decoration: none; -webkit-tap-highlight-color: transparent; position: relative; margin-bottom: 0; }                                                                       "
            + ".ssssDialog .ssssDialogBtn:after { content: \" \"; position: absolute; left: 0; top: 0; width: 1px; bottom: 0; border-left: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleX(0.5); transform: scaleX(0.5); }             "
            + ".ssssDialog a { text-decoration: none; -webkit-tap-highlight-color: transparent; }"
            + "</style>"
            + "<div id=\"dialogs2\" style=\"display: none\">"
            + "<div class=\"ssssMask\"></div>"
            + "<div class=\"ssssDialog\">"
            + "    <div class=\"ssssDialogHd\">"
            + "        <strong class=\"ssssDialogTitle\"></strong>"
            + "    </div>"
            + "    <div class=\"ssssDialogBd\" id=\"dialog_msg2\">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>"
            + "    <div class=\"ssssDialogHd\">"
            + "        <strong class=\"ssssDialogTitle\"></strong>"
            + "    </div>"
            + "    <div class=\"ssssDialogFt\">"
            + "        <a href=\"javascript:;\" class=\"ssssDialogBtn ssssDialogBtnPrimary\" id=\"dialog_ok2\">确定</a>"
            + "    </div></div></div>";
    document.body.appendChild(div);
 
    var dialogs2 = document.getElementById("dialogs2");
    dialogs2.style.display = 'block';
 
    var dialog_msg2 = document.getElementById("dialog_msg2");
    dialog_msg2.innerHTML = msg;

    var dialog_ok2 = document.getElementById("dialog_ok2");
    dialog_ok2.onclick = function() {
        dialogs2.style.display = 'none';
    };
};
