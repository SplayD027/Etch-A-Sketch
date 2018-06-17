//global var
let main = document.querySelector('main');
let randombutton = document.getElementById('randombutton');
let blackbutton = document.getElementById('blackbutton');
let colorSwitch = 0;
let size = document.getElementById('size');

//actions
document.querySelector('button').addEventListener('click',getNum);
randombutton.addEventListener('click',()=>{if(!(colorSwitch==1))colorSwitch=1;else colorSwitch=0;});
blackbutton.addEventListener('click',()=>{if(!(colorSwitch==0))colorSwitch=0;else colorSwitch=-1;});

function createPixel(num){
    if(num > 99){
        alert("Sorry 99 is bst i can do!");
        return
    }
    main.innerHTML="";
    main.setAttribute("style",
        `grid-template: repeat(${num},auto)/repeat(${num },auto);`);
    let i = 1;
    while(i <= (num*num)){
     let box = document.createElement('div');
     box.classList.add('box');
	 box.addEventListener('mouseenter',drawing);	
//        if(i%2 == 0)box.classList.add('red');
//        else box.classList.add('blue');
//		  box.style.backgroundColor= 'hsl(0, 0%, 100%)';
     main.appendChild(box);
     i++
 }
    main.addEventListener('click',stopDrawing); 
}

function startDrawing(e){
    let boxs = Array.from(document.getElementsByClassName("box"));
    boxs.forEach((e)=>e.addEventListener('mouseenter',drawing)); 
	boxs.forEach((e)=>e.addEventListener('click',drawing));
    main.removeEventListener('click',startDrawing);
    main.addEventListener('click',stopDrawing);
}

function drawing(e){
    if(colorSwitch==1)randomColor(e);
	else if(colorSwitch==-1)e.target.style.backgroundColor='black';
	else blackInk(e);
}

function stopDrawing(e){
    let boxs = Array.from(document.getElementsByClassName("box"));
    boxs.forEach((e) =>e.removeEventListener('mouseenter',drawing));
    boxs.forEach((e) =>e.removeEventListener('click',drawing));
    main.removeEventListener('click',stopDrawing);
    main.addEventListener('click',startDrawing); 
}

function blackInk(e){
	console.log(e.target.style.backgroundColor);
	switch(e.target.style.backgroundColor){
		case "rgb(230, 230, 230)":
			e.target.style.backgroundColor= "hsl(0, 0%, 80%)";
			break;
		case "rgb(204, 204, 204)":
			e.target.style.backgroundColor= "hsl(0, 0%, 70%)";
			break;
		case "rgb(179, 179, 179)":
			e.target.style.backgroundColor= "hsl(0, 0%, 60%)";
			break;
		case "rgb(153, 153, 153)":
			e.target.style.backgroundColor= "hsl(0, 0%, 50%)";
			break;
		case "rgb(128, 128, 128)":
			e.target.style.backgroundColor= "hsl(0, 0%, 40%)";
			break;
		case "rgb(102, 102, 102)":
			e.target.style.backgroundColor= "hsl(0, 0%, 30%)";
			break;
		case "rgb(77, 77, 77)":
			e.target.style.backgroundColor= "hsl(0, 0%, 20%)";
			break;
		case "rgb(51, 51, 51)":
			e.target.style.backgroundColor= "hsl(0, 0%, 10%)";
			break;
		case "rgb(26, 26, 26)":
			e.target.style.backgroundColor= "hsl(0, 0%, 0%)";
			break;
		case "rgb(0, 0, 0)":	
		case "black":
			e.target.style.backgroundColor= "hsl(0, 0%, 0%)";
			break;	
		default:
			e.target.style.backgroundColor= "hsl(0, 0%, 90%)";
 }
}

function randomColor(e){
    e.target.style.backgroundColor= "rgb("+random(226)+","+random(226)+","+random(226)+")";
}

function random(n){
 return Math.floor(Math.random()*n);
}

function getNum(){
    let num = prompt();
    createPixel(num);
	size.innerText = "Size : "+num+"x"+num;
}

//testsite

function testRandom(n){
   for(let i=0;i<10;i++){
    let ran = Math.random()*n;
	console.log("ran= "+ran);
    let rou = Math.round(ran*1000000);
	console.log("rou= "+rou);
 checkRou: while(rou<=99999){
	 console.log("rouB= "+rou);
	 rou = rou*10;
	 console.log("rouA= "+rou);
 }
     if(rou<99999)return "error: "+rou;
 }
}

function explainRandomWithMinMax(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let ran = Math.random();
    console.log("Math.random() =");
	console.log(ran);
    console.log("(max - min + 1) =");
	console.log(max-min+1);
	console.log("Math.random() * (max - min + 1) =");
    console.log(ran * (max - min + 1));
	console.log("Math.random * (max - min + 1) + min =");
    console.log(ran * (max - min + 1) + min);
	console.log("Math.floor(Math.random * (max - min + 1) + min) =");
    return Math.floor(ran * (max - min + 1)) + min;
}