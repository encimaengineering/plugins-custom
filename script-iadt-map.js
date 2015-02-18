<style type="text/css">
#masthead .top p,#main-content p img,#ShortBottomForm{visibility:hidden;}

/* **********map style************** */
.TNTMap{background:url("http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/map.png") no-repeat scroll top left transparent;height:350px;position:relative;width:700px;}
.TNTMap .popup{display: none;}
.TNTMap .cityWrapper {position: absolute;}
.TNTMap .cityWrapper .city {height: 48px; width: 80px;}
.TNTMap .cityWrapper .city span {color: #333333;cursor:pointer;font: 14px Arial !important;}
.TNTMap .cityWrapper .city img {position:absolute;bottom:0;left:15px;height:29px;width:24px;}
.TNTMap .cityWrapper .city img.online-img{height:151px;width:159px;}
.TNTMap .cityWrapper .popup {background-color: #FFFFFF;border-radius: 8px 8px 8px 8px;left: 56px;overflow: hidden;padding-bottom:50px;position: absolute;top: -24px;width: 300px;z-index: 100;}
.TNTMap .cityWrapper.online .popup {left: -84px;top: -117px;}
.TNTMap .cityWrapper .city:hover .popup {display: block;}
.TNTMap .cityWrapper .popup h4 {background-color: #595959;color: #FFFFFF;font-size: 12px;font-weight: bold;padding:5px 0;text-align: center;}
#main-content .TNTMap .popup ul li{background:none;padding:0 0 0 5px}
.TNTMap .antonio {left:183px;top:210px;}
.TNTMap .chicago {left:273px;top:75px;}
.TNTMap .chicago span {position:relative;left:18px;top:50px;}
.TNTMap .detroit {left:310px;top:65px;}
.TNTMap .detroit span {position:relative;left:15px;}
.TNTMap .nashville {left:285px;top:135px;}
.TNTMap .nashville span {position:relative;left:-45px;top:10px;}
.TNTMap .online {left:500px;top:130px;}
.TNTMap .orlando {left:345px;top:215px;}
.TNTMap .orlando span {position:relative;left:25px;}
.TNTMap .sacramento {left:5px;top:85px;}
.TNTMap .schaumburg{left:265px;top:72px;}
.TNTMap .schaumburg span {position:relative;left:-55px;}
.TNTMap .seattle {left:15px;top:-10px;}
.TNTMap .seattle span {position:relative;left:30px;top:45px;}
.TNTMap .tampa {left:290px;top:240px;}
.TNTMap .tampa span {position:relative;left:15px;}
.TNTMap .cityWrapper.tampa .city img{position:relative;}
.TNTMap .vegas {left:45px;top:120px;}
</style>
<script type="text/javascript">
jQuery(function(){
	var $form = jQuery('#ShortBottomForm');//select the form and store in a variable
	var mainContentTopP = jQuery('#main-content p:lt(3)');//select the top paragraphs in #main-content and store in a varaible
	var mainContentTopH = jQuery('#main-content h1:lt(1)');//select h1 tag in #main-content and store in a variable
	//map code stored in a variable
	var map = jQuery('<div><span class="small">Mouse over campus for more information.</span><div class="TNTMap"><div class="cityWrapper online"><div class="city"><span></span><img class="online-img"src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/laptop.png"/><div class="popup"><h4>Online | <a href="/Online">IADT Online</a></h4><ul><li>5104 Eisenhower Blvd</li><li>Tampa,FL 33634</li><li>Toll Free Class Information:(888)247-4238</li><li>All Other Inquiries:(888)247-4238</li><li>Fax:(813)889-3436</li></ul></div></div></div><div class="cityWrapper sacramento"><div class="city"><span>Sacramento</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>California | <a href="/Sacramento">IADT Sacramento</a></h4><ul><li>2450 Del Paso Road</li><li>Sacramento,CA 95834</li><li>Toll Free Class Information:(888)798-0111</li><li>All Other Inquiries:(916)285-9468</li><li>Fax:(916)285-6986</li></ul></div></div></div><div class="cityWrapper orlando"><div class="city"><span>Orlando</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>Florida | <a href="http://www.iadt.edu/Orlando">IADT Orlando<a/></h4><ul><li>6039 S.Rio Grande Ave</li><li>Orlando,FL 32809</li><li>Toll Free Class Information:(888)489-8111</li><li>All Other Inquiries:(407)857-2300</li><li>Fax:(407)888-4006</li></ul></div></div></div><div class="cityWrapper tampa"><div class="city"><span>Tampa</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>Florida | <a href="http://www.iadt.edu/Tampa">IADT Tampa<a/></h4><ul><li>5104 Eisenhower Blvd</li><li>Tampa,FL 33634</li><li>Toll Free Class Information:(888)315-6111</li><li>All Other Inquiries:(813)881-0007</li><li>Fax:813-881-0008</li></ul></div></div></div><div class="cityWrapper schaumburg"><div class="city"><span>Schaumburg</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>Illinois | <a href="http://www.iadt.edu/Schaumburg">IADT Schaumburg<a/></h4><ul><li>935-E National Parkway</li><li>Schaumburg,IL 60173</li><li>TollFree</li><li>AllOther</li><li>Fax</li></ul></div></div></div><div class="cityWrapper chicago"><div class="city"><span>Chicago</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>Illinois | <a href="http://www.iadt.edu/Chicago">IADT Chicago<a/></h4><ul><li>1 North State Street</li><li>Chicago,IL 60602</li><li>Toll Free Class Information:(888)318-6111</li><li>All Other Inquiries:(312)980-9200</li><li>Fax:(312)541-3929</li></ul></div></div></div><div class="cityWrapper detroit"><div class="city"><span>Detroit</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>Michigan | <a href="http://www.iadt.edu/Detroit">IADT Detroit<a/></h4><ul><li>1850 Research Drive</li><li>Troy,MI 48083</li><li>Toll Free Class Information:(888)839-4111</li><li>All Other Inquiries:(248)457-2700</li><li>Fax:(248)526-1710</li></ul></div></div></div><div class="cityWrapper vegas"><div class="city"><span>Las Vegas</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>Nevada | <a href="http://www.iadt.edu/Las-Vegas">IADT Las Vegas<a/></h4><ul><li>2495 Village View Drive</li><li>Henderson,NV 89074</li><li>Toll Free Class Information:(866)400-4238</li><li>All Other Inquiries:(702)990-0150</li><li>Fax:(702)269-1981</li></ul></div></div></div><div class="cityWrapper nashville"><div class="city"><span>Nashville</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>Tennessee | <a href="http://www.iadt.edu/Nashville">IADT Nashville<a/></h4><ul><li>1 Bridgestone Park</li><li>Nashville,TN 37214</li><li>Toll Free Class Information:(888)419-7111</li><li>AllOtAll Other Inquiries:(615)232-7384her</li><li>Fax:(615)883-5285</li></ul></div></div></div><div class="cityWrapper antonio"><div class="city"><span>San Antonio</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>Texas | <a href="http://www.iadt.edu/San-Antonio">IADT San Antonio<a/></h4><ul><li>4511 Horizon Hill Boulevard</li><li>San Antonio,TX 78229</li><li>Toll Free Class Information:(888)704-6111</li><li>All Other Inquiries:(210)530-9449</li><li>Fax:(210)530-9463</li></ul></div></div></div><div class="cityWrapper seattle"><div class="city"><span>Seattle</span><img src="http://www.iadt.edu/~/media/IADT/images/Content_Images/Campus-Locations/dot.png"/><div class="popup"><h4>Washington | <a href="http://www.iadt.edu/Seattle">IADT Seattle<a/></h4><ul><li>645 Andover Park West</li><li>Seattle,WA 98188</li><li>Toll Free Class Information:(888)424-8111</li><li>All Other Inquiries:(206)575-1865</li><li>Fax:(206)575-1192</li></ul></div></div></div></div></div>');
	
	jQuery('#masthead .top p span').text('1-855-844-4222');// update the phone number in the zero header
	jQuery('#main-content p img[src="/~/media/IADT/images/Content_Images/New-Breed/Section-Banners/locations-banner.ashx"]').remove();// removes hero banner
	jQuery('#main-content p:lt(3)').remove();// remove top paragraphs in #main-content
	jQuery('#main-content h1:lt(1)').remove();//remove h1 tag in #main-content
	jQuery('#main-content p img').css('visibility','visible');// sets visibility of hidden elements on the page to visible to not have flashing on the page
	jQuery('.share_tools').after('<div id="main-content" class="tnt-top"></div>');//create div to place contents of $mainContentTop h1 and p
	jQuery('#main-content.tnt-top').append(mainContentTopH)//place h1 code into #main-contnet.top
	jQuery('#main-content.tnt-top').append(mainContentTopP)//place p code into #main-contnet.top
	jQuery('#main-content.tnt-top p:eq(0)').html('<div id="campus-map"></div>');//replaces hero banner with map div container 
	jQuery('#campus-map').append(map);//places map code stored in var map into campus-map div container
	jQuery('#main-content.tnt-top').after($form);//place the form after the top #main-content
	jQuery('#masthead .top p').css('visibility','visible');// sets visibility of hidden elements on the page to visible to not have flashing on the page
	jQuery('#main-content p img').css('visibility','visible');// sets visibility of hidden elements on the page to visible to not have flashing on the page
	jQuery('#ShortBottomForm').css('visibility','visible');// sets visibility of hidden elements on the page to visible to not have flashing on the page
	
	//updates Left Nav hrefs with icids
	jQuery('#side-nav li a').each(function(){
		var icid = 'icid=bgtiadttnt00056';
		if(jQuery(this).attr('href').indexOf('?')!= -1){
			jQuery(this).attr('href', $(this).attr('href')+'&'+icid);
		}else{
				jQuery(this).attr('href', $(this).attr('href')+'?'+icid);
			}
	});
	
	//updates Campus Map hrefs with icids
	jQuery('#main-content.tnt-top p #campus-map .TNTMap .cityWrapper .city .popup h4 a').each(function(){
		var icid = 'icid=bgtiadttnt00057';
		jQuery(this).attr('href', $(this).attr('href')+'?'+icid);
	});
	
	//updates Campus List hrefs with icids
	jQuery('#main-content p strong a').each(function(){
		var icid = 'icid=bgtiadttnt00058';
		if(jQuery(this).attr('href').indexOf('?')!= -1){
			jQuery(this).attr('href', $(this).attr('href')+'&'+icid);
		}else{
				jQuery(this).attr('href', $(this).attr('href')+'?'+icid);
			}
	});
	
	//updates Finish your degree faster href with icids
	jQuery('#main-content p a[href="/Tuition-and-Financial-Aid/The-Professional-Pace-at-IADT"]').each(function(){
		var icid = 'icid=bgtiadttnt00059';
		if(jQuery(this).attr('href').indexOf('?')!= -1){
			jQuery(this).attr('href', $(this).attr('href')+'&'+icid);
		}else{
				jQuery(this).attr('href', $(this).attr('href')+'?'+icid);
			}
	});
	
});
// IADT - Campus Location Map and Form exp=1 - 5/17/2013
</script>