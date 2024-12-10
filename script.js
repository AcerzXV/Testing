document.addEventListener('DOMContentLoaded', function() {
	const linkInputField = document.getElementById('link-input-field');
	const generateButton = document.getElementById('generate-button');
	const iframeContainer = document.getElementById('iframe-container');
	const iframe = document.getElementById('iframe');

	generateButton.addEventListener('click', function() {
		const link = linkInputField.value.trim();
		if (link.startsWith('https://')) {
			// Set link to iframe's src attribute
			iframe.src = `javascript:alert("${link}");void(0);` + link;
			// Make iframe visible
			iframe.style.display = 'block';
			// Remove iframe container's text
			iframeContainer.style.display = 'block';
		} else {
			alert('Please enter a valid link starting with https://');
		}
	});
});
