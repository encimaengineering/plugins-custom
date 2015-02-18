s = new AppMeasurement();

/************************ REPORT SUITE TOGGLE ************************/
if (!s.account) {
	s.account = "usgcom,usgglobal";
	var accountUrl = window.location.toString().toLowerCase();
	if ( accountUrl.indexOf("usmiscqs003.burndev.com") > -1 || accountUrl.indexOf("usgstage.adobecqms.com") > -1 || accountUrl.indexOf("dev-usg.bgtpartners.com") > -1 ) {
		s.account = "usgdev";
	}else if ( accountUrl.indexOf("en_ca_east") > -1 || accountUrl.indexOf("en_ca_west") > -1 || accountUrl.indexOf("fr_ca_east") > -1 || accountUrl.indexOf("fr_ca_west") > -1 ){
		s.account = "usgca,usgglobal";
	}else if ( accountUrl.indexOf("en_mexico") > -1 || accountUrl.indexOf("spanish") > -1 ){
		s.account = "usgmx,usgglobal";
	}else if (accountUrl.indexOf("en_asia") > -1 ){
		s.account = "usgasia,usgglobal";
	}else if (accountUrl.indexOf("en_australia") > -1 ){
		s.account = "usgau,usgglobal";
	}else if (accountUrl.indexOf("en_india") > -1 ){
		s.account = "usgindia,usgglobal";
	}
}

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="ISO-8859-1"
/* Conversion Config */
s.currencyCode="USD"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,doc,pdf,xls"
s.linkInternalFilters = "usg.com,#,tel:,javascript:,localhost:,dev-usg,dev-usgpie,burndev.com,adobecqms.com,businesswire.com,corporate-ir.net,apps.genesis.usg.com,usgcorp,database,bgtinside.com" //optional: add your internal domains here
s.linkLeaveQueryString=false
s.trackInlineStats=true
s.linkTrackVars="None"
s.linkTrackEvents="None"
s.server=window.location.hostname;

// timeparting config variables
var usgDate = new Date();
var currYear = usgDate.getFullYear();
s.currentYear = currYear;
if (currYear == "2013"){
	s.dstStart="3/10/" + currYear;
	s.dstEnd="11/3/" + currYear;
} else if (currYear == "2014"){
	s.dstStart="3/9/" + currYear;
	s.dstEnd="11/2/" + currYear;
} else if (currYear == "2015"){
	s.dstStart="3/8/" + currYear;
	s.dstEnd="11/1/" + currYear;
} else {
	s.dstStart="1/1/" + currYear;
	s.dstEnd="1/1/" + currYear;
}

/************************** PLUGIN CONFIGURATION SECTION *************************/
/*	        Configure plugins in the following s_doPlugins section	 	 */
/************************** PLUGIN CONFIGURATION SECTION *************************/

s.usePlugins=true
function s_doPlugins(s) {
	/* Add calls to plugins here */
	
	/* Custom Plugin: getPageName */
	getPageName();
	/* Custom Plugin: getChannel */
	getChannel();

    /* getNewRepeat Determines whether a visitor is a new visitor or a repeat visitor */
	s.prop52 = s.getNewRepeat();
	s.eVar52 = s.prop52;
	
	// timeParting config variables assigned to props and eVars
	/* Uses GMT -6 time zone - USG Omniture suite is set to CST */
	s.prop48=s.getTimeParting('h','-6'); // Set hour
	s.prop49=s.getTimeParting('d','-6'); // Set day
	s.prop50=s.getTimeParting('w','-6'); // Set weekday
	s.eVar48=s.getTimeParting('h','-6'); // Set hour
	s.eVar49=s.getTimeParting('d','-6'); // Set day
	s.eVar50=s.getTimeParting('w','-6'); // Set weekday

	/* Internal Campaigns */
	if(!s.campaign) s.campaign=s.Util.getQueryParam('intcmp');  //sets internal campaign data to eVar0
	if(!s.eVar4) s.eVar4=s.Util.getQueryParam('intcmp');  //sets internal campaign data to eVar4
	s.eVar4=s.getValOnce(s.eVar4,'s_eVar4',0);
	
	/* External Campaigns */
	if(!s.eVar16){
		if (s.eVar16=s.Util.getQueryParam('cid')){
			s.eVar16 = s.getValOnce(s.eVar16,'s_eVar16',0);
		}else if(s.eVar16=s.Util.getQueryParam('pid')){
			s.eVar16 = s.getValOnce(s.eVar16,'s_eVar16',0);
		}
	}
	
	/* Internal Search */
	if(!s.prop5){
		s.prop5=s.Util.getQueryParam('query');
		s.prop5=s.prop5.toLowerCase();
		s.eVar5=s.prop5;
		var t_search=s.getValOnce(s.eVar5,'s_eVar5',0);
		if(t_search){
			s.events=s.apl(s.events,"event5",",",2);
		}
	}
	
	/* Search Origination Pages */
	s.prop11=s.getPreviousValue(s.pageName,'gpv_p11','event5');
	
  /* Direct Influence Pages */
  /* CR 66694 */
	if (s.pageType == "errorPage"){
		s.eVar3 = "404 Error Page";
	}
	else{
		s.eVar3=s.pageName;
	}
	
  /* Copy props to eVars to set eVars to site and sub sections*/
	s.eVar11=s.prop1; // sets site section to eVar11
	s.eVar12=s.prop2; // sets sub section 1 to eVar12
	s.eVar13=s.prop3;  // sets sub section 2 to eVar13
	s.eVar14=s.prop4;  // sets sub section 3 to eVar14
	s.eVar55=s.prop55;  // sets sub section 4 to eVar55

}
s.doPlugins=s_doPlugins

/********************** Media Module Calls ************************/

s.loadModule("Media")
s.Media.onLoad=function(s) {
	s.Media.autoTrack= false;
	s.Media.trackMilestones="25,50,75";
	s.Media.playerName="YouTube";
	s.Media.trackVars="eVar8,eVar9,eVar10,events"
	s.Media.trackEvents="event18,event19,event20,event21,event45,event46,event47"
	s.Media.segmentByMilestones = true;
	s.Media.trackUsingContextData = true;
	s.Media.contextDataMapping = {
	    "a.media.name":"eVar8",
	    "a.media.segment":"eVar9",
	    "a.contentType":"eVar10",
	    "a.media.timePlayed":"event18",
	    "a.media.view":"event19",
	    "a.media.segmentView":"event21",
	    "a.media.complete":"event20",
	    "a.media.milestones":{
	        25:"event45",
	        50:"event46",
	        75:"event47"
	    }
	}
}

//set the following vars to dynamic values
var mediaOffset = 15;
var segmentNum = 0;
var segment = 0;
var segmentLength = 15;
var mediaLength = 40; 
var mediaPlayerName = 'YouTube';

/*Call on video load*/
function startMovie(){
    mediaName = $("#MediaPlayer").attr("title") || "USG Video";
    s.Media.open(mediaName,mediaLength,mediaPlayerName);
    playMovie();   
}

tempvar=0
/*Call on video resume from pause and slider release*/
function playMovie(){
    mediaName = $("#MediaPlayer").attr("title") || "USG Video";
    if(!tempvar)
    {
        s.Media.open(mediaName,mediaLength,mediaPlayerName);
        tempvar=1
    }
    s.Media.play(mediaName,mediaOffset);
}

/*Call on video pause and slider grab*/
function stopMovie(){
    mediaName = $('#MediaPlayer').attr('title') || "USG Video";
    s.Media.stop(mediaName,mediaOffset);
}

/*Call on video end*/
function endMovie(){
    stopMovie();
    mediaName = $("#MediaPlayer").attr("title") || "USG Video";
    s.Media.close(mediaName);     
}

var mediaName = 'Media Player';

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here. */

/* Plugin: PageName */
 //update for prod site
