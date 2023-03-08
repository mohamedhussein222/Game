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




 
  
  async function displatDetails (){
   return new Promise(function{
    let cartona = "" ; 
    cartona += `
    <div class="container">
    <header class="hstack justify-content-between">
       <h1 class="text-center h3 py-4">Details Game</h1>
       <button class="btn-close btn-close-white" id="btnClose"></button>
    </header>
    <div class="row g-4" id="detailsContent">
<div class="col-md-4">
<img src="${detailsGame.thumbnail}" class="w-100" alt="image details">
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
   })
}



