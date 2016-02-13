var students = ["Nick", "Anais", "Bianca", "Javi", "Christian", "Pete", "Faraz", "Julian", "Rick", "Gin", "Jeanella", "Mat", "Hsiu", "Andres", "Emilio", "Michael", "Vince"];

var loopLength = Math.floor(students.length/2);

var makePairs = function(students, loopLength) {
	$(".js-student-images").empty();
	for(var i = 0; i < loopLength; i++) {

		var firstInPair = students[Math.floor(Math.random()*students.length)];
		var students = students.filter(function(e){return e!==firstInPair});

		var secondInPair = students[Math.floor(Math.random()*students.length)];
		var students = students.filter(function(e){return e!==secondInPair});


		$(".js-student-images").append(`<img class="first-student-img animated slideInRight" data-id="${firstInPair}" src="http://dummyimage.com/250x250/126bbf/fff&text=${firstInPair}">`)
		$(".js-student-images").append(`<img class="second-student-img animated slideInLeft" data-id="${secondInPair}" src="http://dummyimage.com/250x250/126bbf/fff&text=${secondInPair}">`)

	}
	$(".js-student-images").append(`<img class="third-student-img animated fadeInUpBig" data-id="${students[0]}" src="http://dummyimage.com/250x250/126bbf/fff&text=${students[0]}">`)
}

$(".js-make-pairs").on("click", function() {
	makePairs(students, loopLength);
})