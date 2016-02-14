var students = ["Nick", "Bianca", "Anais", "Javi", "Christian", "Pete", "Faraz", "Julian", "Rick", "Gin", "Jeanella", "Mat", "Hsiu", "Andres", "Emilio", "Michael", "Vince"];

var loopLength = Math.floor(students.length/2);

var makePairs = function(students, loopLength) {
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


		$(".js-student-images").append(html);
	}
	$(".js-student-images").children(":first").append(`<img class="third-student-img animated fadeInUp" data-id="${students[0]}" src="http://dummyimage.com/250x250/126bbf/fff&text=${students[0]}">`)
}

$(".js-make-pairs").on("click", function() {
	makePairs(students, loopLength);
})