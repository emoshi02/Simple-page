var Kartas=false; 

const rodytiID = () =>{
	var divas = document.getElementById("Raudona");
	if(!Kartas){
		var a = document.createElement("p");
		a.innerText = "{ID = " + divas.id + "}";5
		divas.appendChild(a);
		alert("ID nustatytas!");
		Kartas = true;
	}
	else{
		divas.remove(); 
		var padidintas=document.getElementById("Geltonas-blokas");
		padidintas.style.flexBasis="100%";
	}
}

function rodytiMatmenis(){
	var EkranoIlgisAukstis = document.createElement("p");
	let x, y;
	if(window.pageXOffset && window.pageYOffset == undefined){
		x=document.scrollLeft;
		y=document.scrollTop;
	}
	else{
		x=window.pageXOffset;
		y=window.pageYOffset;
	}
	EkranoIlgisAukstis.innerText = "Ekrano dydis: " + window.screen.width + " X " + window.screen.height +", "+ "Dokumento dydis: " + window.innerWidth + " X " + window.innerHeight +"." + '\n' +
		"Slankikliu padetys: " + "horizontalaus: " + x +", vertikalaus: " + y;
	document.getElementById("Raudona").appendChild(EkranoIlgisAukstis);
}
const kopijuoti=(el)=>{
	let clone1 = el.cloneNode(true);
	el.id = "Naujas1";
	el.parentNode.insertBefore(clone1,el);
}

visualViewport.addEventListener('resize', () => {
	if(Kartas){
		if(window.innerWidth < 1024){
        document.getElementById("virsutinis-blokas").style.height="100%";
        document.getElementById("apatinis-blokas").style.height="0%";
    	}
		else {
		document.getElementById("apatinis-blokas").style.height="calc(40/0.9*1%)";
		document.getElementById("virsutinis-blokas").style.height="calc(50/0.9*1%)";
		}
	}
});

var canvas;
var ctx;

function piestiObjekta(){
	canvas = document.getElementsByTagName("canvas")[0];
	ctx = canvas.getContext("2d");
	requestAnimationFrame(piestiObjekta);
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.lineWidth = "2";

	ctx.beginPath();
	ctx.arc(11,5,1,(Math.PI/180)*180, (Math.PI/180)*270);
	ctx.moveTo(10,5);
	ctx.lineTo(10,30);
	ctx.moveTo(20,4);
	ctx.lineTo(10,4);
	ctx.moveTo(20,30);
	ctx.lineTo(10,30);
	ctx.arc(11,29,1,(Math.PI/180)*90, (Math.PI/180)*180);
	ctx.moveTo(20,18);
	ctx.lineTo(10,18);
	ctx.strokeStyle = "blue";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(25,30);
	ctx.quadraticCurveTo(25,0,35,30);
	ctx.moveTo(35,30);
	ctx.quadraticCurveTo(40,0,45,30);
	ctx.strokeStyle="red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(50,14);
	ctx.lineTo(50,30);
	ctx.strokeStyle="yellow";
	ctx.stroke();
}

var pozicija = 1;
var dydis = 1.01;
var X,Y=-2;

function animuotiObjekta(){
	ctx.clearRect(X,Y,canvas.width,canvas.height);
	ctx.scale(dydis,dydis);
	pozicija++;
	if(pozicija<=50){
		window.requestAnimationFrame(animuotiObjekta);
	}	
	else{
		setTimeout(mazintiObjekta);
	}
}
var objX=0,objY=0;
function mazintiObjekta(){	
	ctx.clearRect(X,Y,canvas.width,canvas.height);
	dydis=0.99;
	objX+=0.03;
	objY-=0.001;
	ctx.translate(objX,objY);
	ctx.scale(dydis,dydis);
	pozicija++;
	if(pozicija<120){
		window.requestAnimationFrame(mazintiObjekta);
	}
}
