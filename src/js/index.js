import SolveProblem from "./solve.js";
import { closeResults, resultWrapper, eqnInput } from "./elements.js";
import { initTheme } from "./themes.js";
import splitbee from "@splitbee/web";

splitbee.init();

(function () {
	let params = new URL(document.location).searchParams;
	let eqn = params.get("eqn");
	if (eqn) {
		SolveProblem(eqn);
		eqnInput.val(eqn);
	}

	initTheme();
})();

eqnInput.keypress((event) => {
	if (event.keyCode == 13) {
		event.preventDefault();
		SolveProblem(eqnInput.val());
	}
});

closeResults.click(() => {
	resultWrapper.removeClass("animate__bounceIn");
	resultWrapper.addClass("animate__bounceOut");
	setTimeout(() => {
		resultWrapper.hide();
		resultWrapper.removeClass("animate__bounceOut");
	}, 500);
	eqnInput.val("");
});
