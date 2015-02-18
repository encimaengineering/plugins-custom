<script type="text/javascript">
jQuery(function(){
	try{
		if (typeof(TrackOmnitureConversion) == "function"){	// tracks thank you conversion if there is no unique thank you page
			var url = window.location.href.toString().toLowerCase();
			if(url.indexOf('/campus-locations')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-location');
				console.log('campus-location');
			}else if(url.indexOf('/chicago')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-chicago');
				console.log('campus-chicago');
			}else if(url.indexOf('/detroit')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-detroit');
				console.log('campus-detroit');
			}else if(url.indexOf('/nashville')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-nashville');
				console.log('campus-nashville');
			}else if(url.indexOf('/online')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-online');
				console.log('campus-online');
			}else if(url.indexOf('/orlando')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-orlando');
				console.log('campus-orlando');
			}else if(url.indexOf('/sacramento')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-sacramento');
				console.log('campus-sacramento');
			}else if(url.indexOf('/san-antonio')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-san-antonio');
				console.log('campus-san-antonio');
			}else if(url.indexOf('/schaumburg')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-schaumburg');
				console.log('campus-schaumburg');
			}else if(url.indexOf('/seattle')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-seattle');
				console.log('campus-seattle');
			}else if(url.indexOf('/tampa')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-tampa');
				console.log('campus-tampa');
			}else if(url.indexOf('/las-vegas')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=campus-las-vegas');
				console.log('campus-las-vegas');
			}else if(url.indexOf('/the-professional-pace-at-iadt')!=-1){
				mboxUpdate('iadt_global_footer','formSubmit=finish-degree-faster');
				console.log('finish-degree-faster');
			}
		}else {

		}
	}catch(e){};
});
// IADT - Campus Locations - Form Submit Tracker
</script>