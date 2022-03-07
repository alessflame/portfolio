class Animation{

     constructor(element){
          this.element=element;
 
     }
 
           control(){
          if(window.pageYOffset>= this.element.offsetTop - this.element.clientHeight*5){
               return true;
          }else{
               return false;
          }};

           moveScrollX(){
              
               if(this.control())
               this.element.style.transform="translateX(0)";
          
          }

           opacityScroll(){

               if(this.control()){
               this.element.style.opacity="1";
               }

          }

          

};


let ebout = document.getElementById("about");
let section = document.querySelectorAll("#sectionItem > section ")
let spans = document.querySelectorAll("#bodySection span");

let eboutElement= new Animation(ebout);
let sectionElement=[ new Animation(section[0]), new Animation(section[1])];
let spanElem = new Array();

spans.forEach((span) => {
     spanElem.push(new Animation(span));});



window.onscroll=()=>{
 eboutElement.opacityScroll();

 sectionElement[0].opacityScroll(); sectionElement[1].opacityScroll();
 
 spanElem.forEach(span=>{ span.opacityScroll();});

 
}


