var data = localStorage.getItem("people");

if (data === null) {
	showInput();
}
else {
	var students = JSON.parse(data);
	showRandomizer(students);
}

function showInput() {
	$('.js-input').show();
}

function showRandomizer(students) {
	new Clipboard('.js-make-pairs', {
	    text: function(trigger) {
	        return trigger.getAttribute('data-pairs');
	    }
	});

	$(".js-make-pairs").on("click", firstClick)

	$('.js-randomizer').show();
}


function makePairs(students) {
	var loopLength = Math.floor(students.length/2);
	console.log(loopLength);
	var pairs = [];
	$(".js-student-images").empty();
	for(var i = 0; i < loopLength; i++) {

		var firstInPair = students[Math.floor(Math.random()*students.length)];
		var students = students.filter(function(e){return e!==firstInPair});

		var secondInPair = students[Math.floor(Math.random()*students.length)];
		var students = students.filter(function(e){return e!==secondInPair});

		var html = `
			<div class="each-pair">
				<img class="first-student-img animated fadeInRight" data-id="${firstInPair}" src="http://dummyimage.com/250x250/126bbf/fff&text=${firstInPair}">
				<img class="second-student-img animated fadeInLeft" data-id="${secondInPair}" src="http://dummyimage.com/250x250/126bbf/fff&text=${secondInPair}">
			</div>
		`;

		pairs.push(`${firstInPair} with ${secondInPair}`);

		$(".js-student-images").append(html);
	}
	if (students.length > 0) {
		$(".js-student-images").children(":first").append(`<img class="third-student-img animated fadeInUp" data-id="${students[0]}" src="http://dummyimage.com/250x250/126bbf/fff&text=${students[0]}">`)
		var trio = pairs[0];
		pairs[0] = trio + " and " + students[0];
	}

	return pairs;
}

function copyPairs(pairs) {
	var pairsString = pairs.toString()
	pairsString = pairsString.replace(/,/g, "\n");
	$(".js-make-pairs").attr("data-pairs", pairsString);
}



function firstClick() {
	var pairs = makePairs(students);
	$(".js-make-pairs").text("Copy Pairs to Clipboard")
    $(".js-make-pairs").off('click').on('click', secondClick)
	copyPairs(pairs);
}

function secondClick() {
	$(".js-make-pairs").text("Redo the pairs");
    $(".js-make-pairs").off('click').on('click', firstClick);
}