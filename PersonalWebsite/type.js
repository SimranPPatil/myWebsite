function substr(string, idx){
	console.log("here:"+ string.slice(0,idx));
	return string.slice(0,idx);
}
function cursor(string, i){
	var refreshId = setInterval(function(){
		$('#cursor').animate({opacity:0}).animate({opacity:1});
		if(i>string.length)
			clearInterval(refreshId);
	}, 50);
};

function imageRotator(array){
	let i =0;
	setInterval(function(){
		var input = array[i];
		console.log(input);
		document.getElementById("myImg").style.backgroundImage = 'url('+input+')';
		if(i<array.length-1){
			i++;
		}
		else
			i=0; //reset
	}, 5000);
};

function openNav() {
    document.getElementById("Intro").style.height = "100%";
}

function closeNav() {
    document.getElementById("Intro").style.height = "0%";
}

function typewriter(){
	var string = "Hi there! Welcome Aboard! I am Simran Patil."
	let i=0; 
	var refreshId = setInterval(function(){
		var sub = substr(string,i);
		$('#type').text(sub);
		cursor(string,i);
		if(i<string.length)
			i++;
		else{
    		clearInterval(refreshId);
		}
	},100);
}

var main = function(){
	var gallery = [ "louvre.jpg", "fort.jpg"];
	imageRotator(gallery);
	typewriter();
}

$(document).ready(main);
