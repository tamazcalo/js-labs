var cursor = document.getElementById('cursor');
cursor.left = cursor.top = 0;

document.addEventListener('keydown', function(e) {
	if (e.keyCode === 37 && (cursor.top >= 300 || cursor.left !== 250) && cursor.left > 49) {
		cursor.style.left = (cursor.left -= 50) + 'px'; // left
	} else if (e.keyCode === 38 && (cursor.top !== 300 || cursor.left !== 200) && cursor.top > 49) {
		cursor.style.top = (cursor.top -= 50) + 'px'; // up
	} else if (e.keyCode === 39 && (cursor.top >= 300 || cursor.left !== 150) && cursor.left < 750) {
		cursor.style.left = (cursor.left += 50) + 'px'; // right
	} else if (e.keyCode === 40 && cursor.top < 550) {
		cursor.style.top = (cursor.top += 50) + 'px'; //down
	}
	(e.keyCode > 36 && e.keyCode < 41) && e.preventDefault();
});

var interval = setInterval(function() {
	if (cursor.left !== monster.left) {
		monster.style.left = (monster.left += (cursor.left > monster.left) ? 50 : -50) + 'px';
	}
	if (cursor.top !== monster.top) {
		monster.style.top = (monster.top += (cursor.top > monster.top) ? 50 : -50) + 'px';
	} else if (monster.left === cursor.left) {
		clearInterval(interval);
		alert('Game over.');
	}
}, 250), monster = document.getElementById('monster');
monster.left = monster.top = 400;
