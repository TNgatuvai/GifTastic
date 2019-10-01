var athletes = ["Lebron James", "Tiger Woods", "ELi Manning", "Odell Beckham Jr"];

function renderButtons() {
	$("#GIF-buttons").empty();
	for (i = 0; i < athletes.length; i++) {
		$("#GIF-buttons").append("<button class='btn btn-success' data-GIF='" + athletes[i] + "'>" + athletes[i] + "</button>");
	}
}

renderButtons();

$("#add-GIF").on("click", function () {
	event.preventDefault();
	var athletes = $("#GIF-input").val().trim();
	GIF.push(athletes);
	renderButtons();
	return;
});

