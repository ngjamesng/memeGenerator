document.addEventListener("DOMContentLoaded", () => {
	// select form, url, top text, and bottom text
	const form = document.querySelector("form"),
		url = document.querySelector("#image-url"),
		topText = document.querySelector("#top-text"),
		bottomText = document.querySelector("#bottom-text");

	// handle Submit
	form.addEventListener("submit", submit);
	function submit(event) {
		let imgVal = urlField.value,
			topTextVal = topText.val,
			bottomTextVal = bottomText.val;

		// event.preventDefault();
	}

	// add img, top text, and bottom text to new image
});
