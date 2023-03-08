let allData= [];


  function data(category){
  return new Promise(function(){
   const req = new XMLHttpRequest();
   req.open("get" , `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`);
   req.setRequestHeader("X-RapidAPI-Key", "92a276a025mshb9c21a56e205bb1p1af9cfjsnd183e7fd9059");
   req.send();
   req.addEventListener("readystatechange" , function(){
       if(req.readyState==4 && req.status==200){
          allData = JSON.parse(req.response);
         console.log(allData)
       displayData();
       
       }
   })
  })
}



data("MMORPG")





let details = document.querySelector(".details") ; 
let games = document.querySelector(".games");

function displayData (){
   return new Promise(function(){
      let cartona = "";
      for(let i =0 ; i <allData.length ;i++){
      cartona += `
      
      <div class="col-lg-3">
            <div  onclick="dataD(${allData[i].id}), ${details.classList.remove("d-none")}" class="card cardID h-100 bg-transparent" role="button" "="">
               <div class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" src="${allData[i].thumbnail}">
                  
                  </figure>
      
                  <figcaption>
      
                     <div class="hstack justify-content-between">
                        <h3 class="h6 small">${allData[i].publisher}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>
      
                     <p class="card-text small text-center opacity-50">
                       ${allData[i].short_description}
                     </p>
      
                  </figcaption>
               </div>
      
               <footer class="card-footer small hstack justify-content-between">
      
                  <span class="badge badge-color">${allData[i].genre}</span>
                  <span class="badge badge-color">${allData[i].platform}</span>
      
               </footer>
            </div>
         
         
          
       
          </div> 
      
      `
      document.querySelector(".row").innerHTML=cartona;
  }
   })
}

document.querySelector(".MMORPG").addEventListener("click" , function(){
   data("MMORPG") ; 

})
document.querySelector(".shooter").addEventListener("click" , function(){
   data("SHOOTER") ; 

})
document.querySelector(".SAILING").addEventListener("click" , function(){
   data("SAILING") ; 

})
document.querySelector(".PERMADEATH").addEventListener("click" , function(){
   data("PERMADEATH") ; 

})
document.querySelector(".SUPERHERO").addEventListener("click" , function(){
   data("SUPERHERO") ; 

})
document.querySelector(".PIXEL").addEventListener("click" , function(){
   data("PIXEL") ; 

})





let detailsGame = [];
   function dataD(id){

    let details = new XMLHttpRequest ();
    details.open("get" , `https://free-to-play-games-database.p.rapidapi.com/api/game?id="${id}"`);
    details.setRequestHeader("X-RapidAPI-Key", "92a276a025mshb9c21a56e205bb1p1af9cfjsnd183e7fd9059");
    details.send();
    details.addEventListener("readystatechange" , function(){
        if(details.readyState==4 &&details.status==200){
          detailsGame =JSON.parse(details.response);
          console.log(detailsGame)
          displatDetails ();
     
        }
    })



 } 




 
  
  function displatDetails (){
   let cartona = "" ; 
   cartona += `
   <div class="container">
   <header class="hstack justify-content-between">
      <h1 class="text-center h3 py-4">Details Game</h1>
      <button class="btn-close btn-close-white" id="btnClose"></button>
   </header>
   <div class="row g-4" id="detailsContent">
<div class="col-md-4">
<img src="${detailsGame.thumbnail}" class="w-100 imaget" alt="image details">
</div>
<div class="col-md-8">
<h3>Title:${detailsGame.title}</h3>
<p>Category: <span class="badge text-bg-info"> ${detailsGame.genre}</span> </p>
<p>Platform: <span class="badge text-bg-info"> ${detailsGame.platform}</span> </p>
<p>Status: <span class="badge text-bg-info"> ${detailsGame.status}</span> </p>
<p class="small">${detailsGame.description}</p>
<a class="btn btn-outline-warning" target="_blank" href="${detailsGame.game_url}">Show Game</a>
</div>

</div>
</div>
   
   
   
   
   
   
   `
   document.querySelector(".details").innerHTML= cartona ;

   
}

