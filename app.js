document.addEventListener("DOMContentLoaded", () => {
	// select form, url, top text, and bottom text
	const form = document.querySelector("form"),
		url = document.querySelector("#image-url"),
		topText = document.querySelector("#top-text-input"),
		bottomText = document.querySelector("#bottom-text-input");
	// individual images
	const submittedMemes = document.querySelector("#submitted-memes"),
		memes = document.querySelectorAll(".meme");

	// event listeners for submit and delete
	form.addEventListener("submit", submit);
	memes.forEach((meme) => meme.addEventListener("click", deleteMeme));
	// handle submit
	function submit(event) {
		event.preventDefault(); //prevent refreshing of the page
		createMeme(url.value, topText.value, bottomText.value);
		clearInputFields();
	}
	// add img, top text, and bottom text to new image
	function createMeme(url, topText, bottomText) {
		// create meme/div
		let meme = document.createElement("div");
		meme.setAttribute("class", "meme");
		submittedMemes.appendChild(meme);
		// add top text
		let top = document.createElement("div");
		top.setAttribute("class", "caption top-caption");
		top.innerText = topText;
		meme.appendChild(top);
		// add bottom text
		let bottom = document.createElement("div");
		bottom.setAttribute("class", "caption bottom-caption");
		bottom.innerText = bottomText;
		meme.appendChild(bottom);
		// append image to the meme/div
		let image = document.createElement("img");
		image.setAttribute("src", url);
		meme.appendChild(image);
		// add delete button
		let deleteButton = document.createElement("div");
		deleteButton.innerText = "click to close";
		deleteButton.setAttribute("class", "close-button");
		meme.appendChild(deleteButton);
		//add delete event listener
		meme.addEventListener("click", deleteMeme);
	}
	// handle clearing form
	function clearInputFields() {
		url.value = "";
		topText.value = "";
		bottomText.value = "";
	}

	// handle delete
	function deleteMeme(meme) {
		//click on any inner text or image, and delete
		meme.target.parentElement.remove();
	}
});
