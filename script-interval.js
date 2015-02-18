<style type="text/css">
.cta-tfn #phoneHeader{visibility:hidden;}
#ShortBottomForm{margin:45px auto!important;position:relative;width:560px}
</style>
<script type="text/javascript">
$(function(){
	$('#main-content,#header .header-area .top p').css('visibility','visible'); //set page content to visible to avoid flashing of new elements on the page.
	var $form = $('#ShortBottomForm');// store form code in a variable
	$('#ShortBottomForm').remove(); // remove form code
	$('#main-content #phcontent_1_UpdatePanel1').before($form); //place form on page
	
	var int=self.setInterval(function(){ // updates TFN in the header
		if($('#phoneHeader').length >= 1){
			$('#phoneHeader').html('1-855-587-0888');
			$('#phoneHeader').css('visibility','visible')
			clearInterval(int);
		}
	},1000);
		
});
// AIU - Degree Programs Form - exp=1 - 5/16/2013
</script>