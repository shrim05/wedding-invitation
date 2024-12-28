$(document).on("ready", function () {
	var windowHeight = $(window).innerHeight();
	$(".info-section.h-100").css("height", windowHeight);

	$("#popup-modal").click(function () {
		if ($(this).hasClass("pop-on")) {
			var id = $(this).data("pop-id");
			$(this).removeClass("pop-on").removeAttr("data-pop-id").removeData().fadeOut(100);
			$("#" + id + "").removeClass("pop-on").fadeOut(100);
		}
	});
	$("#calendar").datepicker({
		dateFormat: 'yyyy-mm-dd'
		, defaultDate: new Date('2025-02-08')
		, showOtherMonths: false
		, showMonthAfterYear: false
		, changeYear: false
		, changeMonth: false
		, constrainInput: false
		, monthNames: ['<strong>1</strong> January', '<strong>2</strong> Fedruary', '<strong>3</strong> March', '<strong>4</strong> April', '<strong>5</strong> May', '<strong>6</strong> June', '<strong>7</strong> July', '<strong>8</strong> August', '<strong>9</strong> September', '<strong>10</strong> October', '<strong>11</strong> November', '<strong>12</strong> December'] //달력의 월 부분 Tooltip 텍스트

	});

	$('#imageGallery').lightSlider({
		gallery: true,
		item: 1,
		loop: true,
		thumbItem: 5,
		slideMargin: 0,
		enableDrag: true,
		enableSwipe: true,
		currentPagerPosition: 'left',
		useCss: true,
		zoom: true,

		// centerSlide: true,
		// adaptiveHeight: true,
		onSliderLoad: function (el) {
			el.lightGallery({
				selector: '#imageGallery .lslide',
				plugins: ["lgZoom"]
			});
		}
	});
});

function jsCopyLink(copyText, id) {
	var tmpTextarea = document.createElement('textarea');
	tmpTextarea.value = copyText;

	document.body.appendChild(tmpTextarea);
	tmpTextarea.select();
	tmpTextarea.setSelectionRange(0, 100);

	document.execCommand('copy');
	document.body.removeChild(tmpTextarea);
	popClose(id);
	popOpen('copyComplete');
}

function popOpen(id) { 
	$("#popup-modal")
		.addClass("pop-on")
		.attr("data-pop-id", id)
		.fadeIn(200);

	$("#" + id + "")
		.css({
			"padding ": "0.1rem", "margin-top": -$("#" + id + "")
				.outerHeight() / 2
		})
		.addClass("pop-on")
		.fadeIn(200);
}

function popClose(id) { 
	$("#popup-modal[data-id=" + id + "]")
		.removeClass("pop-on")
		.removeAttr("data-id")
		.removeData()
		.fadeOut(100);

	$("#" + id + "")
		.removeClass("pop-on")
		.fadeOut(100);
}
