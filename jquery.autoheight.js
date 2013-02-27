/*
Copyright (c) 2012-2013, rohm1 <rp@rohm1.com>.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

* Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.

* Neither the name of rohm1 nor the names of his
contributors may be used to endorse or promote products derived
from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
*/

(function($) {
	$.fn.extend({
		autoheight: function(params, fn) {
			var defaultParams = {maxHeight: 200, minHeight: 'auto'};
			var styles = [
				'width',
				'font-family',
				'font-size',
				'fontWeight',
				'font-style',
				'letter-spacing',
				'text-transform',
				'word-spacing',
				'text-indent',
				'line-height',
				'padding',
				'margin'
			];

			fn = fn != undefined ? fn : ($.isFunction(params) ? params : function() {});
			params = params == undefined ? defaultParams : ($.isFunction(params) ? defaultParams : params);

			for(x in defaultParams)
				if(params[x] == undefined)
					params[x] = defaultParams[x];

			if($('#autoHeight_div').length == 0)
				$('body').append( $('<div></div>').attr('id', 'autoHeight_div').css({'position': 'absolute', 'left': '-100em'}) );

			$(this).each(function() {
				$(this).data('autoheight_initHeight', params['minHeight'] == 'auto' ? $(this).height() : params['minHeight']);
				$(this).on('input change propertychange', function() {
					var h = $(this).height();
					for(x in styles)
						$('#autoHeight_div').css(styles[x], $(this).css(styles[x]));
					$('#autoHeight_div').html($(this).val().replace(new RegExp('\\n', 'g'), '<br />&nbsp;'));
					var nh = Math.min(Math.max($(this).data('autoheight_initHeight'), $('#autoHeight_div').height()), params['maxHeight']);
					if(h != nh)
						fn.call( $(this).height(nh) , nh);
				});
				$(this).change();
			});

			return $(this);
		},
	});

})(jQuery);

