
let Response = [];
async  function data (category){
let getData = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, {
  method:'get' ,
 headers: {
    'X-RapidAPI-Key': '92a276a025mshb9c21a56e205bb1p1af9cfjsnd183e7fd9059',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
 }
}
)
Response = await getData.json(); 
await displayData()
}

data("PIXEL")
 function displayData (){
   // return new Promise( async   function(){
      let cartona = "";
      for(let i =0 ; i <Response.length ;i++){
      cartona += `
      
      <div class="col-lg-3">
            <div  onclick="dataD(${Response[i].id})" class="card cardID h-100 bg-transparent" role="button" "="">
               <div class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" src="${Response[i].thumbnail}">
                  
                  </figure>
      
                  <figcaption>
      
                     <div class="hstack justify-content-between">
                        <h3 class="h6 small">${Response[i].publisher}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>
      
                     <p class="card-text small text-center opacity-50">
                       ${Response[i].short_description}
                     </p>
      
                  </figcaption>
               </div>
      
               <footer class="card-footer small hstack justify-content-between">
      
                  <span class="badge badge-color">${Response[i].genre}</span>
                  <span class="badge badge-color">${Response[i].platform}</span>
      
               </footer>
            </div>
         
         
          
       
          </div> 
      
      `
      document.querySelector(".row").innerHTML=cartona;
     
  }
   // })
   let xx = document.querySelectorAll(".card");
   
   for(let i = 0 ; i<xx.length ; i++){
      xx[i].addEventListener("click" , function(){
         document.querySelector(".games").classList.add("d-none");
         document.querySelector(".details").classList.remove("d-none")
      })
   }

 
}



 document.querySelector(".MMORPG").addEventListener("click" , function(){
    data("MMORPG") ; 

 })
 document.querySelector(".shooter").addEventListener("click" , function(){
    data("SHOOTER") ; 
    document.querySelector(".nav-link").classList.add("active");

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

   let idResponse = [];
 async  function dataD (id){
   let req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id="${id}`, {
     method:'get' ,
    headers: {
       'X-RapidAPI-Key': '92a276a025mshb9c21a56e205bb1p1af9cfjsnd183e7fd9059',
       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    }
   }
   )
idResponse = await req.json(); 
   console.log(idResponse)
  await displatDetails();

 
   }
   // dataD(427);
    function displatDetails (){
 return new Promise ( async function(){
   let cartona = "" ; 
   cartona += `
   <div class="container">
   <header class="hstack justify-content-between">
      <h1 class="text-center h3 py-4">Details Game</h1>
      <button class="btn-close btn-close-white" id="btnClose"></button>
   </header>
   <div class="row g-4" id="detailsContent">
 <div class="col-md-4">
 <img src="${idResponse.thumbnail}" class="w-100 imaget" alt="image details">
 </div>
 <div class="col-md-8">
 <h3>Title:${idResponse.title}</h3>
 <p>Category: <span class="badge text-bg-info"> ${idResponse.genre}</span> </p>
 <p>Platform: <span class="badge text-bg-info"> ${idResponse.platform}</span> </p>
 <p>Status: <span class="badge text-bg-info"> ${idResponse.status}</span> </p>
 <p class="small">${idResponse.description}</p>
 <a class="btn btn-outline-warning" target="_blank" href="${idResponse.game_url}">Show Game</a>
 </div>
 
 </div>
 </div>
   `
   document.querySelector(".details").innerHTML= cartona ;


   let btnClose = document.querySelector(".btn-close");
   btnClose.addEventListener("click" , function(){
      document.querySelector(".details").classList.add("d-none")
      document.querySelector(".games").classList.remove("d-none");

   })





}

 )}



