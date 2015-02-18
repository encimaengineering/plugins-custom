//HEADER
(function ($) { // track click event - Country Selector Click
	$el = $('.region  option[value="/content/usgcom/en.html"]');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "United States";
		s.prop18= "English";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

(function ($) {
	$el = $('.region  option[value="/content/usgcom/en_CA_east.html"]');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "Canada East";
		s.prop18= "English";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

(function ($) {
	$el = $('.region  option[value="/content/usgcom/fr_CA_east.html"]');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "Canada East";
		s.prop18= "French";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

(function ($) {
	$el = $('.region  option[value="/content/usgcom/en_CA_west.html"]');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "Canada West";
		s.prop18= "Englisn";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

(function ($) {
	$el = $('.region  option[value="/content/usgcom/fr_CA_west.html"]');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "Canada West";
		s.prop18= "French";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

(function ($) {
	$el = $('.region  option[value="/content/usgcom/en_mexico.html"]');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "Mexico Latin America";
		s.prop18= "English";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

(function ($) {
	$el = $('.region  option[value="/content/usgcom/spanish.html"]');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "Mexico Latin America";
		s.prop18= "Spanish";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

(function ($) {
	$el = $('.region  option[value="/content/usgcom/en_asia.html"]');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "Asia Pacific";
		s.prop18= "English";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

(function ($) {
$el = $('.region  option[value="/content/usgcom/en_australia.html"]');
$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "Australia New Zealand";
		s.prop18= "English";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

(function ($) {
	$el = $('.region  option[value="/content/usgcom/en_india.html"]');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop17,prop18,events";
		s.linkTrackEvents="event15";
		s.events="event15";      // Country Selector Click
		s.prop17= "India";
		s.prop18= "English";
		s.tl(true,'o', s.pageName+': Country Selector Click');
	});
})(jQuery);

//FOOTER

(function ($) { // track click event - Social Media Click
	$el = $('.usg-footer .social li a');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars = "prop16,events";
		s.linkTrackEvents = "event13";
		s.events = "event13";  	// Social Media Click
		s.prop16 = $(this).attr("title");
		s.tl(this,'o', s.pageName+': Social Media Click');
	});
})(jQuery);

(function ($) { // track click event - App Download ClickHeader 
	$el = $('.mobile-app-cta a');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="events";
		s.linkTrackEvents="event41";
		s.events="event41";  	// App Download Click
		s.tl(this,'o', s.pageName+': App Download Click');
	});
})(jQuery);

//ADDITIONAL EVENTS 

// track click event - Sort By 
(function ($) {
	$el = $('#sort option');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="prop24";
		s.prop24= $(this).text();
		s.tl(this,'o', s.pageName+': Sort By');
	});
})(jQuery);

// onClick to track media gallery views on product specific (tier 5) pages.
$('#cycle-1 .product-image .fancybox').livequery('click', function (){ // catches action event
	s.linkTrackVars = 'prop34, events';
	s.linkTrackEvents = 'event7';
	s.events = 'event7'; // Media Gallery Event
	s.prop34 = 'Media Gallery: ' + $('.nine h1').text();
	s.tl(this, 'o', s.pageName + ': Expand Media Gallery');
});

// onClick to track downloads like pdfs
// Set jquery Selectors for exit and download
jQuery.extend(jQuery.expr[":"], {
	download: function(obj, index, meta, stack) {
		var download, url;
		url = jQuery(obj).attr("href");
		download = /.exe|.zip|.wav|.mp3|.mov|.mpg|.avi|.pdf|.xls/; 	// Sets download links
		return download.test(url);
	}
});
$("a:download").livequery("click", function() {
	//Track FileName
	var downloadURL =''+$(this).attr("href");	
	s.prop7=downloadURL.substring(downloadURL.lastIndexOf("/")+1,downloadURL.length); // set name of downloaded document to prop7
	s.eVar7=s.prop7
	s.prop8=s.pageName;
	s.events=s.apl(s.events,"event4",",",2)
	//Track eVar & Event
	s.linkTrackVars="prop7,prop8,eVar7,events"
	s.linkTrackEvents="event4"
	s.tl(this, 'o', s.pageName + ': download');
});

// track add to my account event in submittal lightbox via "account" link
function track_account(){
	$el = $('iframe.fancybox-iframe').contents().find('a#addToMyAccount');
	$el.on('click', function(e) {
		s.linkTrackVars = 'prop23,events,eVar35';
		s.linkTrackEvents = 'event10';
		if ( $('iframe.fancybox-iframe').contents().find('input#newPackage').val()){
				var newPackage = 'new package: ';
		}else{
			newPackage = 'existing package: ';
		}
		var usgDocs = []; // create array for selected docs
		var submittal = $('iframe.fancybox-iframe').contents().find('.types li ul li');
		submittal.each(function(){
			if ($(this).find('.bgtniceforms_checkbox').hasClass('selected')) {
				usgDocs.push($(this).find('label').text());                
			}                           
		});
		var docs = usgDocs.join('|'); // create array delimited by |
		s.prop23 = 'Add To Account - ' + newPackage + docs;
		s.events = 'event10'; // Add Resource to Submittal
		s.eVar35 = 'Name of Resource: ' + docs;
		s.tl(this, 'o', s.pageName + ': Add Resource to Submittal');
	});
}

// track add to my account event in submittal lightbox via "selected" link
function track_selected(){
	$el = $('iframe.fancybox-iframe').contents().find('a#submitSelected');
	$el.on('click', function(e) {
		s.linkTrackVars = 'prop23,events,eVar35';
		s.linkTrackEvents = 'event10';
		if ( $('iframe.fancybox-iframe').contents().find('input#newPackage').val()){
				var newPackage = 'new package: ';
		}else{
			newPackage = 'existing package: ';
		}
		var usgDocs = []; // create array for selected docs
		var submittal = $('iframe.fancybox-iframe').contents().find('.types li ul li');
		submittal.each(function(){
			if ($(this).find('.bgtniceforms_checkbox').hasClass('selected')) {
				usgDocs.push($(this).find('label').text());                
			}                           
		});
		var docs = usgDocs.join('|'); // create array delimited by |
		s.prop23 = 'Add Selected To Submittal - ' + newPackage + docs;
		s.events = 'event10'; // Add Resource to Submittal
		s.eVar35 = 'Name of Resource: ' + docs;
		s.tl(this, 'o', s.pageName + ': Add Resource to Submittal');
	});
}

// track add to my account event in submittal lightbox via "all" link
function track_all(){
	$el = $('iframe.fancybox-iframe').contents().find('a#submitAll');
	$el.on('click', function(e) {
		s.linkTrackVars = 'prop23,events,eVar35';
		s.linkTrackEvents = 'event10';
		if ( $('iframe.fancybox-iframe').contents().find('input#newPackage').val()){
				var newPackage = 'new package: ';
		}else{
			newPackage = 'existing package: ';
		}
		var usgDocs = []; // create array for selected docs
		var submittal = $('iframe.fancybox-iframe').contents().find('.types li ul li');
		submittal.each(function(){ //  grab all resources checked and unchecked
			usgDocs.push($(this).find('label').text());             
		});
		var docs = usgDocs.join('|'); // create array delimited by |
		s.prop23 = 'Add All To Submittal - ' + newPackage + docs;
		s.events = 'event10'; // Add Resource to Submittal
		s.eVar35 = 'Name of Resource: ' + docs;
		s.tl(this, 'o', s.pageName + ': Add Resource to Submittal');
	});
}

// track share this clicks on products pages
(function ($) { // track click event - Share This
	$el = $('.sharethis .stButton .chicklets');
	$el.live('mouseover', function (e) {// attaches action event
		s.linkTrackVars="prop21,events";
		s.linkTrackEvents="event33";
		s.events="event33";      // Share This
		if ( $(this).parents('.product-description').length > 0 ){
			s.prop21 = $(this).parents('.sharethis').prev().find('h3').text();
		}else if($(this).parents('.product-details').length > 0) {
			s.prop21 = $(this).parents('.product-details').parent().find('h1').text();
		}
		s.tl(true,'o', s.pageName+': Share This Click');
	});
})(jQuery);

(function ($) {// track onClick of order samples and literature
	$('#cciLink').live('click', function (){ // catches action event
		s.linkTrackVars = 'eVar6,eVar45,events';
		s.linkTrackEvents = 'event14';
		s.events = 'event14'; // Media Gallery Event
		s.eVar6 = 'Requested Sample: ' + $('h1').text();
		s.eVar45 = 'Samples and Literature: ' + $('h1').text();
		s.tl(this, 'o', s.pageName + ': Order Samples and Literature');
	});
})(jQuery);

(function ($) {	// track onClick of Where to Buy link in main nav
	$el = $('.navigation li:eq(1) a');
	$el.live('click', function (e){ // catches action event
		s.linkTrackVars = 'events';
		s.linkTrackEvents = 'event42';
		s.events = 'event42'; // WTB - Nav onClick Event
		s.tl(this, 'o', s.pageName + ': WTB - Nav onClick');
	});
})(jQuery);

//  onClick to track list views on product pages
$('#listview').livequery('click', function (){ // catches action event
	s.linkTrackVars = 'events';
	s.linkTrackEvents = 'event43';
	s.events = 'event43'; // Product View - Grid onClick Event
	s.tl(this, 'o', s.pageName + ': Product View - List');
});

//  onClick to track grid views on product pages
$('#gridview').livequery('click', function (){ // catches action event
	s.linkTrackVars = 'events';
	s.linkTrackEvents = 'event44';
	s.events = 'event44'; // Product View - Grid onClick Event
	s.tl(this, 'o', s.pageName + ': Product View - Grid');
});

//Add to Account
(function ($) { // track click event - Add to Account
	$el = $('.addToMyAccount');
	$el.live('click', function (e) {// attaches action event
		s.linkTrackVars="events,eVar18,prop19";
		s.linkTrackEvents="event32";
		var usgDocs = []; // create array for selected docs
		var submittal = $('div.packages').contents().find('.types li ul li');
		submittal.each(function(){
			if ($(this).find('.bgtniceforms_checkbox').hasClass('selected')) {
				usgDocs.push($(this).find('label').text());                
			}                           
		});
		var docs = usgDocs.join('|'); // create array delimited by |
		s.events="event32";      // Add to Account
		s.prop19 = 'Add To My Account: ' + docs;
		s.eVar18="Submittal Builder Use";
		s.tl(true,'o', s.pageName+': Add Resource to Account');
	});
})(jQuery);

(function ($) {  //  track click on app download link to itunes - usg solutions app
	$el = $('.parbase a[href*="itunes.apple.com/us/app/usg-solutions/id391768121"]');
	$el.live('click', function (e) {
		s.linkTrackVars="prop54,eVar54,events";
		s.linkTrackEvents="event54";
		s.events="event54";  	// App Download lp Click
		s.prop54 = "App Download lp Click - usg solutions app";
		s.eVar54 = s.prop54;
		s.tl(this,'o', s.pageName+': App Download lp Click');
	});
})(jQuery);

(function ($) {  //  track click on app download link to itunes - tile and flooring solutions app
	$el = $('.parbase a[href*="itunes.apple.com/us/app/usg-tile-flooring-solutions/id412666426"]');
	$el.live('click', function (e) {		
		s.linkTrackVars="prop54,eVar54,events";
		s.linkTrackEvents="event54";
		s.events="event54";  	// App Download lp Click
		s.prop54 = "App Download lp Click - tile and flooring solutions app";
		s.eVar54 = s.prop54;
		s.tl(this,'o', s.pageName+': App Download lp Click');
	});
})(jQuery);

(function ($) {  //  track click on app download link to itunes - ceilings product app
	$el = $('.parbase a[href*="itunes.apple.com/us/app/usg-ceilings-product-application/id655745631"]');
	$el.live('click', function (e) {		
		s.linkTrackVars="prop54,eVar54,events";
		s.linkTrackEvents="event54";
		s.events="event54";  	// App Download lp Click
		s.prop54 = "App Download lp Click - ceilings product app";
		s.eVar54 = s.prop54;
		s.tl(this,'o', s.pageName+': App Download lp Click');
	});
})(jQuery);

(function ($) { // track click event - App Download in footer social section 
	$el = $('.social a[href="/content/usgcom/en/mobile-apps.html"]');
	$el.live('click', function (e) {
		s.linkTrackVars="prop56,eVar56,events";
		s.linkTrackEvents="event41";
		s.events="event41";  	// App Download Click
		s.prop56 = "mobile app button type - itunes icon";
		s.eVar56 = s.prop56;
		s.tl(this,'o', s.pageName+': App Download Click');
	});
})(jQuery);

(function ($) { // track click event - App Download on resource page 
	$el = $('.innovations a[href="/content/usgcom/en/mobile-apps.html"]');
	$el.live('click', function (e) {
		s.linkTrackVars="prop56,eVar56,events";
		s.linkTrackEvents="event41";
		s.events="event41";  	// App Download Click
		s.prop56 = "mobile app button type - resource";
		s.eVar56 = s.prop56;
		s.tl(this,'o', s.pageName+': App Download Click');
	});
})(jQuery);

(function ($) { //  forum - start discussion
	$el = $('#forum-start-discussion');
	$el.live('click' , function(e){
		s.linkTrackVars = 'eVar57,events';
		s.linkTrackEvents = 'event38';
		s.events = 'event38';
		s.eVar57 = 'forum start discussion: ' + $('.breadcrumb-component li.current').text();
		s.eVar57 = s.eVar57.toLowerCase();
		s.tl(this, 'o', s.pageName + ':forum - start discussion');
	 });
})(jQuery);

(function ($) { //  forum - comment
	$el = $('.forum-submit-comment');
	$el.live('click' , function(e){
		s.linkTrackVars = 'prop53,eVar53,events';
		s.linkTrackEvents = 'event53';
		s.events = 'event53';
		s.prop53 = 'forum post comment: ' + $('.topic-summary .summary h1').text();
		s.prop53 = s.prop53.toLowerCase();
		s.eVar53 = s.prop53;
		s.tl(this, 'o', s.pageName + ':forum - post comment');
	 });
})(jQuery);

(function ($) { //  forum - add to account
	$el = $('.forumsAddToMyAccount');
	$el.live('click', function (e) {
		s.linkTrackVars = 'prop19,eVar58,events';
		s.linkTrackEvents = 'event32';
		s.events = 'event32';
		s.prop19 = 'add to my account: forum topic: ' + $(this).closest('.summary').find('[data-tracking="forum-topic-title"]').text();
		s.prop19 = s.prop19.toLowerCase();
		s.eVar58 = s.prop19;
		s.tl(this, 'o', s.pageName + ':add to account|forum topic');
	});
})(jQuery);

(function ($) { //  forum - reply to comment
	$el = $('.reply');
	$el.live('click' , function(e){
		s.linkTrackVars = 'events';
		s.linkTrackEvents = 'event55';
		s.events = 'event55';
		s.tl(this, 'o', s.pageName + ': forum reply');
	});
})(jQuery);

(function ($) { //  blog - add to account
	$el = $('.blogsAddToMyAccount');
	$el.live('click', function (e) {
		s.linkTrackVars = 'prop19,eVar59,events';
		s.linkTrackEvents = 'event32';
		s.events = 'event32';
		s.prop19 = 'add to my account: blog: ' + $('.blog-title h2 a').text();
		s.prop19 = s.prop19.toLowerCase();
		s.eVar59 = s.prop19;
		s.tl(this, 'o', s.pageName + ':add to account|blog');
	});
})(jQuery);

(function ($) {//  blog - subscribe
	$el = $('#subscribe-blog');
	$el.live('click', function (e){
		s.linkTrackVars = 'eVar60,events';
		s.linkTrackEvents = 'event60';
		s.events = 'event60';
		s.eVar60 = 'subscribe to blog';
		s.tl(this, 'o', s.pageName + ': subscribe to blog');
	});
})(jQuery);

(function ($) {  //  blog - comment
	$el = $('#comments-submit');
	$el.live('click', function (e) {
		s.linkTrackVars="prop53,eVar53,events";
		s.linkTrackEvents="event53";
		s.events="event53";
		s.prop53= 'blog post comment: ' + $('.entrytitle_wrap h2').text(); // Blog Title
		s.prop53 = s.prop53.toLowerCase();
		s.eVar53= s.prop53;
		s.tl(true,'o', s.pageName+': blog post comment');
	});
})(jQuery);

(function ($) { //  dome estimator - calculate event
	$el = $('#vaultedDomeForm #submit-button');
	$el.live('click' , function(e){
		s.linkTrackVars = 'eVar61,events';
		s.linkTrackEvents = 'event61';
		s.events = 'event61';
		s.eVar61 = 'dome estimator calculate';
		s.tl(this, 'o', s.pageName + ':dome estimator calculate');
	});
})(jQuery);

//Universal Onclicks