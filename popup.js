function activePopUp(){const a=document.getElementById("active"),b=document.getElementById("unactive"),c=document.getElementById("new_container");a.addEventListener("click",()=>{c.classList.add("active")}),b.addEventListener("click",()=>{c.classList.remove("active")})}activePopUp();