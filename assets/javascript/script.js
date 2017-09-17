$("#portfolio").hide();
$("#contact").hide();


$("#btnPortfolio").on("click", function(){
	$("#about").hide();
	$("#contact").hide();
	$("#portfolio").show();
});

$("#btnAbout").on("click", function(){
	$("#portfolio").hide();
	$("#contact").hide();
	$("#about").show();
});

$("#btnContact").on("click", function(){
	$("#about").hide();
	$("#portfolio").hide();
	$("#contact").show();
});