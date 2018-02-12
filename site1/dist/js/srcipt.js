
$(document).ready ( function () {
	
	let $button = $("#nav-toggle"),
		$nav = $("#navigation");
		navToggleClass = "navigation-holder--moblie-open";
		textOpen = "Open nav";
		textClose = 'Close nav';

	$button.on("click",function (e) {
		e.preventDefault();
		if ( $nav.hasClass(navToggleClass) )  {
			$nav.fadeOut();
			setTimeout(function () {
				$nav.removeClass(navToggleClass)
			},1000);
			$(this).text(textOpen);
		}
		else {
			$nav.hide().addClass(navToggleClass).fadeIn();
			$(this).text(textClose);
		};
	})
	
	$nav.on("click" , function (e) {
		if ( $nav.hasClass(navToggleClass) )  {
		$nav.fadeOut();
		setTimeout(function () {
			$nav.removeClass(navToggleClass)
		},1000);
		$button.text(textOpen);
		};
	})

})



