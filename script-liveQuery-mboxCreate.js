<style type="text/css">
/**** oocss ****/
.tntRow{overflow:hidden;}
.tntLeft{float:left;}
.tntRight{float:right;}
.fade{opacity: 1;transition: opacity .25s ease-in-out;-moz-transition: opacity .25s ease-in-out;-webkit-transition: opacity .25s ease-in-out;}.fade:hover{opacity: 0.8;}
/**** update page style *****/
.topbar .container ul.rightmenu li a.phone{display:none;}
.header .container ul{display:none;}
.header ul li.search{right:85px!important;}
/**** offer style ****/
.header{height:110px!important;}
.header .logo{padding-top:30px!important;}
.tntHeaderRight{width:325px;position:relative;right:85px;}
.tntHeaderRight .tntHeaderRow1{margin: 16px 0;}
.tntHeaderRight .tntHeaderRow2{width:320px;}
.tntHeaderRight .tntCtaTfn{font:bold 26px/20px 'Trade Gothic Bold';width:200px;}
.tntHeaderRight .tntCtaTfn img{margin-right:5px;}
.tntHeaderRight .tntCtaChat{height:39px;width:95px;}
.tntHeaderRight .tntCtaChat #tntChatLink{display:none;}
.tntHeaderRight .tntCtaChat .chat-link #lpButton a.chat{background:url('http://www.coloradotech.edu/~/media/CTU/Images/bgt_header_images/btn-chat.aspx') no-repeat left center transparent scroll;display:block;height:39px;width:95px;}
.tntHeaderRight .tntCtaChat img{margin-right:5px;}
.tntHeaderRight .tntCtaApply{font:bold 22px/20px 'Trade Gothic bold';line-height:18px;}
.tntHeaderRight .tntCtaApply a{color:#fff}
.tntHeaderRight .tntCtaApply a:hover{text-decoration:underline;}
.tntHeaderRight .tntCtaApply img{margin-right:10px;}
.tntHeaderRight .tntCtaRequest{margin:0 20px 0 0;height:39px;width:205px;}
.tntHeaderRight .tntPipe{border-left:1px solid #000;height:20px;margin:0 15px;}
#lpButton a.chat{text-indent:-9999px}
#main-content div.row div.col_33 h2 span{visibility:hidden;}

.tntHeaderRight .tntHeaderRow1 .tntCtaApply a.apply{text-transform:uppercase;}
.tntHeaderRight .tntCtaApply a:hover{text-decoration:none;}
#tntTopbarContainer{width:110px;position:relative;right:300px;float:right;}
.topbar .container #tntTopbarContainer #tntMilitaryBox {width:110px; height:38px; background-color:#222222;text-align:center;text-transform:uppercase;font-size:11px;color:#ffffff;display:block;}
#tntTopbarContainer #tntMilitaryBox #tntMilitaryGray{width:15px;float:left;padding:5px 0 0 0;margin:0 0 0 10px;}
h3#tntMilitaryHead{text-transform:uppercase;font-size:11px;color:#ffffff;float:left; margin:15px 0 0 10px;}
</style>

<div class="mboxDefault"></div>
<script type="text/javascript">mboxCreate('ctu_chatLink');</script>

<script type="text/javascript">
(function(a){a.extend(a.fn,{livequery:function(e,d,c){var b=this,f;if(a.isFunction(e)){c=d,d=e,e=undefined}a.each(a.livequery.queries,function(g,h){if(b.selector==h.selector&&b.context==h.context&&e==h.type&&(!d||d.$lqguid==h.fn.$lqguid)&&(!c||c.$lqguid==h.fn2.$lqguid)){return(f=h)&&false}});f=f||new a.livequery(this.selector,this.context,e,d,c);f.stopped=false;f.run();return this},expire:function(e,d,c){var b=this;if(a.isFunction(e)){c=d,d=e,e=undefined}a.each(a.livequery.queries,function(f,g){if(b.selector==g.selector&&b.context==g.context&&(!e||e==g.type)&&(!d||d.$lqguid==g.fn.$lqguid)&&(!c||c.$lqguid==g.fn2.$lqguid)&&!this.stopped){a.livequery.stop(g.id)}});return this}});a.livequery=function(b,d,f,e,c){this.selector=b;this.context=d;this.type=f;this.fn=e;this.fn2=c;this.elements=[];this.stopped=false;this.id=a.livequery.queries.push(this)-1;e.$lqguid=e.$lqguid||a.livequery.guid++;if(c){c.$lqguid=c.$lqguid||a.livequery.guid++}return this};a.livequery.prototype={stop:function(){var b=this;if(this.type){this.elements.unbind(this.type,this.fn)}else{if(this.fn2){this.elements.each(function(c,d){b.fn2.apply(d)})}}this.elements=[];this.stopped=true},run:function(){if(this.stopped){return}var d=this;var e=this.elements,c=a(this.selector,this.context),b=c.not(e);this.elements=c;if(this.type){b.bind(this.type,this.fn);if(e.length>0){a.each(e,function(f,g){if(a.inArray(g,c)<0){a.event.remove(g,d.type,d.fn)}})}}else{b.each(function(){d.fn.apply(this)});if(this.fn2&&e.length>0){a.each(e,function(f,g){if(a.inArray(g,c)<0){d.fn2.apply(g)}})}}}};a.extend(a.livequery,{guid:0,queries:[],queue:[],running:false,timeout:null,checkQueue:function(){if(a.livequery.running&&a.livequery.queue.length){var b=a.livequery.queue.length;while(b--){a.livequery.queries[a.livequery.queue.shift()].run()}}},pause:function(){a.livequery.running=false},play:function(){a.livequery.running=true;a.livequery.run()},registerPlugin:function(){a.each(arguments,function(c,d){if(!a.fn[d]){return}var b=a.fn[d];a.fn[d]=function(){var e=b.apply(this,arguments);a.livequery.run();return e}})},run:function(b){if(b!=undefined){if(a.inArray(b,a.livequery.queue)<0){a.livequery.queue.push(b)}}else{a.each(a.livequery.queries,function(c){if(a.inArray(c,a.livequery.queue)<0){a.livequery.queue.push(c)}})}if(a.livequery.timeout){clearTimeout(a.livequery.timeout)}a.livequery.timeout=setTimeout(a.livequery.checkQueue,20)},stop:function(b){if(b!=undefined){a.livequery.queries[b].stop()}else{a.each(a.livequery.queries,function(c){a.livequery.queries[c].stop()})}}});a.livequery.registerPlugin("append","prepend","after","before","wrap","attr","removeAttr","addClass","removeClass","toggleClass","empty","remove","html");a(function(){a.livequery.play()})})(jQuery);

function liveChatClickTNT(){
	try{
		if ($('div[id*=ctu_chatLink]').length >= 1){
			mboxUpdate('ctu_chatLink','liveChatClick=true');	
		}
	}catch(e){};
}

function chatButtonCheck(){
	var chatButton = document.getElementById('lpButton');
	if (chatButton.innerHTML.toLowerCase().indexOf('<a')!=-1){
		document.getElementById('tntChatLink').style.display = 'block';
		window.clearInterval(chatButtonInt);
	}
}

var chatButtonInt;

if(window.location.href.toLowerCase().indexOf('coloradotech.edu/apply-online')!=-1){
  jQuery('#main-content div.row div.col_33 h2 span').text('1-888-574-9777');
	jQuery('#main-content div.row div.col_33 h2 span').css('visibility','visible');
}

jQuery('.header').livequery(function(){
	var logoHeader = jQuery(this).find('.container a.logo').clone(true);
	var applyHeaderLink = jQuery(this).find('.container ul li a.apply').clone(true);
	var chatHeaderLink = jQuery(this).find('.container ul li#chat #lpButton').clone(true);
	var requestHeaderLink = jQuery(this).find('.container ul li a.info').clone(true);
	var searchHeaderBar = jQuery(this).find('.container ul li.search').clone(true);
	
	jQuery('.topbar .container ul.rightmenu li a.phone').remove();

	jQuery(this).find('.container').html('<ul class="searchTnT"></ul><div class="tntHeaderRight tntRight tntRow"><div class="tntHeaderRow1 tntRow tntRight"><div class="tntCtaTfn tntLeft"><img src="http://www.coloradotech.edu/~/media/CTU/Images/bgt_header_images/icon-tfn.aspx">1-888-574-9777</div><div class="tntPipe tntLeft"></div><div class="tntCtaApply tntLeft fade"></div></div><div class="tntHeaderRow2 tntRow tntRight"><div class="tntCtaRequest tntLeft fade"></div><div class="tntCtaChat tntLeft fade"><div id="tntChatLink" class="chat-link" onclick="liveChatClickTNT()"></div></div></div></div>');
	
	jQuery(this).find('.container ul.searchTnT').before(logoHeader);
	jQuery(this).find('.container .tntHeaderRight .tntHeaderRow2 .tntCtaChat .chat-link').append(chatHeaderLink);
	jQuery(this).find('.container .tntCtaApply').append(applyHeaderLink);
	jQuery(this).find('.container .tntCtaApply a').text('Apply');
	jQuery(this).find('.container .tntCtaRequest').append(requestHeaderLink);
	jQuery(this).find('.container .tntCtaRequest a').html('<img src="http://www.coloradotech.edu/~/media/CTU/Images/bgt_header_images/btn-request-info.aspx"/>');
	jQuery(this).find('.container ul.searchTnT').append(searchHeaderBar);
	jQuery(this).find('.container ul.searchTnT').css('display','block');
	
	//////cid updates to links
	jQuery('.container div.tntHeaderRight div.tntHeaderRow1 div.tntCtaApply a.apply').attr('href','/Apply-Online?LeadType=ApplyNow&icid=bgtctutnt00010');
	jQuery('.container div.tntHeaderRight div.tntHeaderRow2 div.tntCtaRequest a.info').attr('href','/Request-Information?LeadType=RequestInfo&icid=bgtctutnt00009');
	
	chatButtonInt = window.setInterval(chatButtonCheck,500);
	
	$(function(){
    $('.topbar .container ul.rightmenu').before('<div id="tntTopbarContainer"><a href="/military.aspx?icid=bgtctutnt00011" id="tntMilitaryBox" class="fade"><img src="http://www.coloradotech.edu/~/media/CTU/Images/military-chevron-gray-icon.png" id="tntMilitaryGray"/><h3 id="tntMilitaryHead">Military</h3></a></div>');
	});
});
// CTU Global Header 1 Script - 5/4/2013
</script>