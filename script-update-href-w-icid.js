<script type="text/javascript">
(function ($) {
	//updates apply-now href with an icid
	$('#defaultHeader li.white-button a[href="/apply-online?LeadType=ApplyNow"]').each(function(){
		var icid = 'bgtctutnt00019';
		if($(this).attr('href').indexOf('?') !=-1 ){
			$(this).attr('href', $(this).attr('href')+'&icid='+icid);
		}else{
			$(this).attr('href', $(this).attr('href')+'?icid='+icid);
		}
	});
	//updates request-info href with an icid
	$('#defaultHeader li.white-button a.info[href="/request-information?LeadType=RequestInfo"]').each(function(){
		var icid = 'bgtctutnt00020';
		if($(this).attr('href').indexOf('?') !=-1 ){
			$(this).attr('href', $(this).attr('href')+'&icid='+icid);
		}else{
			$(this).attr('href', $(this).attr('href')+'?icid='+icid);
		}
	});
})(jQuery);	
//  CTU Homepage Redesign exp0 - 12/5/2013
</script>