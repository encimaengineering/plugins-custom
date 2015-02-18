<style type="text/css">
/******header 1 ***********/
/****** css to update site for new TnT elements **********************/
div#mainWrapper{padding-top:145px;}
div#mainWrapper div#main div#header{visibility:hidden;}
div#mainWrapper div#main div#header div.header-area div.noindex ul#action_items{display:none;}
div#mainWrapper div#main div#header div.header-area div.noindex ul#nav{top:0px;}
div#mainWrapper div#main div#container{padding-top:23px;}
div#mainWrapper div#main div#container div#home-main-content img#back,div#mainWrapper div#main div#container div#home-main-content img#next{top:195px;}
/****** oocss **********************/
.rowTnT{overflow:hidden;zoom:1;}.rowTnT2{zoom:1;}.left{float:left;}.right{float:right;}
/****** css header**********************/
#header-zero-tnt{/*overflow:hidden;*/height:23px;/*zoom:1;*/margin:5px auto;width:960px;position:relative;z-index:74000;}
#header-zero-tnt select#header_0_virtual_campus_login{float:left;padding:2px;}
#header-zero-tnt div#header_0_pnlSearch{float:right;width:250px;}
#header-zero-tnt div#search{background:#9A9A9A;position:relative;}
#header-zero-tnt div#search fieldset{border:0;margin:0;padding:0;}
#header-zero-tnt div#search fieldset label{display:none;}
#header-zero-tnt div#search input.search_field {background:none;border:none;color:#fefefe;font-size:12px;float:left;margin:0;padding:4px;text-transform:uppercase;width:200px;}
#header-zero-tnt div#search fieldset a#header_0_lnkSearch img.search_btn{vertical-align:middle;float:right;margin:1px 0 0;}
#header-zero-tnt.rowTnT2 div#header_0_pnlSearch div#search div#display-sayt{right:-10px !important;}
#header-main-tnt{background:url("http://www.aiuniv.edu/~/media/AIU/images/layout/bgShadow.png") repeat-y scroll 0 0 transparent;height:112px;margin: 5px auto 0;width: 980px;}
#header-main-tnt .header-logo{height: 112px;margin: 0 0 0 17px;width:242px;}
#header-main-tnt .header-cta{margin:20px;width:340px;height:70px;}
#header-main-tnt .header-cta .cta-apply{width:140px;padding:4px 0 0 0}
#header-main-tnt .request-link a{color:#83A139;display:block;font:bold 11px arial;margin:8px 0 0;text-align:left;text-decoration:none;text-transform:uppercase;width:147px;}
#header-main-tnt .request-link  img{margin:0 0 0 2px;}
#header-main-tnt .header-cta .cta-tfn {margin:0 12px;border-right:1px solid #9A9A9A;height:65px;padding:2px 12px 0 0;font:bold 12px arial; color:#6C6C6C;text-align:right;width:160px;}
#header-main-tnt .header-cta .cta-tfn #phoneHeader{font:bold 22px arial;height:22px;}
#header-main-tnt .header-cta .cta-tfn .chat-link{margin:13px 0 0 0;width:90px;position:relative;height:20px;overflow:hidden;}
#header-main-tnt .header-cta .cta-tfn .chat-link div#lpButton2 {display:block;height:20px;width:90px;overflow:hidden;position:absolute;top:0;left:0;z-index:5;}
#header-main-tnt .header-cta .cta-tfn .chat-link div#lpButton2 a {display:block;height:20px;width:90px;overflow:hidden;position:absolute;top:0;left:0;}
#header-main-tnt .header-cta .cta-tfn .chat-link div#lpButton2 a img{display:none;height:20px;width:90px;overflow:hidden;position:absolute;top:0;left:0;}
#header-main-tnt .header-cta .cta-tfn .chat-link div#chatLink{display:none;height:20px;width:90px;position:absolute;top:0;left:0;z-index:1;cursor:pointer;}
#header-main-tnt .header-cta .cta-tfn .chat-link div#chatLink img{margin:0 7px 0 0;border:none;vertical-align:middle;}
#header-main-tnt .header-cta .cta-tfn .chat-link div#chatLink a{color:#83A139;font:bold 11px arial;letter-spacing: 0.3px;text-decoration: none;text-transform: uppercase;word-spacing:1px;}
</style>

