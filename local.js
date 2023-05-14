let count_item= document.getElementById('counts')
  count_item.innerHTML=localStorage.length

function addtocart(x){

    let product_name= x.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    let product_price=x.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    // let product_image=x.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling

    const all_item=JSON.stringify([product_name,product_price])
    localStorage.setItem(product_name,all_item);

    count_item.innerHTML=localStorage.length
}