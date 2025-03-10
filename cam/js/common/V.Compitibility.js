;void function(){
    var V = window.V || {
        DOC: $( document )
        , WIN: $( window )
        , Const: {}
    };
    !window.V && ( window.V = V );
    
    $.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
 }();