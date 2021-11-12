var selectedAll = document.querySelectorAll(".selected");
var btncontent = document.querySelector('.btncontent');

function showcontent(){
    btncontent.classList.toggle('isntblock');
  
}

selectedAll.forEach(selected =>{

    var optionscontainer = selected.previousElementSibling;
   

     var searchbox = selected.nextElementSibling;
      var optionslist = optionscontainer.querySelectorAll(".option");
   
    selected.addEventListener("click" , () =>{
       if(optionscontainer.classList.contains("active")){
           optionscontainer.classList.remove("active");
       }
       else{
           let currentactive = document.querySelector(".options-container.active");
           if(currentactive){
               currentactive.classList.remove("active");
           }
           optionscontainer.classList.add("active");
       }
        searchbox.value ="";
        filterList("");
        if(optionscontainer.classList.contains("active")==true){
            searchbox.focous();
        }
       
     });
    
    optionslist.forEach(o=>
        {
            o.addEventListener("click",()=>{
                selected.innerHTML= o.querySelector("label").innerHTML;
                optionscontainer.classList.remove("active");
                
            });
        });
    searchbox.addEventListener("keyup",function(e){
        filterList(e.target.value);
    });
    var filterList=searchterm=>{
        searchterm = searchterm.toLowerCase();
        optionslist.forEach(option =>{
            let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
            if(label.indexOf(searchterm)!=-1){
             option.style.display='block' ;  
            }else{
                option.style.display='none' ;     
            }
        });
    };
    
});
window.onclick = function(e){
    if(!e.target.matches('.button') ){
       btncontent.classList.add('isntblock');
    }
}