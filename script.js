let store;
async function loadProducts(){

     let data=await fetch('https://fakestoreapi.com/products')
     productsList=await data.json();

    //  console.log(productsList[0]);
     productsList.forEach((item,i)=>{
        document.getElementById("container").innerHTML+=`
        <div class="col-md-4">
        
        <img src=${item.image} class="card-img-top" alt="..." width="200px" height="200px">
        
          <h5 class="card-title">${item.title} </h5>
          <p class="card-text">${item.description}</p>
          <a  class="btn btn-primary">RS ${item.price} /-</a>
       
     
      </div>

        `         
     })    
}
loadProducts();
let dark_btn=document.getElementById('dark_btn');

let darkMode=false;
let body=document.getElementById('body');

dark_btn.addEventListener('click',()=>{
    
    if(darkMode){
        body.classList.remove("default");
        body.classList.add("dark-mode");

        darkMode=false;
    }else{
        body.classList.add("default");
        // body.style.backgroundColor="black";
        // body.style.color="white";
        darkMode=true
    }
   
   
});