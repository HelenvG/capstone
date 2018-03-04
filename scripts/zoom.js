jQuery(document).ready(function($) {
	$('.lightbox_trigger').click(function(e) {
		e.preventDefault();
		var image_src = $(this).attr("src");
		if ($('#lightbox').length > 0) {
			$('#content').html('<img src="' + image_src + '" />');
			$('#lightbox').show();
		} else {
			var lightbox = '<div id="lightbox">' + '<p>&times</p>' + '<div id="content">' + '<img src="' + image_src + '" />' + '</div>' + '</div>';
			$('body').append(lightbox);
		}
	});
	$('#lightbox').live('click', function() {
		$('#lightbox').hide();
	});
});
