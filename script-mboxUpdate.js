<script type="text/javascript">
try{
	if (typeof(TrackOmnitureConversion) == "function"){	
	    var formURL = window.location.href.toString().toLowerCase();
	    
	    if (formURL.indexOf('apply-online')!=-1){
		    mboxUpdate('ctu_global_footer','formSubmit=apply_online');
	    } else if (formURL.indexOf('request-information')!=-1){
		    mboxUpdate('ctu_global_footer','formSubmit=request_info');
	    }
	} else {

	}
}catch(e){};
</script>