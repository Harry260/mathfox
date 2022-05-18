import $ from "jquery";
import nerdamer from "nerdamer";
import toastMsg from "./toast.js";
import ClipboardJS from "clipboard";
import { resultWrapper, copyResults, copyLink } from "./elements.js";

function SolveProblem(problem) {
	try {
		var value = problem;
		if (!value) {
			toastMsg("Please enter an equation", true);
			return;
		}

		var eqn = nerdamer(nerdamer.convertFromLaTeX(value));
		var result = eqn.evaluate().text();

		var latex = nerdamer.convertToLaTeX(result);
		$(".lx-output").html("$" + latex + "$");

		MathJax.Hub.Queue(["Typeset", MathJax.Hub, window.output]);
		resultWrapper.show();

		resultWrapper.addClass("animate__animated animate__bounceIn");

		copyResults.attr("data-clipboard-text", result);
		copyLink.attr(
			"data-clipboard-text",
			location.origin + "?eqn=" + encodeURIComponent(value)
		);

		var clipboard = new ClipboardJS(".copy-button");

		clipboard.on("success", function (e) {
			toastMsg("Copied to clipboard", false);
		});

		clipboard.on("error", function (e) {
			toastMsg("Failed to copy to clipboard", true);
		});
	} catch (err) {
		toastMsg(`That didn't work! (${err.message.split(":")[0]})`, true);
	}
}

export default SolveProblem;