getPageName = function(){
 
	var pageURL =window.location.pathname;	
	var pathArray = pageURL.split("/");
	var firstIndex = 3; //update for prod site
	var secondIndex = firstIndex + 1;
	var pathLength = pathArray.length;	
	
	// remove .html from last item
	pageHTML = pathArray[pathLength-1].split("."); // remove .html
	pathArray[pathLength-1] = pageHTML[0];
	
	var pageName ="";
	for ( i = firstIndex; i < pathArray.length; i++ ) {
		urlItem = pathArray[i];
		if ( (pathLength === (secondIndex)) || ((i === firstIndex) && (pathLength >  firstIndex)) || ( (i+1) === pathLength)) {  //if there's only 1 item or if this is the first one and there are more or if this is the last item (remove .html)
			pageitem = urlItem.replace(/_/g,"-"); //this is the page name
			if (pageitem === "en") {
				pageitem = "us";
				s.country = "us";
			}	else if ( pageitem === "en-CA-east" ){
				pageitem = "ca|en|east";
				s.country = "ca|en|east";
			} else if ( pageitem === "en-CA-west" ){
				pageitem = "ca|en|west";
				s.country = "ca|en|west";
			}	else if ( pageitem === "fr-CA-east" ){
				pageitem = "ca|fr|east";
				s.country = "ca|fr|east";
			}	else if ( pageitem === "fr-CA-west" ){
				pageitem = "ca|fr|west";
				s.country = "ca|fr|west";
			}	else if ( pageitem === "en-mexico" ){
				pageitem = "mx|en";
				s.country = "mx|en";
			}	else if ( pageitem === "spanish" ){
				pageitem = "mx|sp";
				s.country = "mx|sp";
			}	else if ( pageitem === "en-asia" ){
				pageitem = "asia|en";
				s.country = "asia|en";
			}	else if ( pageitem === "en-australia" ){
				pageitem = "au|en";
				s.country = "au|en";
			}	else if ( pageitem === "en-india" ){
				pageitem = "india|en";
				s.country = "india|en";
			}
			//sets variables with country and language values
			var countryLanguageArray = s.country.split('|');
			var countryArray = countryLanguageArray[0];
			if ( countryLanguageArray[1] === undefined || countryLanguageArray[1] === '' ){
				languageArray = 'en';
			}else{
				languageArray = countryLanguageArray[1];
			}
			if (!s.prop51){ // identify the country and report to prop51
				s.prop51 = s.country;
			}
			if (!s.eVar51){ // identify the country and report to eVar51
				s.eVar51 = s.country;
			}
			if (i === firstIndex) {// any language this is the first element
				pageitem = pageitem;
			}
			if  ((secondIndex === pathLength) || ((pathArray[secondIndex]) === "" )) {
				pageitem = pageitem + "|home";
			}
			if (i === (secondIndex)) { // if this is the second item then is tier1
			pageitem = urlItem;
			s.prop1= s.country + '|' + pageitem; // Site Section
			}
		} else if ((i === (secondIndex)) && (pathLength > (secondIndex))) {  // if this is the second item and there are more, then this is the landing page
			pageitem = urlItem;
			s.prop1= s.country + '|' + pageitem; // Site Section
		} else { // everything else
			pageitem = urlItem;
		}
		if ( ((i+1) < pathLength) && (pathArray[i+1] !== "") ){ // if is not the last item then add the pipe
			pageitem = pageitem + "|";
		}
		pageName = pageName + pageitem;
	}	
	s.pageName = pageName.toString().toLowerCase();
	if ( pathArray[5] ) { s.prop2 = s.prop1 + '|' + pathArray[5]; }  //Sub Section Level 1
	if ( pathArray[6] ) { s.prop3 = s.prop1 + '|' + pathArray[5] + '|' + pathArray[6]; }  //Sub Section Level 2
	if ( pathArray[7] ) { s.prop4 = s.prop1 + '|' + pathArray[5] + '|' + pathArray[6] + '|' + pathArray[7]; }  //Sub Section Level 3
	if( pathArray[8] !== '' && pathArray[8] !== undefined){//  Sub Section Level 4 - detail page is the deepest path on usg.com
		s.prop55 = s.prop1 + '|' + pathArray[5] + '|' + pathArray[6] + '|' + pathArray[7] + '|' + pathArray[8];
	}
	return s.pageName;
};

function getChannel(){
	if(! s.prop1){
		s.channel = s.country + '|' + 'home';
		s.prop1 = s.country + '|' + 'home';
	}else{
		s.channel = s.prop1;	//sets site section to channel
	}
	return s.channel;
}

/* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/* Plugin: getTimeParting 2.0 - Set timeparting values based on time zone */
s.getTimeParting=new Function("t","z",""
+"var s=this,cy;dc=new Date('1/1/2000');"
+"if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}"
+"else{;z=parseFloat(z);var dsts=new Date(s.dstStart);"
+"var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl)"
+"{z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);"
+"tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();"
+"var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',"
+"'Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;"
+"thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();"
+"var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';"
+"if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};"
+"if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};"
+"var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}"
+"if(t=='d'){return dow};if(t=='w'){return dt}}};");

/* Plugin: linkHandler 0.5 - identify and report custom links */
s.linkHandler=new Function("p","t",""
+"var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+"ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+"substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+"e=l=='[['?'':l;s.linkType=t;return h;}return '';");
s.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");

/* Plugin: getValOnce_v1.1 */
// used with internal and external campaigns
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

/* Utility Function: split v1.5 - split a string (JS 1.0 compatible) */
// used in multiple instances
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* Plugin Utility: apl v1.1 */
// used with internal search
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/* Plugin: getPreviousValue_v1.0 - return previous value of designated */
//variable (requires split utility)
// used for Search Origination Pages
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/* Plugin: downloadLinkHandler 0.5 - identify and report download links */
s.downloadLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
+"ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+"if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");

/* Utility Function: p_gh */
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

/* Utility Function: p_c */
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");

