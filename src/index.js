var christmas2016 = function() {

	if (window.circul8) return;

	function sleep (ms, val, goOn = true, styles = ''){
	   return new Promise(resolve => setTimeout(resolve, ms)).then(response => {
	   	if (val instanceof Audio) {
	   		val.play();
	   	} else if (typeof val === 'function') {
	   		val();
	   	} else {
	   		if (val.indexOf('%c') === 0) {
	   			console.log(val, 'font-weight: bold; color: #f00;');
	   		} else if (val.indexOf('%c') > 0) {
	   			console.log(val, styles);
	   		} else {
	   			console.log(val);
	   		}
	   	}
	   	if (goOn) loopGen.next();
	   })
	}

	function* loop(message) {
		for (const mes of message) {
			yield sleep(mes[0], mes[1], mes[2], mes[3]);
		}
	}

	let story = [];

	const song = [
		[0, new Audio('./assets/audio.mp3')],
		[7850, "%cOn the first day of Christmas,"],
		[1900, "%cMy Insta gave to me"],
		[1900, "%cA single santa emoji 🎅"],
		[1000, "%c---------------------------------"],
		[2000, "%cOn the second day of Christmas,"],
		[1900, "%cMy Insta gave to me"],
		[1700, "%cTwo new follows"],
		[1700, "%cAnd a single santa emoji  🎅"],
		[1000, "%c---------------------------------"],
		[2000, "%cOn the third day of Christmas,"],
		[1900, "%cMy Insta gave to me"],
		[1100, "%cThree dick pics"],
		[1700, "%cTwo new follows"],
		[1700, "%cAnd a single santa emoji 🎅"],
		[1000, "%c---------------------------------"],
		[2000, "%cOn the forth day of Christmas,"],
		[1900, "%cMy Insta gave to me"],
		[1600, "%cFour influencers"],
		[1000, "%cThree dick pics"],
		[1600, "%cTwo new follows"],
		[1600, "%cAnd a single santa emoji  🎅"],
		[1000, "%c---------------------------------"],
		[2000, "%cOn the fifth day of Christmas,"],
		[1900, "%cMy Insta gave to me"],
		[1900, "%cFIVE REEEEEEEEEE GRAMS"],
		[2800, "%cFour influencers"],
		[1000, "%cThree dick pics"],
		[1600, "%cTwo new follows"],
		[1600, "%cAnd a single santa emoji  🎅"],
		[1000, "%c---------------------------------"],
		[7000, "%cOn the sixth day of Christmas,"],
		[1900, "%cMy Insta gave to me"],
		[1700, "%cSix brand endorcements"],
		[1700, "%cFIVE REEEEEEEEEE GRAMS"],
		[6000, "%cFour influencers"],
		[1000, "%cThree dick pics"],
		[1600, "%cTwo new follows"],
		[1600, "%cAnd a single santa emoji  🎅"],
		[1000, "%c---------------------------------"],
		[2000, "%cOn the seventh day of Christmas,"],
		[1900, "%cMy Insta gave to me"],
		[1900, "%cSeven shitty stories"],
		[1400, "%cSix brand endorcements"],
		[1600, "%cFIVE REEEEEEEEEE GRAMS"],
		[2900, "%cFour influencers"],
		[1000, "%cThree dick pics"],
		[1600, "%cTwo new follows"],
		[1500, "%cAnd a single santa emoji  🎅"],
		[100, "%c           v"],
		[100, "%c          >X<"],
		[100, "%c           A"],
		[100, "%c          d$b"],
		[100, "%c        .d\$$b."],
		[100, "%c      .d$i$$\$$b."],
		[100, "%c        d$$@b"],
		[100, "%c       d\$$$ib"],
		[100, "%c     .d$$$\$$$b"],
		[100, "%c   .d$$@$$$$\$$ib."],
		[100, "%c       d$$i$$b"],
		[100, "%c      d\$$$$@$b"],
		[100, "%c   .d$@$$\$$$$$@b."],
		[100, "%c .d$$$$i$$$\$$$$$$b."],
		[100, "%c        ###"],
		[100, "%c        XXX"],
		[100, "%c        ###"],
		[100, "%c---------------------------------"],
		[5500, "%cOn the eighth day of Christmas,"],
		[1900, "%cMy Insta gave to me"],
		[1700, "%cEight flat lays of meals"],
		[1400, "%cSeven shitty stories"],
		[1300, "%cSix brand endorsements"],
		[1500, "%cFIVE REEEEEEEEEE GRAMS"],
		[6000, "%cFour influencers"],
		[1000, "%cThree dick pics"],
		[1600, "%cTwo new follows"],
		[1500, "%cAnd a single santa emoji  🎅"],
		[1000, "%c---------------------------------"],
		[7000, "%cOn the ninth day of Christmas,"],
		[3800, "%cMy Insta gave to me"],
		[3400, "%cNine acronym hashtags"],
		[3300, "%cEight flat lays of meals"],
		[3300, "%cSeven shitty stories"],
		[1300, "%cSix brand endorcements"],
		[1500, "%cFIVE REEEEEEEEEE GRAMS"],
		[5000, "%cFour influencers"],
		[1000, "%cThree dick pics"],
		[1500, "%cTwo new follows"],
		[1500, "%cAnd a single santa emoji  🎅"],
		[1000, "%c---------------------------------"],
		[7000, "%cOn the tenth day of Christmas,"],
		[1600, "%cMy Insta gave to me"],
		[1500, "%cTen '#nofilter' selfies"],
		[1400, "%cNine acronym hashtags"],
		[1300, "%cEight flat lays of meals"],
		[1200, "%cSeven shitty stories"],
		[1400, "%cSix brand endorcements"],
		[1900, "%cFIVE REEEEEEEEEE GRAMS"],
		[5200, "%cFour influencers"],
		[1200, "%cThree dick pics"],
		[1400, "%cTwo new follows"],
		[1500, "%cAnd a single santa emoji  🎅"],
		[1000, "%c---------------------------------"],
		[2000, "%cOn the eleventh day of Christmas,"],
		[1700, "%cMy Insta gave to me"],
		[1900, "%cEleven hater’s hatin’"],
		[1500, "%cTen '#nofilter' selfies"],
		[1400, "%cNine acronym hashtags"],
		[1400, "%cEight flat lays of meals"],
		[1300, "%cSeven shitty stories"],
		[1300, "%cSix brand endorcements"],
		[2200, "%cFIVE REEEEEEEEEE GRAMS"],
		[5000, "%cFour influencers"],
		[1000, "%cThree dick pics"],
		[1600, "%cTwo new follows"],
		[1500, "%cAnd a single santa emoji  🎅"],
		[1000, "%c---------------------------------"],
		[3100, "%cOn the twelfth day of Christmas,"],
		[3500, "%cMy Insta gave to me"],
		[4000, "%cTwelve snaps of the plane wing"],
		[1400, "%cEleven hater’s hatin’"],
		[1300, "%cTen '#nofilter' selfies"],
		[1200, "%cNine acronym hashtags"],
		[1100, "%cEight flat lays of meals"],
		[1000, "%cSeven shitty stories"],
		[900, "%cSix brand endorcements"],
		[900, "%cFIVE REEEEEEEEEE GRAMS"],
		[900, "%cFour influencers"],
		[900, "%cThree dick pics"],
		[900, "%cTwo new follows"],
		[5000, "%cAnd a single santa emoji  🎅"],
		[1300, ""]
	];
	const message = [
		[1500, 'Hello there! 👋'],
		[1500, 'Are you ready for Christmas? 🎄 🎅'],
		[1500, 'No? You better be!'],
		[1500, 'Well, we already have something for you... 🎁'],
		[1500, 'Prepare...'],
		[1500, '🎶 🎤 💃']
	];
	const logo = new AsciiLogo();

	const postSong = [
		[1500, 'In the spirit of spreading a bit of Christmas cheer, you can now ask Santa Circul8 for a present of your own.....'],
		[1500, 'Simply type %ccircul8.present("Add your own present request here");', true, 'font-weight: bold; color: #f00;'],
		[1500, 'e.g) %ccircul8.present("a toy car");', true, 'font-weight: bold; color: #f00;'],
		[1500, 'Then hit enter.'],
		[1500, 'We\'ll see what we can find for you...'],
		[1500, '⬇️', false],
	];

	const postPresent = [
		[1500, ''],
		[1500, '%cMerry Christmas! 🎄', true, 'font-weight: bold;'],
		[1500, 'How do you like your present? 🎁'],
		[1500, 'If you would now like to ask Santa 🎅 Circul8 FOR REAL, click here → %chttps://www.circul8.com.au/circul8santa', true, 'color: #00f; text-decoration: underline;'],
	];

	console.clear();
	story = story.concat([[0, 'Hi, hold on a sec, we are starting in 5...']]);
	story = story.concat([[1000, '4...']]);
	story = story.concat([[1000, '3...']]);
	story = story.concat([[1000, '2...']]);
	story = story.concat([[1000, '1...']]);
	story = story.concat([[1000, '']]);
	story = story.concat(logo);
	story = story.concat(message);
	story = story.concat(song);
	story = story.concat(postSong);
	story = story.concat(postPresent);

	let loopGen = loop(story);
	loopGen.next();

	window.circul8 = {
		present: function(search) {
			console.ascii(search, {width: 60, color: false, callback: function() {
				loopGen.next();
			}});
		}
	}

};