<script type="text/javascript">
function liveChatClickTNT(){
	try{
		if ($('div[id*=aiu_global_footer_hp]').length >= 1){
			mboxUpdate('aiu_global_footer_hp','liveChatClick=true');	
		}else if ($('div[id*=aiu_global_footer]').length >= 1){
			mboxUpdate('aiu_global_footer','liveChatClick=true');		
		}
	}catch(e){};
}
$(function(){
	//hide default logo
	$('div#mainWrapper div#main div#header div.header-area a:eq(1)').css('display','none');
	$('div#mainWrapper div#main div#header').css('height','166px');
	$('div#mainWrapper').css('padding-top','0px');
	
	//detach work-around
	var selectCampus = $('div#mainWrapper div#main div#header div.header-area div.top select#header_0_virtual_campus_login').clone(true);
	var selectScript = $('html.jsOn body#htmlBody form#form1 div#mainWrapper div#main div#header div.header-area script').clone(true);
	var searchFieldset = $('div#mainWrapper div#main div#header div.header-area div.top div#header_0_pnlSearch').clone(true);
	
	$('div#mainWrapper div#main div#header div.header-area div.top select#header_0_virtual_campus_login').remove();
	$('html.jsOn body#htmlBody form#form1 div#mainWrapper div#main div#header div.header-area script').remove();
	$('div#mainWrapper div#main div#header div.header-area div.top div#header_0_pnlSearch').remove();

	
	//creates new TnT html
	var headerZero = $('<div id="header-zero-tnt" class="rowTnT2"></div>');
	var headerMain = $('<div id="header-main-tnt" class="rowTnT2"><div class="header-logo left"><a href="/"><img width="242" height="112" src="http://www.aiuniv.edu/~/media/AIU/images/Logo/logo.ashx?w=242&h=112&as=1" alt="logo"/></a></div><div class="header-cta rowTnT right"><div class="cta-tfn left"><p>Get Started Today!</p><div id="phoneHeader">1-855-367-1888</div><div class="chat-link right" onclick="return _gaq.push ([\'_trackEvent\', \'Visitor Action\', \'Header Click\', \'Chat Live\']); OmnitureTracking_LiveChatClick(\'careduaiup\');"><div id="lpButton2"></div><div id="chatLink"><a href="#"><img src="http://www.aiuniv.edu/~/media/BGTTestAndTarget/icon-chat.jpg"/>Chat Live</a></div></div></div><div class="cta-apply right rowTnT"><div class="apply-btn"><a href="http://www.aiuniv.edu/Apply-Online?reg_goal=hdrNTxt&code=bgtaiutnt00001"><img src="http://www.aiuniv.edu/~/media/BGTTestAndTarget/btn-apply-h1.jpg"/></a></div><div class="request-link"><a href="http://www.aiuniv.edu/Request-Information?reg_goal=hdrNTxt&code=bgtaiutnt00002">Request Information<img src="http://www.aiuniv.edu/~/media/BGTTestAndTarget/icon-arrow.jpg"/></a></div></div></div></div>');

	//puts in detached items into newly created TnT html
	$('#mainWrapper').before(headerZero);
	$('#mainWrapper').before(headerMain);
	$('#header-zero-tnt').append(selectCampus);
	$('#header-zero-tnt').append(selectScript);
	$('#header-zero-tnt').append(searchFieldset);
	
	//updates search bar icon image
	$('div#header-zero-tnt div#header_0_pnlSearch div#search fieldset a#header_0_lnkSearch img.search_btn').attr('src','http://www.aiuniv.edu/~/media/BGTTestAndTarget/icon-search-gray.jpg');
	$('div#header-zero-tnt div#header_0_pnlSearch div#search fieldset a#header_0_lnkSearch img.search_btn').css('display','block');
	$('div#mainWrapper div#main div#header').css('visibility','visible');
	$('div#mainWrapper div#main div#header').css('height','112px');
	
	//updates phone number
	if(window.location.href.indexOf("aiuniv.edu/Apply-Online?reg_goal=hdrNTxt") != -1) {
		$('div#mainWrapper div#main div#container div#content div#main-content div.col_33 h2 span').text('1-855-367-1888');
	};
			
	//displays chat link image after a set interval time of 4 seconds
	var int=self.setInterval(function(){
		if($('#lpButton2 a img').length >= 1){
			$('#lpButton2 a img').attr('src','http://www.sanfordbrown.edu/~/media/SB/Images/gosbcleland/blank.gif').css('display','block');
			$('#lpButton2').click(function(){liveChatClickTNT();});
			$('.chat-link div#chatLink').css('display','block');
			
			try{
				var chatImgSrc = "http://www.sanfordbrown.edu/~/media/SB/Images/gosbcleland/blank.gif";
				var chatImg = document.createElement('img');
				chatImg.src = chatImgSrc;
				
				lpMTagConfig.dynButton1.imgAlternate = chatImg;
				lpMTagConfig.dynButton1.imgBusy = chatImg;
				lpMTagConfig.dynButton1.imgDefault = chatImg;
				lpMTagConfig.dynButton1.imgOffline = chatImg;
				lpMTagConfig.dynButton1.imgOnline = chatImg;
				
				lpMTagConfig.dynButton1.imgAlternateName = chatImgSrc;
				lpMTagConfig.dynButton1.imgBusyName = chatImgSrc;
				lpMTagConfig.dynButton1.imgDefaultName = chatImgSrc;
				lpMTagConfig.dynButton1.imgOfflineName = chatImgSrc;
				lpMTagConfig.dynButton1.imgOnlineName = chatImgSrc;
			}catch(e){};
			
			clearInterval(int);
		}
	},1000);
});

lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name':'chat-'+lpButtonName+'-'+lpLanguage,'pid':'lpButton2','afterStartPage': true};

</script>