jQuery('.input-wrap input').focus(function(){
    jQuery(this).parent().addClass('focused')
})
jQuery('.input-wrap input').on('blur keyup', function(){
    if(jQuery(this).val().length > 0){
        jQuery(this).parent().addClass('focused')
    } else {
        jQuery(this).parent().removeClass('focused')
    }
})