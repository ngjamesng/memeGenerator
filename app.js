document.addEventListener("DOMContentLoaded", () => {
	// select form, url, top text, and bottom text
	const form = document.querySelector("form"),
		url = document.querySelector("#image-url"),
		topText = document.querySelector("#top-text-input"),
		bottomText = document.querySelector("#bottom-text-input");
	// individual images
	const submittedMemes = document.querySelector("#submitted-memes");

	// handle Submit
	form.addEventListener("submit", submit);
	function submit(event) {
		event.preventDefault();
		createMeme(url.value, topText.value, bottomText.value);
	}

	// add img, top text, and bottom text to new image
	function createMeme(url, top, bottom) {
		// create meme/div
		let meme = document.createElement("div");
		meme.setAttribute("class", "meme");
		submittedMemes.appendChild(meme);
		// append image to the meme/div
		let image = document.createElement("img");
		image.setAttribute("src", url);
		meme.appendChild(image);
	}
});
