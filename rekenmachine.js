$ (function () {


var value="";
$("#display").text(0);

$("#zero").click(function(){
	value+="0";
	$("#display").text(value);
});

$("#one").click(function(){
	value+="1";
	$("#display").text(value);
});

$("#two").click(function(){
	value+="2";
	$("#display").text(value);
});

$("#three").click(function(){
	value+="3";
	$("#display").text(value);
});

$("#four").click(function(){
	value+="4";
	$("#display").text(value);
});

$("#five").click(function(){
	value+="5";
	$("#display").text(value);
});

$("#six").click(function(){
	value+="6";
	$("#display").text(value);
});

$("#seven").click(function(){
	value+="7";
	$("#display").text(value);
});

$("#eight").click(function(){
	value+="8";
	$("#display").text(value);
});

$("#nine").click(function(){
	value+="9";
	$("#display").text(value);
});

$("#plus").click(function(){
	value+="+";
	$("#display").text(value);
});

$("#minus").click(function(){
	value+="-";
	$("#display").text(value);
});

$("#multiply").click(function(){
	value+="*";
	$("#display").text(value);
});

$("#divide").click(function(){
	value+="/";
	$("#display").text(value);
});

$("#dot").click(function(){
	value+=".";
	$("#display").text(value);
});

$("#total").click(function(){
	value= eval(value);
	$("#display").text(value);
});

$("#clear").click(function(){
	value="0";
	$("#display").text(value);
	value="";

});




});