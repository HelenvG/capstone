jQuery(document).ready(function($) {
	
	$('.lightbox_trigger').click(function(e) {
		
	
		e.preventDefault();
		
		//Get image
		var image_src = $(this).attr("src");
		

		
		if ($('#lightbox').length > 0) { // #lightbox exists
			
			//place href as img src value
			$('#content').html('<img src="' + image_src + '" />');
		   	
			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}
		
		else { //#lightbox does not exist - create and insert (runs 1st time only)
			
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
				'<p>&times</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_src +'" />' +
				'</div>' +	
			'</div>';
				
			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
		
	});
	
	//Click to close lightbox
	$('#lightbox').live('click', function() { 
		$('#lightbox').hide();
	});

});

