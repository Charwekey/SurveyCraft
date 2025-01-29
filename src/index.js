let button= document.querySelector("#openModal")
function openmodal(){
  let container= document.querySelector(".form-container")
  container.style.display="block"

  

}
button.addEventListener("click", openmodal);

let close = document.querySelector("#closeModal");
function closemodal(){
 let container = document.querySelector(".form-container");
 container.style.display = "none";
}

close.addEventListener("click",closemodal)


