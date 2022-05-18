import $ from "jquery";

function toastMsg(msg, error = false, to = 3000) {
	var toast = document.createElement("div");
	toast.innerHTML = msg;
	toast.classList.add("bottom-toast");

	if (error) {
		toast.classList.add("toast-error");
	}

	toast = $(toast);
	$("body").append(toast);

	setTimeout(function () {
		toast.addClass("animate__animated animate__slideOutDown");
	}, to);
}

export default toastMsg;
