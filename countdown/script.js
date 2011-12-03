var div = document.getElementsByClassName('countdown');
for (var i = 0; i < div.length; i++) {
	init_countdown.call(div[i]);
}

function call_countdown(time) {
	function r(num) {
		return (num < 10) ? '0' + num : num;
	}

	var rtime = Math.round((time.getTime() - Date.now()) / 1000);
	if (rtime < 1) {
		this.getElementsByClassName('seconds')[0].innerHTML = '00';
		return true;
	}

	this.getElementsByClassName('hours')[0].innerHTML = r(Math.floor(rtime / 3600));
	this.getElementsByClassName('minutes')[0].innerHTML = r(Math.floor(rtime % 3600 / 60));
	this.getElementsByClassName('seconds')[0].innerHTML = r(rtime % 60);
	return false;
}

function init_countdown() {
	if (this.className === 'countdown') {
		this.className += ' default';
	}

	var time = new Date(this.innerHTML);
	if (time.toString() === 'Invalid Date') {
		throw new TypeError('Invalid date specified');
	}

	this.innerHTML = '<span class="hours">00</span><span class="seperator">:</span><span class="minutes">00</span><span class="seperator">:</span><span class="seconds">00</span>';
	var that = this, interval = setInterval(function() {
		if (call_countdown.call(that, time)) {
			clearInterval(interval);
		}
	}, 1000);
	call_countdown.call(this, time)
}