/****************************** MODULES *****************************/
/* Module: Media */
function AppMeasurement_Module_Media(s){var m=this;m.s=s;s=window;if(!s.s_c_in)s.s_c_il=[],s.s_c_in=0;m._il=s.s_c_il;m._in=s.s_c_in;m._il[m._in]=m;s.s_c_in++;m._c="s_m";m.list=[];m.open=function(w,b,c,h){var d={},a=new Date,g="",e;b||(b=-1);if(w&&c){if(!m.list)m.list={};m.list[w]&&m.close(w);if(h&&h.id)g=h.id;if(g)for(e in m.list)!Object.prototype[e]&&m.list[e]&&m.list[e].S==g&&m.close(m.list[e].name);d.name=w;d.length=b;d.u=0;d.c=0;d.playerName=m.playerName?m.playerName:c;d.S=g;d.L=0;d.f=0;d.timestamp=
Math.floor(a.getTime()/1E3);d.j=0;d.r=d.timestamp;d.a=-1;d.B="";d.k=-1;d.C=0;d.H={};d.F=0;d.m=0;d.e="";d.A=0;d.K=0;d.z=0;d.D=0;d.l=!1;d.v="";d.I="";d.J=0;d.q=!1;d.G="";d.complete=0;d.Q=0;d.o=0;d.p=0;m.list[w]=d}};m.openAd=function(w,b,c,h,d,a,g,e){var f={};m.open(w,b,c,e);if(f=m.list[w])f.l=!0,f.v=h,f.I=d,f.J=a,f.G=g};m.M=function(w){var b=m.list[w];m.list[w]=0;b&&b.monitor&&clearTimeout(b.monitor.R)};m.close=function(w){m.g(w,0,-1)};m.play=function(w,b,c,h){var d=m.g(w,1,b,c,h);if(d&&!d.monitor)d.monitor=
{},d.monitor.update=function(){d.j==1&&m.g(d.name,3,-1);d.monitor.R=setTimeout(d.monitor.update,1E3)},d.monitor.update()};m.click=function(w,b){m.g(w,7,b)};m.complete=function(w,b){m.g(w,5,b)};m.stop=function(w,b){m.g(w,2,b)};m.track=function(w){m.g(w,4,-1)};m.P=function(w,b){var c="a.media.",h=w.linkTrackVars,d=w.linkTrackEvents,a="m_i",g,e=w.contextData,f;if(b.l){c+="ad.";if(b.v)e["a.media.name"]=b.v,e[c+"pod"]=b.I,e[c+"podPosition"]=b.J;if(!b.F)e[c+"CPM"]=b.G}if(b.q)e[c+"clicked"]=!0,b.q=!1;e["a.contentType"]=
"video"+(b.l?"Ad":"");e["a.media.channel"]=m.channel;e[c+"name"]=b.name;e[c+"playerName"]=b.playerName;if(b.length>0)e[c+"length"]=b.length;e[c+"timePlayed"]=Math.floor(b.f);Math.floor(b.f)>0&&(e[c+"timePlayed"]=Math.floor(b.f));if(!b.F)e[c+"view"]=!0,a="m_s",b.F=1;if(b.e){e[c+"segmentNum"]=b.m;e[c+"segment"]=b.e;if(b.A>0)e[c+"segmentLength"]=b.A;b.z&&b.f>0&&(e[c+"segmentView"]=!0)}if(!b.Q&&b.complete)e[c+"complete"]=!0,b.T=1;if(b.o>0)e[c+"milestone"]=b.o;if(b.p>0)e[c+"offsetMilestone"]=b.p;if(h)for(f in e)Object.prototype[f]||
(h+=",contextData."+f);g=e["a.contentType"];w.pe=a;w.pev3=g;var s,n;if(m.contextDataMapping){if(!w.events2)w.events2="";h&&(h+=",events");for(f in m.contextDataMapping)if(!Object.prototype[f]){a=f.length>c.length&&f.substring(0,c.length)==c?f.substring(c.length):"";g=m.contextDataMapping[f];if(typeof g=="string"){s=g.split(",");for(n=0;n<s.length;n++)g=s[n],f=="a.contentType"?(h&&(h+=","+g),w[g]=e[f]):a=="view"||a=="segmentView"||a=="clicked"||a=="complete"||a=="timePlayed"||a=="CPM"?(d&&(d+=","+
g),a=="timePlayed"||a=="CPM"?e[f]&&(w.events2+=(w.events2?",":"")+g+"="+e[f]):e[f]&&(w.events2+=(w.events2?",":"")+g)):a=="segment"&&e[f+"Num"]?(h&&(h+=","+g),w[g]=e[f+"Num"]+":"+e[f]):(h&&(h+=","+g),w[g]=e[f])}else if(a=="milestones"||a=="offsetMilestones")f=f.substring(0,f.length-1),e[f]&&m.contextDataMapping[f+"s"][e[f]]&&(d&&(d+=","+m.contextDataMapping[f+"s"][e[f]]),w.events2+=(w.events2?",":"")+m.contextDataMapping[f+"s"][e[f]]);e[f]&&(e[f]=0);a=="segment"&&e[f+"Num"]&&(e[f+"Num"]=0)}}w.linkTrackVars=
h;w.linkTrackEvents=d};m.g=function(w,b,c,h,d){var a={},g=(new Date).getTime()/1E3,e,f,s=m.trackVars,n=m.trackEvents,o=m.trackSeconds,p=m.trackMilestones,q=m.trackOffsetMilestones,r=m.segmentByMilestones,t=m.segmentByOffsetMilestones,k,j,l=1,i={},u;if(!m.channel)m.channel=m.s.w.location.hostname;if(a=w&&m.list&&m.list[w]?m.list[w]:0){if(a.l)o=m.adTrackSeconds,p=m.adTrackMilestones,q=m.adTrackOffsetMilestones,r=m.adSegmentByMilestones,t=m.adSegmentByOffsetMilestones;c<0&&(c=a.j==1&&a.r>0?g-a.r+a.a:
a.a);a.length>0&&(c=c<a.length?c:a.length);c<0&&(c=0);a.u=c;if(a.length>0)a.c=a.u/a.length*100,a.c=a.c>100?100:a.c;if(a.a<0)a.a=c;u=a.C;i.name=w;i.ad=a.l;i.length=a.length;i.openTime=new Date;i.openTime.setTime(a.timestamp*1E3);i.offset=a.u;i.percent=a.c;i.playerName=a.playerName;i.mediaEvent=a.k<0?"OPEN":b==1?"PLAY":b==2?"STOP":b==3?"MONITOR":b==4?"TRACK":b==5?"COMPLETE":b==7?"CLICK":"CLOSE";if(b>2||b!=a.j&&(b!=2||a.j==1)){if(!d)h=a.m,d=a.e;if(b){if(b==1)a.a=c;if((b<=3||b>=5)&&a.k>=0)if(l=!1,s=n=
"None",a.k!=c){f=a.k;if(f>c)f=a.a,f>c&&(f=c);k=p?p.split(","):0;if(a.length>0&&k&&c>=f)for(j=0;j<k.length;j++)if((e=k[j]?parseFloat(""+k[j]):0)&&f/a.length*100<e&&a.c>=e)l=!0,j=k.length,i.mediaEvent="MILESTONE",a.o=i.milestone=e;if((k=q?q.split(","):0)&&c>=f)for(j=0;j<k.length;j++)if((e=k[j]?parseFloat(""+k[j]):0)&&f<e&&c>=e)l=!0,j=k.length,i.mediaEvent="OFFSET_MILESTONE",a.p=i.offsetMilestone=e}if(a.K||!d){if(r&&p&&a.length>0){if(k=p.split(",")){k.push("100");for(j=f=0;j<k.length;j++)if(e=k[j]?parseFloat(""+
k[j]):0){if(a.c<e)h=j+1,d="M:"+f+"-"+e,j=k.length;f=e}}}else if(t&&q&&(k=q.split(","))){k.push(""+(a.length>0?a.length:"E"));for(j=f=0;j<k.length;j++)if((e=k[j]?parseFloat(""+k[j]):0)||k[j]=="E"){if(c<e||k[j]=="E")h=j+1,d="O:"+f+"-"+e,j=k.length;f=e}}if(d)a.K=!0}if((d||a.e)&&d!=a.e){a.D=!0;if(!a.e)a.m=h,a.e=d;a.k>=0&&(l=!0)}if((b>=2||a.c>=100)&&a.a<c)a.L+=c-a.a,a.f+=c-a.a;if(b<=2||b==3&&!a.j)a.B+=(b==1||b==3?"S":"E")+Math.floor(c),a.j=b==3?1:b;if(!l&&a.k>=0&&b<=3&&(o=o?o:0)&&a.f>=o)l=!0,i.mediaEvent=
"SECONDS";a.r=g;a.a=c}if(!b||b<=3&&a.c>=100)a.j!=2&&(a.B+="E"+Math.floor(c)),b=0,s=n="None",i.mediaEvent="CLOSE";if(b==7)l=i.clicked=a.q=!0;if(b==5||m.completeByCloseOffset&&(!b||a.c>=100)&&a.length>0&&c>=a.length-m.completeCloseOffsetThreshold)l=i.complete=a.complete=!0;g=i.mediaEvent;g=="MILESTONE"?g+="_"+i.milestone:g=="OFFSET_MILESTONE"&&(g+="_"+i.offsetMilestone);a.H[g]?i.eventFirstTime=!1:(i.eventFirstTime=!0,a.H[g]=1);i.event=i.mediaEvent;i.timePlayed=a.L;i.segmentNum=a.m;i.segment=a.e;i.segmentLength=
a.A;m.monitor&&b!=4&&m.monitor(m.s,i);b==0&&m.M(w);if(l&&a.C==u){w={};w.contextData={};w.linkTrackVars=s;w.linkTrackEvents=n;if(!w.linkTrackVars)w.linkTrackVars="";if(!w.linkTrackEvents)w.linkTrackEvents="";m.P(w,a);w.linkTrackVars||(w["!linkTrackVars"]=1);w.linkTrackEvents||(w["!linkTrackEvents"]=1);m.s.track(w);if(a.D)a.m=h,a.e=d,a.z=!0,a.D=!1;else if(a.f>0)a.z=!1;a.B="";a.o=a.p=0;a.f-=Math.floor(a.f);a.k=c;a.C++}}}return a};m.O=function(w,b,c,h,d){var a=0;if(w&&(!m.autoTrackMediaLengthRequired||
b&&b>0)){if(!m.list||!m.list[w]){if(c==1||c==3)m.open(w,b,"HTML5 Video",d),a=1}else a=1;a&&m.g(w,c,h,-1,0)}};m.attach=function(w){var b,c,h;if(w&&w.tagName&&w.tagName.toUpperCase()=="VIDEO"){if(!m.n)m.n=function(b,a,w){var c,f;if(m.autoTrack){c=b.currentSrc;(f=b.duration)||(f=-1);if(w<0)w=b.currentTime;m.O(c,f,a,w,b)}};b=function(){m.n(w,1,-1)};c=function(){m.n(w,1,-1)};m.i(w,"play",b);m.i(w,"pause",c);m.i(w,"seeking",c);m.i(w,"seeked",b);m.i(w,"ended",function(){m.n(w,0,-1)});m.i(w,"timeupdate",
b);h=function(){!w.paused&&!w.ended&&!w.seeking&&m.n(w,3,-1);setTimeout(h,1E3)};h()}};m.i=function(m,b,c){m.attachEvent?m.attachEvent("on"+b,c):m.addEventListener&&m.addEventListener(b,c,!1)};if(m.completeByCloseOffset==void 0)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==void 0)m.completeCloseOffsetThreshold=1;m.N=function(){var w,b;if(m.autoTrack&&(w=m.s.d.getElementsByTagName("VIDEO")))for(b=0;b<w.length;b++)m.attach(w[b])};m.i(s,"load",m.N)}AppMeasurement_Module_Media.REMOVE=1;
new AppMeasurement_Module_Media("REMOVE");

