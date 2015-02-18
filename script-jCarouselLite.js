<style type="text/css">
/*========================================
	Chicago - Page Redesign 1
========================================*/
.container div.col_240{display:none;}
.container div.col_710,#masthead div.top p span{visibility:hidden;}
div#ShortBottomForm{padding-top:0px;margin-top:0px;}
.col_710{width:960px;}
div.share_tools{float:right;margin:0px;}
div#masthead div.top p span{visibility:hidden;}
.TNTintro {overflow:hidden;padding-bottom: 40px;}
.TNTintroText {float: left;padding-right: 27px;width: 461px;}
.TNTintroText h2 {border-bottom: none;padding-bottom: 12px;margin-top:10px;}
.TNTintroText a.button {color: #00a5bf;font: bold 14px Arial;text-align: center;padding: 9px 25px;display: inline-block;border: solid 1px #cbcaca;text-transform: uppercase;margin-top: 5px;background:url('http://fbdev.bgtpartners.com/iadt/chicago/btn-bkg-learn.jpg') repeat-x transparent scroll top left;}
.TNTslideshow_holder {float: right;padding:15px 0 0;}
.TNTcolumns .Threecolumns {float: left;padding-bottom: 20px;}
.TNTcolumns .Threecolumns .TNTCol {float: left;padding-right: 9px;	width: 217px;}
.TNTcolumns .Threecolumns .TNTCol img {padding-bottom: 15px; }
.TNTcolumns .Threecolumns .TNTCol h3 {font: bold 16px Arial;color: #000000;padding-bottom: 15px;margin-bottom: 0px;border-bottom: none;}
.TNTcolumns .Threecolumns .TNTCol p {line-height: 1.3em;margin-top: 0px;	}
.TNTcolumns .Threecolumns .TNTCol a {font: 12px Arial;color: #00a5bf;padding-bottom: 10px;display: block;	text-decoration: underline;}
.TNTcolumns .Threecolumns .TNTCol ul li {font: bold 12px Arial;color: #333333;padding-bottom: 10px;}
.TNTcolumns .Threecolumns .TNTCol ul li a {display: inline-block;margin-left: 5px;padding-bottom: 0px;}
.TNToneColumn {float: left;width:280px;}
.TNTLearn {clear: both;overflow: hidden;padding-bottom: 30px;padding-top: 22px;}
.TNTLearn h3 {font: bold 16px Arial;color: #000000;padding-bottom: 15px;margin-bottom: 0px;border-bottom: none;}
.TNTLearn ul li {float: left;margin-right: 10px;height: 68px;border: solid 1px #cbcaca;display: table; overflow: hidden;background:url('http://fbdev.bgtpartners.com/iadt/chicago/btn-bkg-learn.jpg') repeat-x transparent scroll top left;}
.TNTLearn ul li.last-child {margin-right: 0px;}	
.TNTLearn ul li div {display: table-cell; vertical-align: middle;}
.TNTLearn ul li a {color: #00a5bf;font: 14px Arial;text-align: center;width: 83px;padding-left: 9px;padding-right: 9px;display: block;}
.TNTnews {background:url('http://fbdev.bgtpartners.com/iadt/chicago/btn-bkg-learn.jpg') repeat-x transparent scroll top left;border: solid 1px #cbcaca;overflow: hidden;width: 667px;}
.TNTnews h4 {font: bold 16px Arial;color: #000;float: left;margin-right: 13px;padding: 15px;margin-bottom: 0px;border-bottom: none;border-right: 1px solid #CBCACA;}
.TNTnews div {float: left;height: 32px;}
.TNTnews span {color: #999999;font: 12px Arial;padding-right: 10px;}
.TNTnews div a {color: #333333;font: 12px Arial;}
.TNTnews ul.TNTnav  {float: right;padding-top: 18px;padding-right: 11px;}
.TNTnews ul.TNTnav li  {float: left;padding-right: 10px;}
.TNTnews ul.TNTnav li a  {display: block;height: 13px;text-indent: -999999px;width: 8px;}
.TNTnews ul.TNTnav li a.TNTleft  {background: url('http://fbdev.bgtpartners.com/iadt/chicago/leftarrow.png') no-repeat;}
.TNTnews ul.TNTnav li a.TNTright  {background: url('http://fbdev.bgtpartners.com/iadt/chicago/rightarrow.png') no-repeat;}
.TNTticker {float: left;}
.TNTticker ul {float: left;padding-top: 18px !important;}
#disclosures{float:right;}
</style>

<script type="text/javascript">
////////////////////////////////////////////////
//News Ticker carousel script
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);

jQuery(document).ready(function(){
  jQuery('.container div.col_240').remove();
	jQuery('#masthead div.top p span').html('1-877-458-6111');
jQuery('#masthead div.top p span').css('visibility','visible');
	jQuery('#masthead div.top p span').css('visibility','visible');
  var tntShare = jQuery('.container div.col_710 div.share_tools').clone(true);
	var tntForm = jQuery('#ShortBottomForm.skinny_request').clone(true);
	
	if(window.location.href.indexOf("ThankYou") == -1) {
		if (typeof(TrackOmnitureConversion) == "function"){
			mboxUpdate('iadt_global_footer','formSubmit=chicago');
		}
  }

	jQuery('.content').html('<div id="phslideshow_0_rptCampusSlideShow_ctl00_dvCampusName" class="screen"><h2 class="campus">IADT-Chicago</h2></div><div class="TNTintro"><div class="TNTintroText"><h2>Welcome to IADT-Chicago.</h2><p>For more than 30 years, IADT has inspired students from across the country to think outside of the box when it comes to tapping into their talents and turning them into marketable assets in today\'s competitive job market.</p><p>As a student here, you\'ll be immersed into a stimulating academic community dedicated to fueling your imagination and helping you maximize your creative potential.</p><p><a href="https://server18.securedata-trans.com/ap/internationalacademyofdesigntechnology/index.php?page=10">Schedule a visit</a> or check out an upcoming <a href="http://www.iadt.edu/Chicago/Campus-Events">Open House</a> to come see for yourself!</p><a href="https://server18.securedata-trans.com/ap/internationalacademyofdesigntechnology/index.php?page=10&icid=bgtiadttnt00008" class="button">Schedule A Visit</a></div><div class="TNTslideshow_holder"><img src="http://fbdev.bgtpartners.com/iadt/chicago/img1.jpg" /></div></div><div class="TNTcolumns"><div class="Threecolumns"><div class="TNTCol"><img src="http://fbdev.bgtpartners.com/iadt/chicago/areas.jpg" width="217" height="111" /><h3>Areas of Study</h3><ul id="TNTareasOfStudy"><li>Computer Forensics <a href="http://www.iadt.edu/Degree-Programs/Technology-and-Business/Computer-Forensics/Bachelor-of-Science-in-Computer-Forensics">BS</a></li></li><li>Fashion Design <a href="http://www.iadt.edu/Degree-Programs/Fashion/Fashion-Design/Bachelor-of-Fine-Arts-in-Fashion-Design">BFA</a></li><li>Fashion Merchandising <a href="http://www.iadt.edu/Degree-Programs/Fashion/Fashion-Merchandising/Associate-of-Applied-Science-in-Merchandising-Management-Fashion-Merchandising">AAS</a><a href="http://www.iadt.edu/Degree-Programs/Fashion/Fashion-Merchandising/Bachelor-of-Arts-in-Merchandising-Management-Fashion-Merchandising">BA</a></li><li>Video & Animation Production<a href="http://www.iadt.edu/Degree-Programs/Media-Arts-and-Technology/Film-Video-and-Animation-Post-Production/Bachelor-of-Fine-Arts-in-Visual-Communications-Video-and-Animation-Production">BFA</a></li><li>Game Design<a href="http://www.iadt.edu/Degree-Programs/Media-Arts-and-Technology/Game-Design-and-Production/Bachelor-of-Fine-Arts-in-Visual-Communications-Game-Design">BFA</a></li><li>Graphic Design<a href="http://www.iadt.edu/Degree-Programs/Design/Graphic-Design/Associate-of-Applied-Science-in-Visual-Communications-Graphic-Design">AAS</a><a href="http://www.iadt.edu/Degree-Programs/Design/Graphic-Design/Bachelor-of-Fine-Arts-in-Visual-Communications-Graphic-Design">BFA</a></li><li>Information Technology<a href="http://www.iadt.edu/Degree-Programs/Technology-and-Business/Information-Technology/Associate-of-Applied-Science-in-Information-Technology">AAS</a><a href="http://www.iadt.edu/Degree-Programs/Technology-and-Business/Information-Technology/Bachelor-of-Applied-Science-in-Information-Technology">BAS</a></li><li>Multimedia and Web Design<a href="http://www.iadt.edu/Degree-Programs/Technology-and-Business/Web-Design-and-Development/Associate-of-Applied-Science-in-Visual-Communications-Multimedia-and-Web-Design">AAS</a><a href="http://www.iadt.edu/Degree-Programs/Technology-and-Business/Web-Design-and-Development/Bachelor-of-Fine-Arts-in-Visual-Communications-Multimedia-and-Web-Design">BFA</a></li></ul></div><div class="TNTCol"><img src="http://fbdev.bgtpartners.com/iadt/chicago/chicago.jpg" width="217" height="111" /><h3>Living in Chicago</h3><p>Located in the heart of the bustle of Chicago\'s famed State Street, IADT-Chicago\'s facilities include lecture rooms, drafting labs, design studios, sewing and pattern-making rooms, and computer labs.</p><a href="http://www.iadt.edu/Chicago/Student-Housing?icid=bgtiadttnt00010">Student Housing</a><a href="http://www.iadt.edu/Chicago/About-IADT-Chicago?icid=bgtiadttnt00010">About IADT-Chicago</a></div><div class="TNTCol"><div itemtype="http://schema.org/Place" itemscope="" itemprop="location" id="googlemap"><iframe width="217" scrolling="no" height="111" frameborder="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=One+North+State+Street,+Chicago,+IL+60602&amp;sll=37.0625,-95.677068&amp;sspn=61.023673,134.912109&amp;ie=UTF8&amp;hq=&amp;hnear=1+N+State+St,+Chicago,+Cook,+Illinois+60602&amp;z=14&amp;ll=41.882825,-87.627597&amp;output=embed" marginwidth="0" marginheight="0"></iframe><br><small><a target="_blank" href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=One+North+State+Street,+Chicago,+IL+60602&amp;sll=37.0625,-95.677068&amp;sspn=61.023673,134.912109&amp;ie=UTF8&amp;hq=&amp;hnear=1+N+State+St,+Chicago,+Cook,+Illinois+60602&amp;z=14&amp;ll=41.882825,-87.627597">View Larger Map</a></small></div><h3>Campus Location</h3><p>IADT-Chicago<br/>One North State Street<br/>Chicago, IL 60602</p> <p>Toll Free Class Information:<br/>(888) 318-6111</p><p>All other inquiries:<br/>(312) 980-9200</p></div><div class="TNTLearn"><h3>Learn More</h3><ul><li><div><a href="http://www.iadt.edu/Chicago/Presidents-Welcome">President\'s Welcome</a></div></li><li><div><a href="http://www.iadt.edu/Chicago/Campus-Faculty-and-Staff">Campus Faculty & Staff</a></div></li><li><div><a href="http://www.iadt.edu/Student-Life/Alumni">Alumni</a></div></li><li><div><a href="http://www.iadt.edu/Chicago/Campus-Events">Campus Events</a></div></li><li><div><a href="http://www.iadt.edu/Chicago/Candidate-for-Acceptance">Candidate for Acceptance</a></div></li><li class="last-child"><div><a href="http://www.iadt.edu/Disclosures">Student Disclosures</a></div></li></ul></div><div class="TNTnews"><h4>IADT Chicago News</h4><div class="TNTticker"><ul><li><span><em><time datetime="2013-04-22" itemprop="startDate">April 22, 2013  - </time></em></span><a itemprop="url" href="http://www.iadt.edu/Student-Life/IADT-Buzz/April-2013/How-Cloud-Computing-Works" class="lightGreenTextB">How Cloud Computing Works</a></li><li><span><em><time datetime="2013-03-25" itemprop="startDate">March 25, 2013 - </time></em></span><a itemprop="url" href="http://www.iadt.edu/Student-Life/IADT-Buzz/March-2013/What-Does-A-Publication-Designer-Do" class="lightGreenTextB">What Does A Publication Designer Do?</a></li><li><span><em><time datetime="2013-05-15" itemprop="startDate">May 15, 2013 - </time></em></span><a itemprop="url" href="http://www.iadt.edu/Chicago/Campus-Events/2013-04-15-Design-Showcase" class="lightGreenTextB"> IADT-Chicago Design Showcase </a></li><li><span><em><time datetime="2013-02-25" itemprop="startDate">February 25, 2013 - </time></em></span><a itemprop="url" href="http://www.iadt.edu/About-IADT/Press-Room/Press-Releases/Brand/2013-02-25-IADT-Launches-Campaign-Focused-on-its-New-Breed-of-Students" class="lightGreenTextB">IADT Launches Campaign Focused on its...</a></li></ul></div><ul class="TNTnav"><li><a href="#" class="TNTleft">Previous</a></li><li><a href="#" class="TNTright">Next</a></li></ul></div></div><div class="TNToneColumn"><!-- FORM GOES HERE --><div id="disclosures"><a href="/Disclosures?campus=Online"><img width="177" height="95" alt="IADT Student Disclosures - Learn More" src="/~/media/IADT/images/Buttons_Banners/disclosures.ashx" /></a></div></div></div>');
	
	jQuery('.container div.col_710').css('visibility','visible');
	jQuery('.content').prepend(tntShare);		
	jQuery('.TNToneColumn').prepend(tntForm);

	jQuery(".TNTticker").jCarouselLite({
		btnNext: ".TNTright",
		btnPrev: ".TNTleft",
		visible: 1,
		speed: 2000,
		auto: 2000
	});
	/////////////////////////
	//cid updates to links
	
	//updates TNTintroText hrefs with cids
	jQuery('.TNTintroText p a').each(function(){
		var cidTnT = 'icid=bgtiadttnt00007' ;
		if($(this).attr('href').indexOf('?')!= -1){
			$(this).attr('href', $(this).attr('href')+'&'+cidTnT);
		}else{
				$(this).attr('href', $(this).attr('href')+'?'+cidTnT);
			}
	});

	//updates Areas of Study hrefs with cid's
	jQuery('ul#TNTareasOfStudy li a').each(function(){
		var cidTnT = 'icid=bgtiadttnt00009' ;
		if($(this).attr('href').indexOf('?')!= -1){
			$(this).attr('href', $(this).attr('href')+'&'+cidTnT);
		}else{
				$(this).attr('href', $(this).attr('href')+'?'+cidTnT);
			}
	});
	
	//updates Learn More hrefs with cid's
		jQuery('.TNTLearn ul li div a').each(function(){
			var cidTnT = 'icid=bgtiadttnt00011' ;
			if($(this).attr('href').indexOf('?')!= -1){
				$(this).attr('href', $(this).attr('href')+'&'+cidTnT);
			}else{
					$(this).attr('href', $(this).attr('href')+'?'+cidTnT);
				}
		});
	
	//updates News links hrefs with cid's
	jQuery('.TNTnews div.TNTticker ul li a').each(function(){
		var cidTnT = 'icid=bgtiadttnt00012' ;
		if($(this).attr('href').indexOf('?')!= -1){
			$(this).attr('href', $(this).attr('href')+'&'+cidTnT);
		}else{
				$(this).attr('href', $(this).attr('href')+'?'+cidTnT);
			}
	});
		
});
// IADT - Chicago - Page Redesign 1 - 4/18/2013
</script>