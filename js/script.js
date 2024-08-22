const fetchData=document.querySelectorAll(".fetchData");
const displayOutput=document.querySelector("#displayOutput");

//On displaying on UI
function displayDataOnUI(data){ 
  console.log(data[0]); 
  for(let i=0;i<9;i++){
    let div=document.createElement('div');
     div.innerText=data[i].title || data[i].name;
     displayOutput.append(div);
  }
}

//alert box using sweetalert
function displayAlertBoxOnUI(){
Swal.fire({
    title: "!!Opps,Wrong EndPoint",   
    icon: "error",
    confirmButtonText:"Retry"
  }).then((result)=>{
    console.log(result);
    if(result.isConfirmed){
      fetchDataFromAPI();
    }
  });  
}

//picking random index and fetching data
async function fetchDataFromAPI(){
  displayOutput.innerText="";
  const apis=["https://jsonplaceholder.typicode.com/users","abc","https://jsonplaceholder.typicode.com/posts"];
  let index=Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  let result= await fetch(apis[index]);
  if(result.status>400){
    displayAlertBoxOnUI();
  }
  else{
    displayDataOnUI(await result.json());
  }
}

//adding eventListeners to the button
fetchData.forEach((el)=>{
    el.addEventListener('click',()=>{
      console.log("Button clicked");
        fetchDataFromAPI();
    })
})




