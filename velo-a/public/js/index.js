"use strict";

async function bootstrap() {
	setTimeout(function () {
		document.location = 'information.html';
	}, 37000);
}

window.addEventListener('DOMContentLoaded', () => {
	bootstrap();
});
