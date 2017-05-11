/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function checklist() {
    jQuery('.check-list li').each(function () {
        jQuery(this).click(function () {
            jQuery(this).toggleClass('selected');
            var $text = jQuery(this).find('a').html();
            var $data = jQuery(this).find('a').attr('data-id');
            var $title = jQuery(this).find('a').attr('data-title');
            if (jQuery(this).hasClass('selected') === true) {
                jQuery('#show-area').find('ul').append("<li id=" + $data + "><a href='javascript:void(0);'>" + $text + "</a><div class='showtitle'>" + $title + "</div><span class='cross'>x</span></li>");
            } else {
                jQuery("#" + $data).remove();
            }
            jQuery('.cross').each(function () {
                jQuery(this).click(function () {
                    var thisId = jQuery(this).parent('li').attr('id');
                    jQuery(this).parent('li').remove();
                    jQuery('.check-list li').find("a[data-id=" + thisId + "]").parent('li').removeClass('selected');
                });
            });
        });
    });
}