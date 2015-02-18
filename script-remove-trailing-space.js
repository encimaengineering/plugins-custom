<script type="text/javascript">

//this script is the long form that works for IE8
//otherwise str.trim() works on newer browsers
//http://www.javascripter.net/faq/trim.htm

str = str.replace(/^\s+|\s+$/g,'');

//example
s.prop3 + ' > Tab > ' + $(this).text().replace(/^\s+|\s+$/g,'');

//example with ternary
$('#body_container').hasClass('subnav') ? s.prop3 + ' > Arrow > ' + $('.tabs li.active a').text().replace(/^\s+|\s+$/g,'') + ' > ' + $('.tabs-sub a.active').text().replace(/^\s+|\s+$/g,'') : s.prop3 + ' > Arrow > ' + $('.tabs li.active a').text().replace(/^\s+|\s+$/g,'');

</script>