/* Module: Integrate */
function AppMeasurement_Module_Integrate(s){var m=this;m.s=s;var w=window;if(!w.s_c_in)w.s_c_il=[],w.s_c_in=0;m._il=w.s_c_il;m._in=w.s_c_in;m._il[m._in]=m;w.s_c_in++;m._c="s_m";m.list=[];m.add=function(c,b){var a;b||(b="s_Integrate_"+c);w[b]||(w[b]={});a=m[c]=w[b];a.a=c;a.e=m;a._c=0;a._d=0;a.disable==void 0&&(a.disable=0);a.get=function(b,c){var d=document,f=d.getElementsByTagName("HEAD"),g;if(!a.disable&&(c||(v="s_"+m._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+m._in+
"]."+a.a+".callback",a.delay(),f=f&&f.length>0?f[0]:d.body))try{g=d.createElement("SCRIPT");g.type="text/javascript";g.setAttribute("async","async");g.src=m.c(a,b);if(b.indexOf("[CALLBACK]")<0)g.onload=g.onreadystatechange=function(){a.callback(w[v])};f.firstChild?f.insertBefore(g,f.firstChild):f.appendChild(g)}catch(s){}};a.callback=function(b){var m;if(b)for(m in b)Object.prototype[m]||(a[m]=b[m]);a.ready()};a.beacon=function(b){var c="s_i_"+m._in+"_Integrate_"+a.a+"_"+a._c;if(!a.disable)a._c++,
c=w[c]=new Image,c.src=m.c(a,b)};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||s.delayReady()};m.list.push(c)};m._g=function(c){var b,a=(c?"use":"set")+"Vars";for(c=0;c<m.list.length;c++)if((b=m[m.list[c]])&&!b.disable&&b[a])try{b[a](s,b)}catch(w){}};m._t=function(){m._g(1)};m._d=function(){var c,b;for(c=0;c<m.list.length;c++)if((b=m[m.list[c]])&&!b.disable&&b._d>0)return 1;return 0};m.c=function(m,b){var a,w,e,d;b.toLowerCase().substring(0,4)!="http"&&
(b="http://"+b);s.ssl&&(b=s.replace(b,"http:","https:"));m.RAND=Math.floor(Math.random()*1E13);for(a=0;a>=0;)a=b.indexOf("[",a),a>=0&&(w=b.indexOf("]",a),w>a&&(e=b.substring(a+1,w),e.length>2&&e.substring(0,2)=="s."?(d=s[e.substring(2)])||(d=""):(d=""+m[e],d!=m[e]&&parseFloat(d)!=m[e]&&(e=0)),e&&(b=b.substring(0,a)+encodeURIComponent(d)+b.substring(w+1)),a=w));return b}}

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.trackingServer="home.usg.com"
s.trackingServerSecure="myhome.usg.com"
s.visitorNamespace="usg"
s.dc="122"

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

 AppMeasurement for JavaScript version: 1.0.3
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function AppMeasurement(){var s=this;s.version="1.0.3";var w=window;if(!w.s_c_in)w.s_c_il=[],w.s_c_in=0;s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;s._c="s_c";var n=w,g,k;try{g=n.parent;for(k=n.location;g&&g.location&&k&&""+g.location!=""+k&&n.location&&""+g.location!=""+n.location&&g.location.host==k.host;)n=g,g=n.parent}catch(o){}s.za=function(s){try{console.log(s)}catch(a){}};s.ba=function(s){return""+parseInt(s)==""+s};s.replace=function(s,a,c){if(!s||s.indexOf(a)<0)return s;return s.split(a).join(c)};
s.escape=function(b){var a,c;if(!b)return b;b=encodeURIComponent(b);for(a=0;a<7;a++)c="+~!*()'".substring(a,a+1),b.indexOf(c)>=0&&(b=s.replace(b,c,"%"+c.charCodeAt(0).toString(16).toUpperCase()));return b};s.unescape=function(b){if(!b)return b;b=b.indexOf("+")>=0?s.replace(b,"+"," "):b;try{return decodeURIComponent(b)}catch(a){}return unescape(b)};s.pa=function(){var b=w.location.hostname,a=s.fpCookieDomainPeriods,c;if(!a)a=s.cookieDomainPeriods;if(b&&!s.U&&!/^[0-9.]+$/.test(b)&&(a=a?parseInt(a):
2,a=a>2?a:2,c=b.lastIndexOf("."),c>=0)){for(;c>=0&&a>1;)c=b.lastIndexOf(".",c-1),a--;s.U=c>0?b.substring(c):b}return s.U};s.c_r=s.cookieRead=function(b){b=s.escape(b);var a=" "+s.d.cookie,c=a.indexOf(" "+b+"="),e=c<0?c:a.indexOf(";",c);b=c<0?"":s.unescape(a.substring(c+2+b.length,e<0?a.length:e));return b!="[[B]]"?b:""};s.c_w=s.cookieWrite=function(b,a,c){var e=s.pa(),d=s.cookieLifetime,f;a=""+a;d=d?(""+d).toUpperCase():"";c&&d!="SESSION"&&d!="NONE"&&((f=a!=""?parseInt(d?d:0):-60)?(c=new Date,c.setTime(c.getTime()+
f*1E3)):c==1&&(c=new Date,f=c.getYear(),c.setYear(f+5+(f<1900?1900:0))));if(b&&d!="NONE")return s.d.cookie=b+"="+s.escape(a!=""?a:"[[B]]")+"; path=/;"+(c&&d!="SESSION"?" expires="+c.toGMTString()+";":"")+(e?" domain="+e+";":""),s.cookieRead(b)==a;return 0};s.v=[];s.V=function(b,a){if(s.W)return 0;if(!s.maxDelay)s.maxDelay=250;var c=0,e=(new Date).getTime()+s.maxDelay,d=s.d.Ma,f=["webkitvisibilitychange","visibilitychange"];if(!d)d=s.d.Na;if(d&&d=="prerender"){if(!s.G){s.G=1;for(c=0;c<f.length;c++)s.d.addEventListener(f[c],
function(){var b=s.d.Ma;if(!b)b=s.d.Na;if(b=="visible")s.G=0,s.delayReady()})}c=1;e=0}else s.u("_d")&&(c=1);c&&(s.v.push({m:b,a:a,t:e}),s.G||setTimeout(s.delayReady,s.maxDelay));return c};s.delayReady=function(){var b=(new Date).getTime(),a=0,c;for(s.u("_d")&&(a=1);s.v.length>0;){c=s.v.shift();if(a&&!c.t&&c.t>b){s.v.unshift(c);setTimeout(s.delayReady,parseInt(s.maxDelay/2));break}s.W=1;s[c.m].apply(s,c.a);s.W=0}};s.setAccount=s.sa=function(b){var a,c;if(!s.V("setAccount",arguments))if(s.account=b,
s.allAccounts){a=s.allAccounts.concat(b.split(","));s.allAccounts=[];a.sort();for(c=0;c<a.length;c++)(c==0||a[c-1]!=a[c])&&s.allAccounts.push(a[c])}else s.allAccounts=b.split(",")};s.P=function(b,a,c,e,d){var f="",i,j,w,q,g=0;b=="contextData"&&(b="c");if(a){for(i in a)if(!Object.prototype[i]&&(!d||i.substring(0,d.length)==d)&&a[i]&&(!c||c.indexOf(","+(e?e+".":"")+i+",")>=0)){w=!1;if(g)for(j=0;j<g.length;j++)i.substring(0,g[j].length)==g[j]&&(w=!0);if(!w&&(f==""&&(f+="&"+b+"."),j=a[i],d&&(i=i.substring(d.length)),
i.length>0))if(w=i.indexOf("."),w>0)j=i.substring(0,w),w=(d?d:"")+j+".",g||(g=[]),g.push(w),f+=s.P(j,a,c,e,w);else if(typeof j=="boolean"&&(j=j?"true":"false"),j){if(e=="retrieveLightData"&&d.indexOf(".contextData.")<0)switch(w=i.substring(0,4),q=i.substring(4),i){case "transactionID":i="xact";break;case "channel":i="ch";break;case "campaign":i="v0";break;default:s.ba(q)&&(w=="prop"?i="c"+q:w=="eVar"?i="v"+q:w=="list"?i="l"+q:w=="hier"&&(i="h"+q,j=j.substring(0,255)))}f+="&"+s.escape(i)+"="+s.escape(j)}}f!=
""&&(f+="&."+b)}return f};s.ra=function(){var b="",a,c,e,d,f,i,j,w,g="",n="",k=c="";if(s.lightProfileID)a=s.J,(g=s.lightTrackVars)&&(g=","+g+","+s.ea.join(",")+",");else{a=s.e;if(s.pe||s.linkType)if(g=s.linkTrackVars,n=s.linkTrackEvents,s.pe&&(c=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1),s[c]))g=s[c].Va,n=s[c].Ua;g&&(g=","+g+","+s.C.join(",")+",");n&&(n=","+n+",",g&&(g+=",events,"));s.events2&&(k+=(k!=""?",":"")+s.events2)}for(c=0;c<a.length;c++){d=a[c];f=s[d];e=d.substring(0,4);i=d.substring(4);
!f&&d=="events"&&k&&(f=k,k="");if(f&&(!g||g.indexOf(","+d+",")>=0)){switch(d){case "timestamp":d="ts";break;case "dynamicVariablePrefix":d="D";break;case "visitorID":d="vid";break;case "pageURL":d="g";if(f.length>255)s.pageURLRest=f.substring(255),f=f.substring(0,255);break;case "pageURLRest":d="-g";break;case "referrer":d="r";break;case "vmk":case "visitorMigrationKey":d="vmt";break;case "visitorMigrationServer":d="vmf";s.ssl&&s.visitorMigrationServerSecure&&(f="");break;case "visitorMigrationServerSecure":d=
"vmf";!s.ssl&&s.visitorMigrationServer&&(f="");break;case "charSet":d="ce";break;case "visitorNamespace":d="ns";break;case "cookieDomainPeriods":d="cdp";break;case "cookieLifetime":d="cl";break;case "variableProvider":d="vvp";break;case "currencyCode":d="cc";break;case "channel":d="ch";break;case "transactionID":d="xact";break;case "campaign":d="v0";break;case "resolution":d="s";break;case "colorDepth":d="c";break;case "javascriptVersion":d="j";break;case "javaEnabled":d="v";break;case "cookiesEnabled":d=
"k";break;case "browserWidth":d="bw";break;case "browserHeight":d="bh";break;case "connectionType":d="ct";break;case "homepage":d="hp";break;case "plugins":d="p";break;case "events":k&&(f+=(f!=""?",":"")+k);if(n){i=f.split(",");f="";for(e=0;e<i.length;e++)j=i[e],w=j.indexOf("="),w>=0&&(j=j.substring(0,w)),w=j.indexOf(":"),w>=0&&(j=j.substring(0,w)),n.indexOf(","+j+",")>=0&&(f+=(f?",":"")+i[e])}break;case "events2":f="";break;case "contextData":b+=s.P("c",s[d],g,d);f="";break;case "lightProfileID":d=
"mtp";break;case "lightStoreForSeconds":d="mtss";s.lightProfileID||(f="");break;case "lightIncrementBy":d="mti";s.lightProfileID||(f="");break;case "retrieveLightProfiles":d="mtsr";break;case "deleteLightProfiles":d="mtsd";break;case "retrieveLightData":s.retrieveLightProfiles&&(b+=s.P("mts",s[d],g,d));f="";break;default:s.ba(i)&&(e=="prop"?d="c"+i:e=="eVar"?d="v"+i:e=="list"?d="l"+i:e=="hier"&&(d="h"+i,f=f.substring(0,255)))}f&&(b+="&"+d+"="+(d.substring(0,3)!="pev"?s.escape(f):f))}d=="pev3"&&s.g&&
(b+=s.g)}return b};s.p=function(s){var a=s.tagName;if(""+s.Ta!="undefined"||""+s.Ea!="undefined"&&(""+s.Ea).toUpperCase()!="HTML")return"";a=a&&a.toUpperCase?a.toUpperCase():"";a=="SHAPE"&&(a="");a&&((a=="INPUT"||a=="BUTTON")&&s.type&&s.type.toUpperCase?a=s.type.toUpperCase():!a&&s.href&&(a="A"));return a};s.Y=function(s){var a=s.href?s.href:"",c,e,d;c=a.indexOf(":");e=a.indexOf("?");d=a.indexOf("/");if(a&&(c<0||e>=0&&c>e||d>=0&&c>d))e=s.protocol&&s.protocol.length>1?s.protocol:l.protocol?l.protocol:
"",c=l.pathname.lastIndexOf("/"),a=(e?e+"//":"")+(s.host?s.host:l.host?l.host:"")+(h.substring(0,1)!="/"?l.pathname.substring(0,c<0?0:c)+"/":"")+a;return a};s.z=function(b){var a=s.p(b),c,e,d="",f=0;if(a){c=b.protocol;e=b.onclick;if(b.href&&(a=="A"||a=="AREA")&&(!e||!c||c.toLowerCase().indexOf("javascript")<0))d=s.Y(b);else if(e)d=s.replace(s.replace(s.replace(s.replace(""+e,"\r",""),"\n",""),"\t","")," ",""),f=2;else if(a=="INPUT"||a=="SUBMIT"){if(b.value)d=b.value;else if(b.innerText)d=b.innerText;
else if(b.textContent)d=b.textContent;f=3}else if(b.src&&a=="IMAGE")d=b.src;if(d)return{id:d.substring(0,100),type:f}}return 0};s.Qa=function(b){for(var a=s.p(b),c=s.z(b);b&&!c&&a!="BODY";)if(b=b.parentElement?b.parentElement:b.parentNode)a=s.p(b),c=s.z(b);if(!c||a=="BODY")b=0;if(b&&(a=b.onclick?""+b.onclick:"",a.indexOf(".tl(")>=0||a.indexOf(".trackLink(")>=0))b=0;return b};s.Ca=function(){var b,a,c=s.linkObject,e=s.linkType,d=s.linkURL,f,i;s.K=1;if(!c)s.K=0,c=s.j;if(c){b=s.p(c);for(a=s.z(c);c&&
!a&&b!="BODY";)if(c=c.parentElement?c.parentElement:c.parentNode)b=s.p(c),a=s.z(c);if(!a||b=="BODY")c=0;if(c){var j=c.onclick?""+c.onclick:"";if(j.indexOf(".tl(")>=0||j.indexOf(".trackLink(")>=0)c=0}}else s.K=1;!d&&c&&(d=s.Y(c));d&&!s.linkLeaveQueryString&&(f=d.indexOf("?"),f>=0&&(d=d.substring(0,f)));if(!e&&d){var g=0,n=0,k;if(s.trackDownloadLinks&&s.linkDownloadFileTypes){j=d.toLowerCase();f=j.indexOf("?");i=j.indexOf("#");f>=0?i>=0&&i<f&&(f=i):f=i;f>=0&&(j=j.substring(0,f));f=s.linkDownloadFileTypes.toLowerCase().split(",");
for(i=0;i<f.length;i++)(k=f[i])&&j.substring(j.length-(k.length+1))=="."+k&&(e="d")}if(s.trackExternalLinks&&!e&&(j=d.toLowerCase(),s.aa(j))){if(!s.linkInternalFilters)s.linkInternalFilters=w.location.hostname;f=0;s.linkExternalFilters?(f=s.linkExternalFilters.toLowerCase().split(","),g=1):s.linkInternalFilters&&(f=s.linkInternalFilters.toLowerCase().split(","));if(f){for(i=0;i<f.length;i++)k=f[i],j.indexOf(k)>=0&&(n=1);n?g&&(e="e"):g||(e="e")}}}s.linkObject=c;s.linkURL=d;s.linkType=e;if(s.trackClickMap||
s.trackInlineStats)if(s.g="",c){e=s.pageName;d=1;c=c.sourceIndex;if(!e)e=s.pageURL,d=0;if(w.s_objectID)a.id=w.s_objectID,c=a.type=1;if(e&&a&&a.id&&b)s.g="&pid="+s.escape(e.substring(0,255))+(d?"&pidt="+d:"")+"&oid="+s.escape(a.id.substring(0,100))+(a.type?"&oidt="+a.type:"")+"&ot="+b+(c?"&oi="+c:"")}};s.ta=function(){var b=s.K,a=s.linkType,c=s.linkURL,e=s.linkName;if(a&&(c||e))a=a.toLowerCase(),a!="d"&&a!="e"&&(a="o"),s.pe="lnk_"+a,s.pev1=c?s.escape(c):"",s.pev2=e?s.escape(e):"",b=1;s.abort&&(b=0);
if(s.trackClickMap||s.trackInlineStats){a={};c=0;var d=s.cookieRead("s_sq"),f=d?d.split("&"):0,i,j,w;d=0;if(f)for(i=0;i<f.length;i++)j=f[i].split("="),e=s.unescape(j[0]).split(","),j=s.unescape(j[1]),a[j]=e;e=s.account.split(",");if(b||s.g){b&&!s.g&&(d=1);for(j in a)if(!Object.prototype[j])for(i=0;i<e.length;i++){d&&(w=a[j].join(","),w==s.account&&(s.g+=(j.charAt(0)!="&"?"&":"")+j,a[j]=[],c=1));for(f=0;f<a[j].length;f++)w=a[j][f],w==e[i]&&(d&&(s.g+="&u="+s.escape(w)+(j.charAt(0)!="&"?"&":"")+j+"&u=0"),
a[j].splice(f,1),c=1)}b||(c=1);if(c){d="";i=2;!b&&s.g&&(d=s.escape(e.join(","))+"="+s.escape(s.g),i=1);for(j in a)!Object.prototype[j]&&i>0&&a[j].length>0&&(d+=(d?"&":"")+s.escape(a[j].join(","))+"="+s.escape(j),i--);s.cookieWrite("s_sq",d)}}}return b};s.ua=function(){if(!s.Ka){var b=new Date,a=n.location,c,e,d,f=d=e=c="",i="",w="",g="1.2",k=s.cookieWrite("s_cc","true",0)?"Y":"N",o="",p="",r=0;if(b.setUTCDate&&(g="1.3",r.toPrecision&&(g="1.5",c=[],c.forEach))){g="1.6";d=0;e={};try{d=new Iterator(e),
d.next&&(g="1.7",c.reduce&&(g="1.8",g.trim&&(g="1.8.1",Date.parse&&(g="1.8.2",Object.create&&(g="1.8.5")))))}catch(t){}}c=screen.width+"x"+screen.height;d=navigator.javaEnabled()?"Y":"N";e=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;i=s.w.innerWidth?s.w.innerWidth:s.d.documentElement.offsetWidth;w=s.w.innerHeight?s.w.innerHeight:s.d.documentElement.offsetHeight;b=navigator.plugins;try{s.b.addBehavior("#default#homePage"),o=s.b.Ra(a)?"Y":"N"}catch(u){}try{s.b.addBehavior("#default#clientCaps"),
p=s.b.connectionType}catch(x){}if(b)for(;r<b.length&&r<30;){if(a=b[r].name)a=a.substring(0,100)+";",f.indexOf(a)<0&&(f+=a);r++}s.resolution=c;s.colorDepth=e;s.javascriptVersion=g;s.javaEnabled=d;s.cookiesEnabled=k;s.browserWidth=i;s.browserHeight=w;s.connectionType=p;s.homepage=o;s.plugins=f;s.Ka=1}};s.B={};s.loadModule=function(b,a){s.B[b]||(s[b]=w["AppMeasurement_Module_"+b]?new w["AppMeasurement_Module_"+b](s):{},s.B[b]=s[b]);a&&(s[b+"_onLoad"]=a,delayCall(b+"_onLoad",[s,m],1)||a(s,m))};s.u=function(b){var a,
c;for(a in s.B)if(!Object.prototype[a]&&(c=s.B[a])&&c[b]&&c[b]())return 1;return 0};s.xa=function(){var b=Math.floor(Math.random()*1E13),a=s.visitorSampling,c=s.visitorSamplingGroup;c="s_vsn_"+(s.visitorNamespace?s.visitorNamespace:s.account)+(c?"_"+c:"");var e=s.cookieRead(c);if(a){e&&(e=parseInt(e));if(!e){if(!s.cookieWrite(c,b))return 0;e=b}if(e%1E4>v)return 0}return 1};s.Q=function(b,a){var c,e,d,f,i,w;for(c=0;c<2;c++){e=c>0?s.R:s.e;for(d=0;d<e.length;d++)if(f=e[d],(i=b[f])||b["!"+f]){if(!a&&
(f=="contextData"||f=="retrieveLightData")&&s[f])for(w in s[f])i[w]||(i[w]=s[f][w]);s[f]=i}}};s.La=function(b){var a,c,e,d;for(a=0;a<2;a++){c=a>0?s.R:s.e;for(e=0;e<c.length;e++)d=c[e],b[d]=s[d],b[d]||(b["!"+d]=1)}};s.oa=function(s){var a,c,e,d,f,w=0,g,n="",k="";if(s&&s.length>255&&(a=""+s,c=a.indexOf("?"),c>0&&(g=a.substring(c+1),a=a.substring(0,c),d=a.toLowerCase(),e=0,d.substring(0,7)=="http://"?e+=7:d.substring(0,8)=="https://"&&(e+=8),c=d.indexOf("/",e),c>0&&(d=d.substring(e,c),f=a.substring(c),
a=a.substring(0,c),d.indexOf("google")>=0?w=",q,ie,start,search_key,word,kw,cd,":d.indexOf("yahoo.co")>=0&&(w=",p,ei,"),w&&g)))){if((s=g.split("&"))&&s.length>1){for(e=0;e<s.length;e++)d=s[e],c=d.indexOf("="),c>0&&w.indexOf(","+d.substring(0,c)+",")>=0?n+=(n?"&":"")+d:k+=(k?"&":"")+d;n&&k?g=n+"&"+k:k=""}c=253-(g.length-k.length)-a.length;s=a+(c>0?f.substring(0,c):"")+"?"+g}return s};s.qa=function(){var b=s.cookieRead("s_fid"),a="",c="",e;e=8;var d=4;if(!b||b.indexOf("-")<0){for(b=0;b<16;b++)e=Math.floor(Math.random()*
e),a+="0123456789ABCDEF".substring(e,e+1),e=Math.floor(Math.random()*d),c+="0123456789ABCDEF".substring(e,e+1),e=d=16;b=a+"-"+c}s.cookieWrite("s_fid",b,1)||(b=0);return b};s.t=s.track=function(b){var a,c=new Date,e="s"+Math.floor(c.getTime()/108E5)%10+Math.floor(Math.random()*1E13),d=c.getYear();d="t="+s.escape(c.getDate()+"/"+c.getMonth()+"/"+(d<1900?d+1900:d)+" "+c.getHours()+":"+c.getMinutes()+":"+c.getSeconds()+" "+c.getDay()+" "+c.getTimezoneOffset());if(!s.V("track",arguments)){b&&(a={},s.La(a),
s.Q(b));if(s.xa()&&(s.fid=s.qa(),s.Ca(),s.usePlugins&&s.doPlugins&&s.doPlugins(s),s.account)){if(!s.abort){if(s.trackOffline&&!s.timestamp)s.timestamp=Math.floor(c.getTime()/1E3);c=w.location;if(!s.pageURL)s.pageURL=c.href?c.href:c;if(!s.referrer&&!s.ia)s.referrer=n.document.referrer,s.ia=1;s.referrer=s.oa(s.referrer);s.u("_g")}s.ta()&&!s.abort&&(s.ua(),d+=s.ra(),s.Ba(e,d));s.abort||s.u("_t")}b&&s.Q(a,1);s.timestamp=s.linkObject=s.j=s.linkURL=s.linkName=s.linkType=w.Sa=s.pe=s.pev1=s.pev2=s.pev3=s.g=
0}};s.tl=s.trackLink=function(b,a,c,e,d){s.linkObject=b;s.linkType=a;s.linkName=c;if(d)s.i=b,s.l=d;return s.track(e)};s.trackLight=function(b,a,c,e){s.lightProfileID=b;s.lightStoreForSeconds=a;s.lightIncrementBy=c;return s.track(e)};s.clearVars=function(){var b,a;for(b=0;b<s.e.length;b++)if(a=s.e[b],a.substring(0,4)=="prop"||a.substring(0,4)=="eVar"||a.substring(0,4)=="hier"||a.substring(0,4)=="list"||a=="channel"||a=="events"||a=="eventList"||a=="products"||a=="productList"||a=="purchaseID"||a==
"transactionID"||a=="state"||a=="zip"||a=="campaign")s[a]=void 0};s.Ba=function(b,a){var c,e=s.trackingServer;c="";var d=s.dc,f="sc.",w=s.visitorNamespace;if(e){if(s.trackingServerSecure&&s.ssl)e=s.trackingServerSecure}else{if(!w)w=s.account,e=w.indexOf(","),e>=0&&(w=w.Oa(0,e)),w=w.replace(/[^A-Za-z0-9]/g,"");c||(c="2o7.net");d=d?(""+d).toLowerCase():"d1";c=="2o7.net"&&(d=="d1"?d="112":d=="d2"&&(d="122"),f="");e=w+"."+d+"."+f+c}c=s.ssl?"https://":"http://";c+=e+"/b/ss/"+s.account+"/"+(s.mobile?"5.":
"")+"1/JS-"+s.version+(s.Ja?"T":"")+"/"+b+"?AQB=1&ndh=1&"+a+"&AQE=1";s.wa&&(c=c.substring(0,2047));s.ma(c);s.H()};s.ma=function(b){s.c||s.va();s.c.push(b);s.I=s.o();s.ha()};s.va=function(){s.c=s.ya();if(!s.c)s.c=[]};s.ya=function(){var b,a;if(s.M()){try{(a=w.localStorage.getItem(s.L()))&&(b=w.JSON.parse(a))}catch(c){}return b}};s.M=function(){var b=!0;if(!s.trackOffline||!s.offlineFilename||!w.localStorage||!w.JSON)b=!1;return b};s.Z=function(){var b=0;if(s.c)b=s.c.length;s.q&&b++;return b};s.H=function(){if(!s.q)if(s.$=
null,s.fa)s.I>s.A&&s.ga(s.c),s.O(500);else{var b=s.ja();if(b>0)s.O(b);else if(b=s.X())s.q=1,s.Aa(b),s.Fa(b)}};s.O=function(b){if(!s.$)b||(b=0),s.$=setTimeout(s.H,b)};s.ja=function(){var b;if(!s.trackOffline||s.offlineThrottleDelay<=0)return 0;b=s.o()-s.da;if(s.offlineThrottleDelay<b)return 0;return s.offlineThrottleDelay-b};s.X=function(){if(s.c.length>0)return s.c.shift()};s.Aa=function(b){if(s.debugTracking){var a="AppMeasurement Debug: "+b;b=b.split("&");var c;for(c=0;c<b.length;c++)a+="\n\t"+
s.unescape(b[c]);s.za(a)}};s.Fa=function(b){var a;a||(a=new Image);a.T=function(){try{if(s.N)clearTimeout(s.N),s.N=0;if(a.timeout)clearTimeout(a.timeout),a.timeout=0}catch(b){}};a.onload=a.Ia=function(){a.T();s.la();s.D();s.q=0;s.H()};a.onabort=a.onerror=a.na=function(){a.T();s.q&&s.c.unshift(s.ka);s.q=0;s.I>s.A&&s.ga(s.c);s.D();s.O(500)};a.onreadystatechange=function(){a.readyState==4&&(a.status==200?a.Ia():a.na())};s.da=s.o();a.src=b;if(a.abort)s.N=setTimeout(a.abort,5E3);s.ka=b;s.Pa=w["s_i_"+s.replace(s.account,
",","_")]=a;if(s.useForcedLinkTracking&&s.r||s.l){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;s.F=setTimeout(s.D,s.forcedLinkTrackingTimeout)}};s.la=function(){if(s.M()&&!(s.ca>s.A))try{w.localStorage.removeItem(s.L()),s.ca=s.o()}catch(b){}};s.ga=function(b){if(s.M()){s.ha();try{w.localStorage.setItem(s.L(),w.JSON.stringify(b)),s.A=s.o()}catch(a){}}};s.ha=function(){if(s.trackOffline){if(!s.offlineLimit||s.offlineLimit<=0)s.offlineLimit=10;for(;s.c.length>s.offlineLimit;)s.X()}};
s.forceOffline=function(){s.fa=!0};s.forceOnline=function(){s.fa=!1};s.L=function(){return s.offlineFilename+"-"+s.visitorNamespace+s.account};s.o=function(){return(new Date).getTime()};s.aa=function(s){s=s.toLowerCase();if(s.indexOf("#")!=0&&s.indexOf("about:")!=0&&s.indexOf("javascript:")!=0)return!0;return!1};s.setTagContainer=function(b){var a,c,e;s.Ja=b;for(a=0;a<s._il.length;a++)if((c=s._il[a])&&c._c=="s_l"&&c.tagContainerName==b){s.Q(c);if(c.lmq)for(a=0;a<c.lmq.length;a++)e=c.lmq[a],s.loadModule(e.n);
if(c.ml)for(e in c.ml)if(s[e])for(a in b=s[e],e=c.ml[e],e)if(!Object.prototype[a]&&(typeof e[a]!="function"||(""+e[a]).indexOf("s_c_il")<0))b[a]=e[a];if(c.mmq)for(a=0;a<c.mmq.length;a++)e=c.mmq[a],s[e.m]&&(b=s[e.m],b[e.f]&&typeof b[e.f]=="function"&&(e.a?b[e.f].apply(b,e.a):b[e.f].apply(b)));if(c.tq)for(a=0;a<c.tq.length;a++)s.track(c.tq[a]);c.s=s;break}};s.Util={urlEncode:s.escape,urlDecode:s.unescape,cookieRead:s.cookieRead,cookieWrite:s.cookieWrite,getQueryParam:function(b,a,c){var e;a||(a=s.pageURL?
s.pageURL:w.location);c||(c="&");if(b&&a&&(a=""+a,e=a.indexOf("?"),e>=0&&(a=c+a.substring(e+1)+c,e=a.indexOf(c+b+"="),e>=0&&(a=a.substring(e+c.length+b.length+1),e=a.indexOf(c),e>=0&&(a=a.substring(0,e)),a.length>0))))return s.unescape(a);return""}};s.C=["timestamp","dynamicVariablePrefix","visitorID","anonymousVisitorID","globalVisitorID","globalLocationHint","fid","vmk","visitorMigrationKey","visitorMigrationServer","visitorMigrationServerSecure","charSet","visitorNamespace","cookieDomainPeriods",
"fpCookieDomainPeriods","cookieLifetime","pageName","pageURL","referrer","contextData","currencyCode","lightProfileID","lightStoreForSeconds","lightIncrementBy","retrieveLightProfiles","deleteLightProfiles","retrieveLightData","pe","pev1","pev2","pev3","pageURLRest"];s.e=s.C.concat(["purchaseID","variableProvider","channel","server","pageType","transactionID","campaign","state","zip","events","events2","products","tnt"]);s.ea=["timestamp","charSet","visitorNamespace","cookieDomainPeriods","cookieLifetime",
"contextData","lightProfileID","lightStoreForSeconds","lightIncrementBy"];s.J=s.ea.slice(0);s.R=["account","allAccounts","debugTracking","visitor","trackOffline","offlineLimit","offlineThrottleDelay","offlineFilename","usePlugins","doPlugins","configURL","visitorSampling","s.visitorSamplingGroup","linkObject","linkURL","linkName","linkType","trackDownloadLinks","trackExternalLinks","trackClickMap","trackInlineStats","linkLeaveQueryString","linkTrackVars","linkTrackEvents","linkDownloadFileTypes",
"linkExternalFilters","linkInternalFilters","useForcedLinkTracking","forcedLinkTrackingTimeout","trackingServer","trackingServerSecure","ssl","abort","mobile","dc","lightTrackVars","maxDelay"];for(g=0;g<=75;g++)s.e.push("prop"+g),s.J.push("prop"+g),s.e.push("eVar"+g),s.J.push("eVar"+g),g<6&&s.e.push("hier"+g),g<4&&s.e.push("list"+g);g=["resolution","colorDepth","javascriptVersion","javaEnabled","cookiesEnabled","browserWidth","browserHeight","connectionType","homepage","plugins"];s.e=s.e.concat(g);
s.C=s.C.concat(g);s.ssl=w.location.protocol.toLowerCase().indexOf("https")>=0;s.charSet="UTF-8";s.contextData={};s.offlineThrottleDelay=0;s.offlineFilename="AppMeasurement.offline";s.da=0;s.I=0;s.A=0;s.ca=0;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.w=w;s.d=w.document;try{s.wa=navigator.appName=="Microsoft Internet Explorer"}catch(p){}s.D=function(){if(s.F)w.clearTimeout(s.F),s.F=null;s.i&&s.r&&s.i.dispatchEvent(s.r);if(s.l)if(typeof s.l=="function")s.l();
else if(s.i&&s.i.href)s.d.location=s.i.href;s.i=s.r=s.l=0};s.Ga=function(){s.b=s.d.body;if(s.b)if(s.k=function(b){var a,c,e,d,f;if(!(s.d&&s.d.getElementById("cppXYctnr")||b&&b.Da)){if(s.S)if(s.useForcedLinkTracking)s.b.removeEventListener("click",s.k,!1);else{s.b.removeEventListener("click",s.k,!0);s.S=s.useForcedLinkTracking=0;return}else s.useForcedLinkTracking=0;s.j=b.srcElement?b.srcElement:b.target;try{if(s.j&&(s.j.tagName||s.j.parentElement||s.j.parentNode))if(e=s.Z(),s.track(),e<s.Z()&&s.useForcedLinkTracking&&
b.target){for(d=b.target;d&&d!=s.b&&d.tagName.toUpperCase()!="A"&&d.tagName.toUpperCase()!="AREA";)d=d.parentNode;if(d&&(f=d.href,s.aa(f)||(f=0),c=d.target,b.target.dispatchEvent&&f&&(!c||c=="_self"||c=="_top"||c=="_parent"||w.name&&c==w.name))){try{a=s.d.createEvent("MouseEvents")}catch(g){a=new w.MouseEvent}if(a){try{a.initMouseEvent("click",b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget)}catch(j){a=
0}if(a)a.Da=1,b.stopPropagation(),b.Ha&&b.Ha(),b.preventDefault(),s.i=b.target,s.r=a}}}}catch(k){}s.j=0}},s.b&&s.b.attachEvent)s.b.attachEvent("onclick",s.k);else{if(s.b&&s.b.addEventListener){if(navigator&&(navigator.userAgent.indexOf("WebKit")>=0&&s.d.createEvent||navigator.userAgent.indexOf("Firefox/2")>=0&&w.MouseEvent))s.S=1,s.useForcedLinkTracking=1,s.b.addEventListener("click",s.k,!0);s.b.addEventListener("click",s.k,!1)}}else setTimeout(setupBody,30)};s.Ga()}
function s_gi(s){var w,n=window.s_c_il,g,k=s.split(","),o,p,b=0;if(n)for(g=0;!b&&g<n.length;){w=n[g];if(w._c=="s_c"&&w.account)if(w.account==s)b=1;else{if(!w.allAccounts)w.allAccounts=w.account.split(",");for(o=0;o<k.length;o++)for(p=0;p<w.allAccounts.length;p++)k[o]==w.allAccounts[p]&&(b=1)}g++}b||(w=new AppMeasurement);w.setAccount(s);return w}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var s=window,w=s.s_giq,n,g,k;if(w)for(n=0;n<w.length;n++)g=w[n],k=s_gi(g.oun),k.setAccount(g.un),k.setTagContainer(g.tagContainerName);s.s_giq=0}s_pgicq();