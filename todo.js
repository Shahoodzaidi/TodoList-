let input = document.getElementById("inputs");
let task = document.querySelector(".task");
function todo (){
    if (input.value ==""){
        alert("you must write something!")
    }
    else {
        let newel=document.createElement("ul")
       newel.innerHTML=`${input.value} <i class="fa-solid fa-delete-left"></i>`;
       task.appendChild(newel)
       task.style.display="block";
       input.value="";
      newel.querySelector("i").addEventListener("click", remove);
      function remove(){
        newel.remove()
        
    
      }

    }
   
}
