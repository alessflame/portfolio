let write= document.getElementById("write");
let secondwrite= document.getElementById("secondWrite");



var line="Hi there! I'm Francesco. ";
let secondLine=`I'm a Web Developer`;

let index= 0;
let i=0;
let slash=document.getElementById("slash");

document.getElementById("ball").style.backgroundColor="transparent";


let present= document.getElementById("presentation");



/*evento load - carica la pagina e si avviano le funzioni writing e bar che gestiscono la presentazione */


window.onload= function (){
   
let s= setInterval(writing, 100);
let z=setInterval(bar,320);}





/*bar- la funzione che gestisce l'opacità della barra che accompagna la presentazione
 simulando il comportamento di un editor di testo*/
function bar(){ 
if(i< line.length){

   i%2 == 0? opacityOn() : opacityOff() ;
     
    }else{
    slash.style.display="none";
    document.getElementById("ball").style.backgroundColor="#2d832dda";
    clearInterval(); } }
  

    //funzioni interne che gestiscono l'opacità

    function opacityOn()
    {slash.style.opacity="0.4"; i++; slash.style.fontSize="97%";}


    function opacityOff()
    {slash.style.opacity="0.9"; i++; slash.style.fontSize="100%";}




    //writing- gestisce il comportamento del testo
function writing(){
if(index<line.length){
  write.innerHTML+= `<b class='letter'>${line[index]}</b>`; index++;

} else if(index==line.length){
     let br=document.createElement("br");
      secondwrite.prepend(br);index++;  

}else if(index<line.length+1+secondLine.length){
     secondwrite.innerHTML+=`<b class='letter'>${secondLine[index-line.length-1]}</b>`; index++;
}else if(index==line.length + secondLine.length+1){
     secondwrite.innerHTML+=`<b class='letter'>&#128293;</b>`; index++;
}
else{
     clearInterval();}

     

}

