const btn = document.getElementById("btn");

$(document).ready(()=>{
     function actFunc(){
         $("#img").show(1000);
          $(".texto").show(1000);
         
     }
    $("#img").hide(0);
    $(".texto").hide(0);
    $("#btn").click(function(){
        actFunc();
        
    });
    
    
    
    
})
