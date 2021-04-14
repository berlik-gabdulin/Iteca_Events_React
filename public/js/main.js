$(document).ready(function () {
	// Диалоговое окно
	$(".custom").magnificPopup({
		items: {
			src: "#feedback-modal",
			type: "inline",
		},
	});
	$(document).on("click", ".popup-modal-dismiss", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	const toggle = document.querySelector(".nav-toggle"),
		menu = document.querySelector(".header-nav");

	let visible = false;

	toggle.addEventListener("click", () => {
		if (visible) {
			menu.classList.add("header-nav--visible");
			visible = !visible;
		} else {
			menu.classList.remove("header-nav--visible");
			visible = !visible;
		}
	});
});
