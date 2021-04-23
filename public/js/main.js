$(document).ready(function () {
	// Диалоговое окно
	$(".custom").magnificPopup({
		// type: "inline",
		// preloader: false,
		// modal: true,
		items: {
			src: "#feedback-modal",
			type: "inline",
		},
	});
	$(document).on("click", ".popup-modal-dismiss", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});
