$("body").on("change", "#htag", function (e) {
	//const hsearch = e.target;
	const hsearch = $(e.target).val();
	$("src").text(`${hsearch}.png`)
	//	console.log(`img\/${hsearch}.png`)


});