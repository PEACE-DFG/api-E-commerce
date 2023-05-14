fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{
    console.log(data)
    let brand=data.products[10].brand
    let category=data.products[10].category
    let title = data.products[10].title
    let description=data.products[10].description
    let price=data.products[10].price
    let discount=data.products[10].discountPercentage
    let image1=data.products[10].images[0]
    let rating= data.products[10].rating
    let stock=data.products[10].stock


    document.getElementById('image1').src=image1
    document.getElementById('brand').innerHTML="Brand : " + brand
    document.getElementById('description').innerHTML="Description: " + description
    document.getElementById('price').innerHTML="$" + price
    document.getElementById('title').innerHTML=title
    document.getElementById('discount').innerHTML="Discount: " + discount
    document.getElementById('rating').innerHTML="Rating: " + rating
    document.getElementById('stock').innerHTML="Stock: " + stock


    let brand2=data.products[11].brand
    let category2=data.products[11].category
    let title2 = data.products[11].title
    let description2=data.products[11].description
    let price2=data.products[11].price
    let discount2=data.products[11].discountPercentage
    let image2=data.products[11].images[0]
    let rating2= data.products[11].rating
    let stock2=data.products[11].stock

    document.getElementById('image2').src=image2
    document.getElementById('brand2').innerHTML="Brand : " + brand2
    document.getElementById('description2').innerHTML="Description: " + description2
    document.getElementById('price2').innerHTML="$" + price2
    document.getElementById('title2').innerHTML=title2
    document.getElementById('discount2').innerHTML="Discount: " + discount2
    document.getElementById('rating2').innerHTML="Rating: " + rating2
    document.getElementById('stock2').innerHTML="Stock: " + stock2
   
    

    let brand3=data.products[12].brand
    let category3=data.products[12].category
    let title3 = data.products[12].title
    let description3=data.products[12].description
    let price3=data.products[12].price
    let discount3=data.products[12].discountPercentage
    let image3=data.products[12].images[0]
    let rating3= data.products[12].rating
    let stock3=data.products[12].stock

    document.getElementById('image3').src=image3
    document.getElementById('brand3').innerHTML="Brand : " + brand3
    document.getElementById('description3').innerHTML="Description: " + description3
    document.getElementById('price3').innerHTML="$" + price3
    document.getElementById('title3').innerHTML=title3
    document.getElementById('discount3').innerHTML="Discount: " + discount3
    document.getElementById('rating3').innerHTML="Rating: " + rating3
    document.getElementById('stock3').innerHTML="Stock: " + stock3
   

    let brand4=data.products[18].brand
    let category4=data.products[18].category
    let title4 = data.products[18].title
    let description4=data.products[18].description
    let price4=data.products[18].price
    let discount4=data.products[18].discountPercentage
    let image4=data.products[18].images[0]
    let rating4= data.products[18].rating
    let stock4=data.products[18].stock

    document.getElementById('image4').src=image4
    document.getElementById('brand4').innerHTML="Brand : " + brand4
    document.getElementById('description4').innerHTML="Description: " + description4
    document.getElementById('price4').innerHTML="$" + price4
    document.getElementById('title4').innerHTML=title4
    document.getElementById('discount4').innerHTML="Discount: " + discount4
    document.getElementById('rating4').innerHTML="Rating: " + rating4
    document.getElementById('stock4').innerHTML="Stock: " + stock4



    let brand5=data.products[15].brand
    let category5=data.products[15].category
    let title5 = data.products[15].title
    let description5=data.products[15].description
    let price5=data.products[15].price
    let discount5=data.products[15].discountPercentage
    let image5=data.products[15].images[0]
    let rating5= data.products[15].rating
    let stock5=data.products[15].stock

    document.getElementById('image5').src=image5
    document.getElementById('brand5').innerHTML="Brand : " + brand5
    document.getElementById('description5').innerHTML="Description: " + description5
    document.getElementById('price5').innerHTML= "$" + price5
    document.getElementById('title5').innerHTML=title5
    document.getElementById('discount2').innerHTML="Discount: " + discount5
    document.getElementById('rating5').innerHTML="Rating: " + rating5
    document.getElementById('stock5').innerHTML="Stock: " + stock5
   
   

});
let count_item= document.getElementById('counts')
count_item.innerHTML=localStorage.length

function addtocart(x){

    let product_name= x.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    let product_price=x.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    let product_image=x.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src
    const all_item=JSON.stringify([product_name,product_image,product_price])
    localStorage.setItem(product_name,all_item);

    count_item.innerHTML=localStorage.length

}
