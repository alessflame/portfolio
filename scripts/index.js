
let logo = document.getElementById("logo");
let icon = document.getElementsByClassName("logoElem");
let story= document.getElementById("story");
let img= document.getElementById("imageStory");
let internalBar= document.getElementById("internalBar");
let navDesk = document.getElementById("navDesk");
let closeStory= document.getElementById("closeIcon");
let menuIcon = document.getElementById("burgerIcon");
let navBar= document.getElementById("navBar");
let sectionMenu =document.getElementById("sectionList")



menuIcon.addEventListener("click", ()=>{




navBar.classList.toggle("visible");
navBar.classList.toggle("notVisible")
}

);


icon[0].addEventListener("click",()=>history());
// icon[1].addEventListener("click", ()=>history());

closeStory.onclick=()=>{
     story.style.display="none";
     
}

let sizeScreen= screen.width;


logo.addEventListener("mouseover", ()=>{

     console.log(sizeScreen);

     sizeScreen>700?
     navDesk.style.display="flex":
     navDesk.style.display="none";

});

navDesk.onmouseout=()=>{
     navDesk.style.display="none";
}


function history(){
     story.style.display="flex";
     internalBar.style.display="block";  

   setTimeout(()=>{
        if(story.style.display=="flex"){
          story.style.display="none";
          console.log("eccomi");}
          else{clearTimeout(this);}
     }, 7000);
}







img.onclick=()=>{
      
     

     img.getAttribute("src")==="./images/story1.png" ?
      

     img.setAttribute("src","./images/story2.png"):
     
     img.setAttribute("src","./images/story1.png");

}


