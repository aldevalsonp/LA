function abrirCarta(){

document.querySelector(".envelope").style.display="none";

const carta=document.getElementById("carta");

carta.style.display="block";

setTimeout(()=>{
carta.classList.add("abrir");
},100);

}

const nao=document.getElementById("nao");

function fugir(){

const largura=window.innerWidth-100;
const altura=window.innerHeight-100;

const x=Math.random()*largura;
const y=Math.random()*altura;

nao.style.left=x+"px";
nao.style.top=y+"px";

}

nao.addEventListener("mouseover",function(){
nao.classList.add("treme");
fugir();
});

nao.addEventListener("touchstart",function(e){
e.preventDefault();
nao.classList.add("treme");
fugir();
});

nao.addEventListener("click",function(e){
e.preventDefault();
fugir();
});

document.getElementById("sim").onclick=function(){

/* ENVIA RESPOSTA PARA VOCÊ */

fetch("https://formspree.io/f/mkoqzezb",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
resposta:"Ela clicou SIM 💖",
data:new Date().toLocaleString()
})
});

document.getElementById("carta").style.display="none";

document.body.innerHTML+=`
<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
font-size:40px;
color:#ff4d88;
font-weight:bold;
text-align:center;
z-index:1000;
">
💖 💍💍 💖<br>
Agora somos um casal 💗
</div>
`;

celebracao();

}

function celebracao(){

const coisas=["💗","🦋","🌸","💍"];

setInterval(()=>{

const item=document.createElement("div");

item.style.position="fixed";
item.style.left=Math.random()*100+"vw";
item.style.top="-50px";
item.style.fontSize="30px";
item.style.animation="cair 5s linear";

item.innerHTML=coisas[Math.floor(Math.random()*coisas.length)];

document.body.appendChild(item);

setTimeout(()=>{
item.remove();
},5000);

},200);

}
