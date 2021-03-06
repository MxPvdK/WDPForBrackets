/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, DOMParser, ActiveXObject, window, document */

define(function (require, exports, module) {
    'use strict';

    var MODULE_NAME                     = 'mendix.wdpforbrackets',
        MODULE_NAME_CSS_MANAGER         = 'mendix.wdpforbrackets.css.manager';

    var MendixCSSManager = {

        disabled : false,

        readInterface : function () {

            // Check if the CSS manager is disabled or not.
            // Because this is under development we have disabled this by default.

            // We try to read the interface.
            var cssTheme,
                iframe = null,
                iframeDoc = null,
                body = null,
                divs = null,
                i = 0,
                html = '<ul>';

            iframe = document.getElementById('mx_coder_iframe');
            iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

            divs = iframeDoc.getElementsByTagName('div');

            for (i = 0; i < divs.length; i++) {
                html += '<li class="mx-layer"><table><tr><td class="mx-layer-show"><i class="fa fa-eye"></i></td><td class="mx-layer-select"><i class="fa fa-square-o"></i></td><td>' + divs[i].className + '</td></tr></table></li>';
            }

            $('.mx-coder-layers').html('');
            $('.mx-coder-layers').html(html);

        }

    };

    module.exports = MendixCSSManager;
});
