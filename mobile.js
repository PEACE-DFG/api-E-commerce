
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{
    console.log(data)
    // let brand1=data.products[0].brand
    // let category1=data.products[0].category
    let title1 = data.products[0].title
    let description1=data.products[0].description
    let price1=data.products[0].price
    let discount1=data.products[0].discountPercentage
    let image1=data.products[0].images[0]
    let image2=data.products[0].images[1]
    let image3=data.products[0].images[2]
    let image4=data.products[0].images[3]
    let image5=data.products[0].images[4]
    let rating1= data.products[0].rating
    let stock1=data.products[0].stock



    document.getElementById('image1').src=image1
    document.getElementById('title').innerHTML=title1
    document.getElementById('description').innerHTML=description1
    document.getElementById('price').innerHTML= ""+ price1
    document.getElementById('discount').innerHTML= "Discount=> "+ discount1
    document.getElementById('rating').innerHTML= "Rating=> "+ rating1
    document.getElementById('stock').innerHTML= "Stock=> "+ stock1


    //#####################################################3###

    document.getElementById('image2').src=image2
    document.getElementById('title1').innerHTML=title1
    document.getElementById('description1').innerHTML=description1
    document.getElementById('price1').innerHTML= ""+ price1
    document.getElementById('discount1').innerHTML= "Discount=> "+ discount1
    document.getElementById('rating1').innerHTML= "Rating=> "+ rating1
    document.getElementById('stock1').innerHTML= "Stock=> "+ stock1


    //333333333333##############################################

    document.getElementById('image3').src=image3
    document.getElementById('title2').innerHTML=title1
    document.getElementById('description2').innerHTML=description1
    document.getElementById('price2').innerHTML= ""+ price1
    document.getElementById('discount2').innerHTML= "Discount=> "+ discount1
    document.getElementById('rating2').innerHTML= "Rating=> "+ rating1
    document.getElementById('stock2').innerHTML= "Stock=> "+ stock1


   // ############################################


   document.getElementById('image4').src=image4
   document.getElementById('title3').innerHTML=title1
   document.getElementById('description3').innerHTML=description1
   document.getElementById('price3').innerHTML= ""+ price1
   document.getElementById('discount3').innerHTML= "Discount=> "+ discount1
   document.getElementById('rating3').innerHTML= "Rating=> "+ rating1
   document.getElementById('stock3').innerHTML= "Stock=> "+ stock1

  // #########W###################################


  document.getElementById('image5').src=image5
  document.getElementById('title4').innerHTML=title1
  document.getElementById('description4').innerHTML=description1
  document.getElementById('price4').innerHTML= ""+ price1
  document.getElementById('discount4').innerHTML= "Discount=> "+ discount1
  document.getElementById('rating4').innerHTML= "Rating=> "+ rating1
  document.getElementById('stock4').innerHTML= "Stock=> "+ stock1





  //let brand2=data.products[1].brand
  //let category2=data.products[1].category
  let title2 = data.products[1].title
  let description2=data.products[1].description
  let price2=data.products[1].price
  let discount2=data.products[1].discountPercentage
  let simage1=data.products[1].images[0]
  let simage2=data.products[1].images[1]
  let simage3=data.products[1].images[2]
  let simage4=data.products[1].images[3]
  //let simage5=data.products[1].images[4]
  let srating2= data.products[1].rating
  let sstock2=data.products[1].stock






  
  document.getElementById('image6').src= simage1
  document.getElementById('s1title').innerHTML=title2
  document.getElementById('s1description').innerHTML=description2
  document.getElementById('s1price').innerHTML= ""+ price2
  document.getElementById('s1discount').innerHTML= "Discount=> "+ discount2
  document.getElementById('s1rating').innerHTML= "Rating=> "+ srating2
  document.getElementById('s1stock').innerHTML= "Stock=> "+ sstock2
  








  document.getElementById('image7').src= simage2
  document.getElementById('s2title1').innerHTML=title2
  document.getElementById('s2description1').innerHTML=description2
  document.getElementById('s2price1').innerHTML= ""+ price2
  document.getElementById('s2discount1').innerHTML= "Discount=> "+ discount2
  document.getElementById('s2rating1').innerHTML= "Rating=> "+ srating2
  document.getElementById('s2stock1').innerHTML= "Stock=> "+ sstock2



 document.getElementById('image8').src = simage3
 document.getElementById('s3title2').innerHTML=title2
 document.getElementById('s3description2').innerHTML=description2
 document.getElementById('s3price2').innerHTML= ""+ price2
 document.getElementById('s3discount2').innerHTML= "Discount=> "+ discount2
 document.getElementById('s3rating2').innerHTML= "Rating=> "+ srating2
 document.getElementById('s3stock2').innerHTML= "Stock=> "+ sstock2




  
  document.getElementById('image9').src= simage4
  document.getElementById('s4title3').innerHTML=title2
  document.getElementById('s4description3').innerHTML=description2
  document.getElementById('s4price3').innerHTML= ""+ price2
  document.getElementById('s4discount3').innerHTML= "Discount=> "+ discount2
  document.getElementById('s4rating3').innerHTML= "Rating=> "+ srating2
  document.getElementById('s4stock3').innerHTML= "Stock=> "+ sstock2


  
  document.getElementById('image10').src= simage2
  document.getElementById('s5title4').innerHTML=title2
  document.getElementById('s5description4').innerHTML=description2
  document.getElementById('s5price4').innerHTML= ""+ price2
  document.getElementById('s5discount4').innerHTML= "Discount=> "+ discount2
  document.getElementById('s5rating4').innerHTML= "Rating=> "+ srating2
  document.getElementById('s5stock4').innerHTML= "Stock=> "+ sstock2









  // let brand4=data.products[5].brand
  let category4=data.products[5].category
  let title4 = data.products[5].title
  let description4=data.products[5].description
  let price4=data.products[5].price
  let discount4=data.products[5].discountPercentage
  let limage1=data.products[5].images[0]
  let limage2=data.products[5].images[1]
  let limage3=data.products[5].images[2]
  let limage4=data.products[5].images[3]
  let rating4= data.products[5].rating
  let stock4=data.products[5].stock

  //document.getElementById("category3").innerHTML=category4

  // document.getElementById("lbrand").innerHTML="Brand: " + brand4
  // document.getElementById("lbrand1").innerHTML="Brand: " + brand4
  // document.getElementById("lbrand2").innerHTML="Brand: " + brand4
  // document.getElementById("lbrand3").innerHTML="Brand: " + brand4
  // document.getElementById("lbrand4").innerHTML="Brand: " + brand4



  document.getElementById("ltitle").innerHTML=title4
  document.getElementById("ltitle1").innerHTML=title4
  document.getElementById("ltitle2").innerHTML=title4
  document.getElementById("ltitle3").innerHTML=title4
  document.getElementById("ltitle4").innerHTML=title4


  document.getElementById("ldescription").innerHTML=description4
  document.getElementById("ldescription1").innerHTML=description4
  document.getElementById("ldescription2").innerHTML=description4
  document.getElementById("ldescription3").innerHTML=description4
  document.getElementById("ldescription4").innerHTML=description4



  document.getElementById("ldiscount").innerHTML= "Discount =>" + discount4
  document.getElementById("ldiscount1").innerHTML= "Discount =>" + discount4
  document.getElementById("ldiscount2").innerHTML= "Discount =>" + discount4
  document.getElementById("ldiscount3").innerHTML= "Discount =>" + discount4
  document.getElementById("ldiscount4").innerHTML= "Discount =>" + discount4


  document.getElementById("lrating").innerHTML="Rating => " + rating4
  document.getElementById("lrating1").innerHTML="Rating => " + rating4
  document.getElementById("lrating2").innerHTML="Rating => " + rating4
  document.getElementById("lrating3").innerHTML="Rating => " + rating4
  document.getElementById("lrating4").innerHTML="Rating => " + rating4


  
  document.getElementById("lstock").innerHTML="Stock => " + stock4
  document.getElementById("lstock1").innerHTML="Stock => " + stock4
  document.getElementById("lstock2").innerHTML="Stock => " + stock4
  document.getElementById("lstock3").innerHTML="Stock => " + stock4
  document.getElementById("lstock4").innerHTML="Stock => " + stock4


  document.getElementById("lprice").innerHTML=" " + price4
  document.getElementById("lprice1").innerHTML=" " + price4
  document.getElementById("lprice2").innerHTML=" " + price4
  document.getElementById("lprice3").innerHTML=" " + price4
  document.getElementById("lprice4").innerHTML=" " + price4


  document.getElementById("limage1").src=limage1
  document.getElementById("limage2").src=limage2
  document.getElementById("limage3").src=limage3
  document.getElementById("limage4").src=limage4
  document.getElementById("limage5").src=limage3





})
let count_item= document.getElementById('counts')
count_item.innerHTML=localStorage.length
function addtocart(x){
  let product_name= x.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  let product_price=x.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  let product_image=x.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src

  const all_item=JSON.stringify([product_name,product_image,product_price])
  localStorage.setItem(product_name,all_item);
  count_item.innerHTML=localStorage.length


}
