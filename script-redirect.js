<script type="text/javascript">
var currentUrl = window.location.href; //  sets var to current url
var queryString = '?form=bottom-gray';  // sets var to form query string
if (currentUrl.indexOf(queryString) != -1 || currentUrl.indexOf('thankyou') != -1 ){
  currentlUrl = currentUrl;
}else if (currentUrl.indexOf('test=') != -1 ){ //  tests url to see if TnT test query is there
		splitUrl = currentUrl.split('?');  //  splits tnt test query
		var redirectUrl = splitUrl[0] + queryString;  //  sets redirect url to cleaned up current url and appends form query string
		window.location.href = redirectUrl  //  set redirect url to var redirect url
	}else {
		//redirectUrl = currentUrl;  //  if tnt test query is not present in current url, set redirect url to current url
		window.location.href = currentUrl + queryString;  //  set redirect url to var redirect url
	}
//  CTU - Gray Form Redirect - 2/13/2014
</script>