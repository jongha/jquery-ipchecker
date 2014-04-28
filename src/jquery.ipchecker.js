(function($) {
	$.fn.ip = function(options) {
		var settings = $.extend({
            output: options && options.output
		}, options);

		options = $.extend(settings, options);

        $.ajax({
            url: "http://ip.jsontest.com",
            dataType: "jsonp"

        }).success(function(data) {
            if(options.output) {
                if(typeof(options.output) === "function") {
                    options.output(data.ip);
                    
                }else {
                    $(options.output).html(data.ip);
                }
            }
        });

		return this;
	};
}(jQuery));

