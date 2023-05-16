let all_total = document.getElementById('tot')

const amounts =[];

for(let i=0;i<localStorage.length;i++){
    let product_key = localStorage.key(i);
    let product_get = localStorage.getItem(product_key)
    let all_product = JSON.parse(product_get)
    let num = document.getElementById('num')
    let totalss = document.getElementById('totalss')


    let product=`
    <div class="flex">
    <div>
    <img src="${all_product[1]}" class="card-img-top img-fluid w-50" alt="...">
    </div>
    <div>
      <h5 class="card-title">${all_product[0]}</h5>
      <p class="card-text"> ${all_product[2]}</p>
      Quantity:
    <input type ="number" onchange="change_num(this)" onkeyup="change_num(this)" id="num" value ="1">
    <span id="totalss">${all_product[2]}</span>
    <span><button class ="btn btn-danger" onclick="delete_product(this)">Remove</button></span>
    
    </div> 
  
    </div>   
    `
    all_total.innerHTML += product
    amounts.push(Number(all_product[2].slice(1)));


}
 
function change_num(y) {
  y.nextElementSibling.innerHTML ="#"+ y.value * y.previousElementSibling.innerHTML.slice(1)
} 
// console.log(totalss.length)
console.log(amounts)
function delete_product(d){
  localStorage.removeItem(d.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML)
  d.parentNode.parentNode.parentNode.parentNode.remove()
  document.getElementById("alert").innerHTML="You Have Successfully Removed An item from the cart, Please RE-load the page to make changes"
  // window.alert(" ")

}


function reduce_all(prevNum,currNum) {
  return prevNum + currNum;
}

