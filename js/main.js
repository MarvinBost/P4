Modernizr.on('webp', function (result) {
	var img = document.querySelectorAll('img.webp');
	var a = document.querySelectorAll('a.webp');
	for (let i = 0; i < img.length; i++) {
		const element = img[i];
		if (result) {
			newpath = element.src.replace('jpg', 'webp');
			element.src = newpath;
		}
	}
	for (let i = 0; i < a.length; i++) {
		const element = a[i];
		newpath = element.getAttribute('data-lightbox').replace('jpg', 'webp')
		element.setAttribute('data-lightbox', newpath)
	}
});