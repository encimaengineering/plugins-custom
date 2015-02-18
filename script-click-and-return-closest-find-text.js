(function ($) { //  add to account - forum
	$el = $('.forumsAddToMyAccount');
	$el.live('click', function (e) {
		//s.linkTrackVars = 'prop19, eVar58, events';
		//s.linkTrackEvents = 'event32';
		//s.events = 'event32';
		s.prop19 = 'add to my account: forum topic: ' + $(this).closest('.summary').find('[data-tracking="forum-topic-title"]').text(); //  Tom to update code with data-tracking="forum-topic-title"
		s.prop19 = s.prop19.toLowerCase();
		s.eVar58 = s.prop19;
		console.log(s.prop19);
		//s.tl(this, 'o', s.pageName + ':add to account|forum topic');
	});
})(jQuery);