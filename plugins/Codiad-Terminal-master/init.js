/*
 *  Copyright (c) Codiad & Kent Safranski (codiad.com), distributed
 *  as-is and without warranty under the MIT License. See
 *  [root]/license.txt for more. This information must remain intact.
 */

(function(global, $){

    var codiad = global.codiad,
        scripts = document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    codiad.terminal = {

        path: curpath,

        open: function() {
            // codiad.modal.load(this.termWidth, this.path+'dialog.php');
            // codiad.modal.hideOverlay();
            // $(".sidebar").css("bottom", "200px");
            // $("#workspace").css("bottom", "200px");
            // $("#editor-bottom-bar").css("bottom", "200px");
            // $(".ace_gutter").css("bottom", "200px");
            // $(".toast-position-bottom-right").css("bottom", "230px");
            var terminal = $("<div id='terminal-area'>");
            terminal.load(this.path + "dialog.php");
            $("body").append(terminal);
        }

    };
})(this, jQuery);
