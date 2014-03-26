(function($){
$.fn.datter = {
    get: function (obj, name, is_plain) {
        var data = '', dataset;

        if (obj.dataset) {
            data = obj.dataset[name];
        } else {
            if (obj[0]) {
                data = obj.attr('data-' + name);
            } else {
                data = $(obj).attr('data-' + name);
            }
        }
        if (data == null) {
            return null;
        }

        if (is_plain && is_plain === true) {
            return data;
        } else {
            return JSON.parse(data);
        }
    }
};
})(jQuery);
