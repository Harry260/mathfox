import $ from "jquery";
import { themeCheckbox, themIcon } from "./elements.js";
import toastMsg from "./toast.js";

function setTheme(theme, init = false) {
	if (theme !== "light") {
		$("body").removeClass("web-light");
		localStorage.setItem("theme", "dark");
		themIcon.removeClass("bi-sun-fill").addClass("bi-moon-stars-fill");
		themeCheckbox.prop("checked", true);
	} else {
		$("body").addClass("web-light");
		localStorage.setItem("theme", "light");
		themeCheckbox.prop("checked", false);
		themIcon.addClass("bi-sun-fill").removeClass("bi-moon-stars-fill");
	}

	if (!init) {
		toastMsg("Theme set to " + theme);
	}
}

function initTheme() {
	let theme = localStorage.getItem("theme") || "dark";
	if (theme) {
		setTheme(theme, true);
	}

	themeCheckbox.on("change", () => {
		var theme = !themeCheckbox.prop("checked") ? "light" : "dark";
		console.log(theme);
		setTheme(theme);
	});
}

export { initTheme, setTheme };
