$('.slider').each(function() {
	var $this = $(this);
	var $group = $this.find('.slide-group');
	var $slides = $this.find('.slide');                 
	var currentIndex = 0;
	var timeout;

	function move(newIndex) {
		var animateLeft, slideLeft;
		advance();
		if ($group.is(':animated') || currentIndex === newIndex) {
			return;
		}    
		if (newIndex > currentIndex) {
			slideLeft = '100%';
			animateLeft = '-100%';
		} else {
			slideLeft = '-100%';
			animateLeft = '100%';
		}
		$slides.eq(newIndex).css({
			left: slideLeft,
			display: 'block'
		});
		$group.animate({
			left: animateLeft
		}, function() {
			$slides.eq(currentIndex).css({
				display: 'none'
			});
			$slides.eq(newIndex).css({
				left: 0
			});
			$group.css({
				left: 0
			});
			currentIndex = newIndex;
		});
	}

	function advance() {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			if (currentIndex < ($slides.length - 1)) {
				move(currentIndex + 1);
			} else {
				move(0);
			}
		}, 4000);
  }
  
	advance();
});