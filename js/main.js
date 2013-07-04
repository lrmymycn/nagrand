How = {
	init: function(){
		$('#slider').cycle({
			fx:'shuffle',
			pager: '#slider-description',
			pagerAnchorBuilder: function(idx, slide) {
	            return '#slider-description li:eq(' + (idx) + ')';
	        }
		});
		
		var offset = $('#step-container').offset().top - 50;
		var currentTop = offset;
		$(window).scroll(function(){
			var fromTop = $(this).scrollTop();
			var sections = $('section.benefit').map(function(){
				if(($(this).offset().top - 400) < fromTop){
					return this;
				}
			});
			
			if(sections.length > 0){
				var currentSection = $(sections[sections.length - 1]);
				var step = currentSection.data('step');
				if(step == undefined){
					step = 1;
					currentSection = $('section[data-step="1"]');
				}
				var id = currentSection.attr('id');
    			var top = $('#' + id).offset().top - offset;
    			if(top != currentTop){
    				currentTop = top;
    				$('#step').text('STEP ' + step).stop().animate({
        				'top':top	
        			});
    			}
			}
		});
	}
}
