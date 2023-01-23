// alert("opened");

$(function(){

var words=["serap","pare","sera","sarp","sap"];
var arr=[];
var count1=0;
var count2=0;
var count3=0;
var count4=0;
var count5=0;
var count6=0;

 function shuffle(){
    let words=["a","e","s","p","r"];
    
  
    var randomIndex;

    for (let i = words.length ; i > 0; i--){
        let random= Math.floor(Math.random() * 10);
    if(random % 2 === 0)
     randomIndex = words.pop();
    else
     randomIndex = words.shift();

     arr.push(randomIndex);

    }
    
  

  return arr;
 }

arr=shuffle();
// console.log(words);




$("#bottom div").each(function(i){

   $(this).text(arr.pop());
})



$("#bottom div").click(function(){


    $(this).animate({backgroundColor:"#ddd"},40)
            .animate({color:"#361847"},40);

    // alert($(this).css("color"));
    
     if($(this).css("color")==="rgb(221, 221, 221)"){
     $("#word").append($(this).text())

     }
     else{
        $(this).animate({top : "-=20px"}, 80)
                .animate({top : "+=20px"}, 80)
                .animate({top : "-=20px"}, 80)
                .animate({top : "+=20px"}, 80)

     }

   

    str=$("#word").text();
    var trimmedStr=str.trim();
    
    
    // alert($("#word").html());
    console.log(trimmedStr);
    console.log(trimmedStr.length);
  

   
})

$("#bottom i").click(function(){


    
 if($("#word").text().length === 0)
    arr=shuffle();
    else{
        $(this).animate({left : "-=20px"}, 60 )
                .animate({left : "+=35px"}, 60 )
                .animate({left : "-=35px"}, 60 )
                .animate({left : "+=20px"}, 60)
    }


  
$("#bottom div").each(function(i){

    $(this).text(arr.pop());
           
 })

 

})

$("body").contextmenu(function(e){
    e.preventDefault();

      
       
        
        // alert("right clicked");

            for(let f of words){

            //     alert(f);
            //  alert($("#word").text());
            //       alert(f === $("#word").text());
                 if(f === $("#word").text()){
                        if($("#word").text()===words[0]){
                            count6=0;
                                if(count1===0){
                                 $(".word1").animate({color:"#361847",backgroundColor:"#ddf",borderColor:"red"},500)
                                count1++;
                                }else{
                                     $(".word1").fadeOut(200)
                                                .fadeIn(200)
                                                .fadeOut(200)
                                                .fadeIn(200)
                                    // break;
                                }
                        
                        }else if($("#word").text()===words[1]){
                            count6=0;
                            if(count2===0){
                         $(".word2").animate({color:"#361847",backgroundColor:"#ddf",borderColor:"red"},500)
                                count2++;
                            }else{
                                    $(".word2").fadeOut(200)
                                    .fadeIn(200)
                                    .fadeOut(200)
                                    .fadeIn(200)
                                }
                        // break;
                        }
                        
                        else if($("#word").text()===words[2]){
                            count6=0;
                            if(count3===0){
                         $(".word3").animate({color:"#361847",backgroundColor:"#ddf",borderColor:"red"},500)
                                count3++;
                        }else{
                            $(".word3").fadeOut(200)
                                    .fadeIn(200)
                                    .fadeOut(200)
                                    .fadeIn(200)
                        }
                        // break;
                        }
                        else if($("#word").text()===words[3]){
                            count6=0;
                            if(count4===0){
                                $(".word4").animate({color:"#361847",backgroundColor:"#ddf",borderColor:"red"},500)
                                count4++;
                            }else{
                                $(".word4").fadeOut(200)
                                .fadeIn(200)
                                .fadeOut(200)
                                .fadeIn(200)
                            }
                        // break;
                        }
                        
                        else if($("#word").text()===words[4]){
                            count6=0;
                            if(count5===0){
                         $(".word5").animate({color:"#361847",backgroundColor:"#ddf",borderColor:"red"},500)
                                count5++;
                            }else{ $(".word5").fadeOut(200)
                            .fadeIn(200)
                            .fadeOut(200)
                            .fadeIn(200)
                            }
                        // break;
                        }
                      $("#word").text("");
                 }
                 else{
                    count6++;
                    // alert(count6);
                    
                 }
                       
               
                
                //   alert("word can not found");

            }   
            if(count6%5===0){
                $("#word").animate({left : "-=20px"}, 60 )
                        .animate({left : "+=35px"}, 60 )
                        .animate({left : "-=35px"}, 60 )
                        .animate({left : "+=20px"}, 60,
                        function(){

                            $("#word").text("");
                            $("#bottom div").css({color:"#ddd"},40);
                            $("#bottom div").css({backgroundColor:"#361847"},40);
                            
                        })

            }
                    
             if($("#word").text().length === 0){
                 $("#bottom div").css({color:"#ddd"},40);
                 $("#bottom div").css({backgroundColor:"#361847"},40);
             }


        count6=0;


        })


$("#hint").click(function(e){
    // alert($("#puzzle .row > div").css(backgroundColor));
    //  $("#puzzle .row > div").fadeToggle(1000);

         if($("#puzzle .row > div").css("backgroundColor")==="rgb(221,221,255)"){
         
        }else{
            $("#puzzle .row > div").animate({color:"#black"},500)
            .delay(1000)
           .animate({color:"#361847"},500);
          }
})
         

// alert($("#puzzle .row > div").css(backgroundColor));






})