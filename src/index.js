var christmas2016 = function() {

	if (window.circul8) return;

	const debug = window.location.hash.indexOf('#c8debug') >= 0;

	function sleep (ms, val, goOn = true, ...styles){
	   return new Promise(resolve => setTimeout(resolve, ms)).then(response => {
	   	if (val instanceof Audio) {
	   		val.play();
	   	} else if (typeof val === 'function') {
	   		val();
	   	} else {
	   		if (val.indexOf('%c') === 0) {
	   			console.log(val, 'font-weight: bold; color: #f00;', ...styles);
	   		} else if (val.indexOf('%c') > 0) {
	   			console.log(val, ...styles);
	   		} else {
	   			console.log(val);
	   		}
	   	}
	   	if (goOn) loopGen.next();
	   })
	}

	function* loop(message) {
		for (const [ms, val, goOn, ...styles] of message) {
			yield sleep(ms, val, goOn, ...styles);
		}
	}

	function gaq(action, label) {
		const _gaq = window._gaq || [];
		_gaq.push(['_trackEvent', 'Christmas2016', action, label]);
	}

	let story = [];

	const song = [
		[debug ? 0 : 0, new Audio('./assets/audio.mp3')],
		[debug ? 0 : 7850, "%cOn the first day of Christmas,"],
		[debug ? 0 : 1900, "%cMy Insta gave to me"],
		[debug ? 0 : 1900, "%cA single santa emoji 🎅"],
		[0, () => gaq('complete', '1. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 2000, "%cOn the second day of Christmas,"],
		[debug ? 0 : 1900, "%cMy Insta gave to me"],
		[debug ? 0 : 1700, "%cTwo new follows"],
		[debug ? 0 : 1700, "%cAnd a single santa emoji  🎅"],
		[0, () => gaq('complete', '2. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 2000, "%cOn the third day of Christmas,"],
		[debug ? 0 : 1900, "%cMy Insta gave to me"],
		[debug ? 0 : 1100, "%cThree d*ck pics"],
		[debug ? 0 : 1700, "%cTwo new follows"],
		[debug ? 0 : 1700, "%cAnd a single santa emoji 🎅"],
		[0, () => gaq('complete', '3. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 2000, "%cOn the forth day of Christmas,"],
		[debug ? 0 : 1900, "%cMy Insta gave to me"],
		[debug ? 0 : 1600, "%cFour influencers"],
		[debug ? 0 : 1000, "%cThree d*ck pics"],
		[debug ? 0 : 1600, "%cTwo new follows"],
		[debug ? 0 : 1600, "%cAnd a single santa emoji  🎅"],
		[0, () => gaq('complete', '4. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 2000, "%cOn the fifth day of Christmas,"],
		[debug ? 0 : 1900, "%cMy Insta gave to me"],
		[debug ? 0 : 1900, "%cFIVE REEEEEEEEEE GRAMS"],
		[debug ? 0 : 2800, "%cFour influencers"],
		[debug ? 0 : 1000, "%cThree d*ck pics"],
		[debug ? 0 : 1600, "%cTwo new follows"],
		[debug ? 0 : 1600, "%cAnd a single santa emoji  🎅"],
		[0, () => gaq('complete', '5. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 7000, "%cOn the sixth day of Christmas,"],
		[debug ? 0 : 1900, "%cMy Insta gave to me"],
		[debug ? 0 : 1700, "%cSix photos \"out with bae\""],
		[debug ? 0 : 1700, "%cFIVE REEEEEEEEEE GRAMS"],
		[debug ? 0 : 6000, "%cFour influencers"],
		[debug ? 0 : 1000, "%cThree d*ck pics"],
		[debug ? 0 : 1600, "%cTwo new follows"],
		[debug ? 0 : 1600, "%cAnd a single santa emoji  🎅"],
		[0, () => gaq('complete', '6. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 2000, "%cOn the seventh day of Christmas,"],
		[debug ? 0 : 1900, "%cMy Insta gave to me"],
		[debug ? 0 : 1900, "%cSeven %cSnapchat%c Instagram stories", true, 'font-weight: bold; color: #f00; text-decoration: line-through;', 'font-weight: bold; color: #f00;'],
		[debug ? 0 : 1400, "%cSix photos \"out with bae\""],
		[debug ? 0 : 1600, "%cFIVE REEEEEEEEEE GRAMS"],
		[debug ? 0 : 2900, "%cFour influencers"],
		[debug ? 0 : 1000, "%cThree d*ck pics"],
		[debug ? 0 : 1600, "%cTwo new follows"],
		[debug ? 0 : 1500, "%cAnd a single santa emoji  🎅"],
		[0, () => gaq('complete', '7. verse')],
		[debug ? 0 : 100, "%c           v"],
		[debug ? 0 : 100, "%c          >X<"],
		[debug ? 0 : 100, "%c           A"],
		[debug ? 0 : 100, "%c          d$b"],
		[debug ? 0 : 100, "%c        .d\$$b."],
		[debug ? 0 : 100, "%c      .d$i$$\$$b."],
		[debug ? 0 : 100, "%c        d$$@b"],
		[debug ? 0 : 100, "%c       d\$$$ib"],
		[debug ? 0 : 100, "%c     .d$$$\$$$b"],
		[debug ? 0 : 100, "%c   .d$$@$$$$\$$ib."],
		[debug ? 0 : 100, "%c       d$$i$$b"],
		[debug ? 0 : 100, "%c      d\$$$$@$b"],
		[debug ? 0 : 100, "%c   .d$@$$\$$$$$@b."],
		[debug ? 0 : 100, "%c .d$$$$i$$$\$$$$$$b."],
		[debug ? 0 : 100, "%c        ###"],
		[debug ? 0 : 100, "%c        XXX"],
		[debug ? 0 : 100, "%c        ###"],
		[debug ? 0 : 100, "%c---------------------------------"],
		[debug ? 0 : 5500, "%cOn the eighth day of Christmas,"],
		[debug ? 0 : 1900, "%cMy Insta gave to me"],
		[debug ? 0 : 1700, "%cEight #flatlays of meals"],
		[debug ? 0 : 1400, "%cSeven %cSnapchat%c Instagram stories", true, 'font-weight: bold; color: #f00; text-decoration: line-through;', 'font-weight: bold; color: #f00;'],
		[debug ? 0 : 1300, "%cSix brand endorsements"],
		[debug ? 0 : 1500, "%cFIVE REEEEEEEEEE GRAMS"],
		[debug ? 0 : 6000, "%cFour influencers"],
		[debug ? 0 : 1000, "%cThree d*ck pics"],
		[debug ? 0 : 1600, "%cTwo new follows"],
		[debug ? 0 : 1500, "%cAnd a single santa emoji  🎅"],
		[0, () => gaq('complete', '8. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 7000, "%cOn the ninth day of Christmas,"],
		[debug ? 0 : 3800, "%cMy Insta gave to me"],
		[debug ? 0 : 3400, "%cNine teenagers #twerking"],
		[debug ? 0 : 3300, "%cEight #flatlays of meals"],
		[debug ? 0 : 3300, "%cSeven %cSnapchat%c Instagram stories", true, 'font-weight: bold; color: #f00; text-decoration: line-through;', 'font-weight: bold; color: #f00;'],
		[debug ? 0 : 1300, "%cSix photos \"out with bae\""],
		[debug ? 0 : 1500, "%cFIVE REEEEEEEEEE GRAMS"],
		[debug ? 0 : 5000, "%cFour influencers"],
		[debug ? 0 : 1000, "%cThree d*ck pics"],
		[debug ? 0 : 1500, "%cTwo new follows"],
		[debug ? 0 : 1500, "%cAnd a single santa emoji  🎅"],
		[0, () => gaq('complete', '9. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 7000, "%cOn the tenth day of Christmas,"],
		[debug ? 0 : 1600, "%cMy Insta gave to me"],
		[debug ? 0 : 1500, "%cTen #nofilter selfies"],
		[debug ? 0 : 1400, "%cNine teenagers #twerking"],
		[debug ? 0 : 1300, "%cEight #flatlays of meals"],
		[debug ? 0 : 1200, "%cSeven %cSnapchat%c Instagram stories", true, 'font-weight: bold; color: #f00; text-decoration: line-through;', 'font-weight: bold; color: #f00;'],
		[debug ? 0 : 1400, "%cSix photos \"out with bae\""],
		[debug ? 0 : 1900, "%cFIVE REEEEEEEEEE GRAMS"],
		[debug ? 0 : 5200, "%cFour influencers"],
		[debug ? 0 : 1200, "%cThree d*ck pics"],
		[debug ? 0 : 1400, "%cTwo new follows"],
		[debug ? 0 : 1500, "%cAnd a single santa emoji  🎅"],
		[0, () => gaq('complete', '10. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 2000, "%cOn the eleventh day of Christmas,"],
		[debug ? 0 : 1700, "%cMy Insta gave to me"],
		[debug ? 0 : 1900, "%cEleven #lit parties, fam"],
		[debug ? 0 : 1500, "%cTen #nofilter selfies"],
		[debug ? 0 : 1400, "%cNine teenagers #twerking"],
		[debug ? 0 : 1400, "%cEight #flatlays of meals"],
		[debug ? 0 : 1300, "%cSeven %cSnapchat%c Instagram stories", true, 'font-weight: bold; color: #f00; text-decoration: line-through;', 'font-weight: bold; color: #f00;'],
		[debug ? 0 : 1300, "%cSix photos \"out with bae\""],
		[debug ? 0 : 2200, "%cFIVE REEEEEEEEEE GRAMS"],
		[debug ? 0 : 5000, "%cFour influencers"],
		[debug ? 0 : 1000, "%cThree d*ck pics"],
		[debug ? 0 : 1600, "%cTwo new follows"],
		[debug ? 0 : 1500, "%cAnd a single santa emoji  🎅"],
		[0, () => gaq('complete', '11. verse')],
		[debug ? 0 : 1000, "%c---------------------------------"],
		[debug ? 0 : 3100, "%cOn the twelfth day of Christmas,"],
		[debug ? 0 : 3500, "%cMy Insta gave to me"],
		[debug ? 0 : 4000, "%cTwelve bros a #dabbing"],
		[debug ? 0 : 1400, "%cEleven #lit parties, fam"],
		[debug ? 0 : 1300, "%cTen #nofilter selfies"],
		[debug ? 0 : 1200, "%cNine teenagers #twerking"],
		[debug ? 0 : 1100, "%cEight #flatlays of meals"],
		[debug ? 0 : 1000, "%cSeven %cSnapchat%c Instagram stories", true, 'font-weight: bold; color: #f00; text-decoration: line-through;', 'font-weight: bold; color: #f00;'],
		[debug ? 0 : 900, "%cSix photos \"out with bae\""],
		[debug ? 0 : 900, "%cFIVE REEEEEEEEEE GRAMS"],
		[debug ? 0 : 900, "%cFour influencers"],
		[debug ? 0 : 900, "%cThree d*ck pics"],
		[debug ? 0 : 900, "%cTwo new follows"],
		[debug ? 0 : 5000, "%cAnd a single santa emoji 🎅"],
		[0, () => gaq('complete', '12. verse')],
		[debug ? 0 : 1300, ""]
	];

	let welcome = `Hi there!`
	if (window.c8name) {
		welcome = `Hi there ${window.c8name}!`
	}

	const message = [
		[debug ? 0 : 1500, welcome],
		[debug ? 0 : 1500, 'On the internet, everything is simply code (and emojis). 🎄 🎅'],
		//[debug ? 0 : 1500, 'At circul8, we believe that code can be beautiful, entertaining and even interactive...'],
		[debug ? 0 : 1500, 'Sometimes that\'s where the real magic happens...'],
		[debug ? 0 : 1500, 'Turn on your speakers 🔊 and put on your Santa hat.'],
		[debug ? 0 : 1500, '🎶 🎤 💃']
	];
	const logo = new AsciiLogo();

	const postSong = [
		[debug ? 0 : 1500, 'In the spirit of spreading a bit of Christmas cheer, you can now ask Santa Circul8 for a present of your own.....'],
		[debug ? 0 : 1500, 'Simply type %ccircul8.present("Add your own present request here");', true, 'font-style: italic; color: #f00;'],
		[debug ? 0 : 1500, 'e.g) %ccircul8.present("a toy car");', true, 'font-style: italic; color: #f00;'],
		[debug ? 0 : 1500, 'Then hit enter.'],
		[debug ? 0 : 1500, 'We\'ll see what we can find for you...'],
		[debug ? 0 : 1500, '⬇️', false],
	];

	const postPresent = [
		[debug ? 0 : 1500, ''],
		[debug ? 0 : 1500, '%cMerry Christmas! 🎄', true,],
		[debug ? 0 : 1500, 'How do you like your present? 🎁'],
		[debug ? 0 : 1500, 'If you would now like to ask Santa 🎅 Circul8 FOR REAL, click here → %chttps://www.circul8.com.au/circul8santa', true, 'color: #00f; text-decoration: underline;'],
		[0, () => gaq('complete', 'all')],
	];

	console.clear();
	story = story.concat([[0, () => gaq('click', 'start experience')]]);
	story = story.concat([[0, 'Starting in 5...']]);
	story = story.concat([[debug ? 0 : 1000, '4...']]);
	story = story.concat([[debug ? 0 : 1000, '3...']]);
	story = story.concat([[debug ? 0 : 1000, '2...']]);
	story = story.concat([[debug ? 0 : 1000, '1...']]);
	story = story.concat([[debug ? 0 : 1000, '']]);
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