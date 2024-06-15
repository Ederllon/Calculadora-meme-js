
const btn = document.getElementById("btn");

    

$(document).ready(()=>{
     function cleiton(){
         $("#img").show(2500);
          $(".texto").show(2500);
         
     }
    $("#img").hide(0);
    $(".texto").hide(0);
    $("#btn").click(function(){
        cleiton();
        
    });
    
    
    
    
})

