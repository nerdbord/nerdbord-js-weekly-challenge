const modal = document.getElementById('Modal');

function showModal(BooleanValue) {
	if (typeof BooleanValue !== 'boolean') {
		throw new Error('Expected a boolean value.');
	}

	if (BooleanValue) {
		modal.style.display = 'flex';
	} else {
		const modal = document.getElementById('Modal');
		modal.style.display = 'none';
	}
}

window.onclick = function (event) {
	if (event.target == modal) {
		showModal(false);
	}
};
