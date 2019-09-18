;(function() {
	'use strict';
	var verifyTime = function(value) {
		var time = parseInt(value, 10);
		if (isNaN(time)) time = 0;
		return time*1000;
	}
	var verifyText = function(text, defaultText, hasTime) {
		if (text === undefined)
			return defaultText;
		if (hasTime && !text.includes('%s'))
			text = text + ' %s.';
		return text
	};
	var formatTime = function(days, hours, minutes, seconds) {
		var result = '';
		result += (days) ? ' '+days.toString()+' Hari ' : '';
		result += (hours) ? ' '+hours.toString()+' Jam ' : '';
		result += (minutes) ? ' '+minutes.toString()+' Menit ' : '';
		result += (seconds) ? ' '+Math.max(seconds-1, 0).toString()+' Detik ' : '';
		return result;
	}

	var updateCountdownText = function(el) {
		var now = new Date();
		var startDate = new Date(parseInt(el.dataset.startTime, 10));
		var endDate = new Date(parseInt(el.dataset.endTime, 10));

		var startDiff = startDate.getTime() - now.getTime();
		var endDiff = endDate.getTime() - now.getTime();

		var text = el.dataset.textEnd;
		var diff = startDiff;
		if (startDiff > 1000) {
			if (startDate < endDate)
				text = el.dataset.textStart;
		} else if (endDiff > 1000) {
			diff = endDiff;
		} else {
			text = el.dataset.textAfter;
		}

		if (diff < 1000) {
			el.innerHTML = text;// + ' (start: ' + startDate.toUTCString() + ', end: ' + endDate.toUTCString() + ')';
			return;
		}

		diff = diff / 1000;
		var days   = Math.floor(diff / 86400);
		var hours   = Math.floor(diff % 86400 / 3600);
		var minutes = Math.floor(diff % 3600 / 60);
		var seconds = (diff % 3600 % 60).toFixed(0);

		if (days === 1) { hours += 24; days = 0; }
		if (hours > 1 || days > 0) seconds = 0;
		if (days > 0) minutes = 0;

		var result = formatTime(days, hours, minutes, seconds);

		var interval = 1000;
		if (days > 0) {
			interval = 60*60*1000;
		} else if (hours > 1) {
			interval = 60*1000;
		}

		el.innerHTML = text.replace('%s', result);// + ' (start: ' + startDate.toUTCString() + ', end: ' + endDate.toUTCString() + ', diff: ' + diff +', interval: ' + interval + ')';

		window.setTimeout(function() {
			updateCountdownText(el);
		}, interval);
	}
	var ready = function() {
		var elements = document.querySelectorAll('.localtime');
		Array.from(elements).forEach(function(el) {
			var startTime = verifyTime(el.dataset.start);
			var endTime = verifyTime(el.dataset.end);
			var time = verifyTime(el.dataset.time);
			el.dataset.textStart = verifyText(el.dataset.textStart, 'Event dimulai dalam %s.', true);
			el.dataset.textEnd = verifyText(el.dataset.textEnd, ' %s.', true);
			el.dataset.textAfter = verifyText(el.dataset.textAfter, 'Event Berakhir.', false);
			if ((startTime + endTime) > 0) {
				el.dataset.startTime = startTime;
				el.dataset.endTime = endTime;
				updateCountdownText(el);
			} else if (time > 0){
				updateTimeText(el, time);
			}
		});
	}
	if (document.readyState == 'loading') {
		document.addEventListener('DOMContentLoaded', ready);
	} else {
		ready();
	}
})();