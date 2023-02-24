const myNav = document.querySelector('.fixed-top')

window.addEventListener('scroll', function () {
	if (window.scrollY >= 700) {
		myNav.setAttribute('style', 'background-color: #212529 !important;')
	} else {
		myNav.setAttribute('style', 'background-color: rgba(255, 255, 255, 0.089) !important;')
	}
})
/* scroll sections */

const $root = $('html, body')

$('a[href^="#"]').click(function () {
	$root.animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top - 50,
		},
		400
	)

	return false
})

/* button */
var basicTimeline = anime.timeline({
	autoplay: false,
})

var pathEls = $('.check')
for (var i = 0; i < pathEls.length; i++) {
	var pathEl = pathEls[i]
	var offset = anime.setDashoffset(pathEl)
	pathEl.setAttribute('stroke-dashoffset', offset)
}

basicTimeline
	.add({
		targets: '.text',
		duration: 1,
		opacity: '0',
	})
	.add({
		targets: '.button',
		duration: 1300,
		height: 10,
		width: 300,
		backgroundColor: '#2B2D2F',
		border: '0',
		borderRadius: 100,
	})
	.add({
		targets: '.progress-bar',
		duration: 2000,
		width: 300,
		easing: 'linear',
	})
	.add({
		targets: '.button',
		width: 0,
		duration: 1,
	})
	.add({
		targets: '.progress-bar',
		width: 80,
		height: 80,
		delay: 1,
		duration: 750,
		borderRadius: 80,
		backgroundColor: '#8a0a0a',
	})
	.add({
		targets: pathEl,
		strokeDashoffset: [offset, 0],
		duration: 200,
		easing: 'easeInOutSine',
	})

$('.button').click(function () {
	basicTimeline.play()
	setTimeout(() => {
		location.reload()
	}, 6000)
})

$('.text').click(function () {
	basicTimeline.play()
})

/* validate mail */
const validateEmail = (email) => {
	return email.match(
	  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
  };
  
  const validate = () => {
	const $result = $('#result');
	const email = $('#email').val();
	$result.text('');
  
	if (validateEmail(email)) {
	  $result.text();
	  $result.css('color', 'green');
	} else {
	  $result.text(email + ' jest nieprawdiłowy!');
	  $result.css('color', 'red');
	}
	return false;
  }
  
  $('#email').on('input', validate);