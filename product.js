fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{
    // console.log(data)
    console.log(data)
    let brand1=data.products[0].brand
    let category1=data.products[0].category
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

    console.log(brand1)

    document.getElementById("category").innerHTML=category1

    document.getElementById("pbrand").innerHTML= "Brand :" + brand1
    document.getElementById("pbrand1").innerHTML= "Brand :" + brand1
    document.getElementById("pbrand2").innerHTML= "Brand :" + brand1
    document.getElementById("pbrand3").innerHTML= "Brand :" + brand1
    document.getElementById("pbrand4").innerHTML= "Brand :" + brand1


    document.getElementById("pimage1").src=image1
    document.getElementById("pimage2").src=image2
    document.getElementById("pimage3").src=image3
    document.getElementById("pimage4").src=image4
    document.getElementById("pimage5").src=image5



    document.getElementById("ptitle").innerHTML=title1
    document.getElementById("ptitle1").innerHTML=title1
    document.getElementById("ptitle2").innerHTML=title1
    document.getElementById("ptitle3").innerHTML=title1
    document.getElementById("ptitle4").innerHTML=title1


    document.getElementById("pdescription").innerHTML=description1
    document.getElementById("pdescription1").innerHTML=description1
    document.getElementById("pdescription2").innerHTML=description1
    document.getElementById("pdescription3").innerHTML=description1
    document.getElementById("pdescription4").innerHTML=description1



    document.getElementById("pprice").innerHTML="$ " + price1
    document.getElementById("pprice1").innerHTML="$ " + price1
    document.getElementById("pprice2").innerHTML="$ " + price1
    document.getElementById("pprice3").innerHTML="$ " + price1
    document.getElementById("pprice4").innerHTML="$ " + price1


    document.getElementById("pdiscount").innerHTML= "Discount =>" + discount1
    document.getElementById("pdiscount1").innerHTML= "Discount =>" + discount1
    document.getElementById("pdiscount2").innerHTML= "Discount =>" + discount1
    document.getElementById("pdiscount3").innerHTML= "Discount =>" + discount1
    document.getElementById("pdiscount4").innerHTML= "Discount =>" + discount1



    document.getElementById("prating").innerHTML="Rating =>" + rating1
    document.getElementById("prating1").innerHTML="Rating =>" + rating1
    document.getElementById("prating2").innerHTML="Rating =>" + rating1
    document.getElementById("prating3").innerHTML="Rating =>" + rating1
    document.getElementById("prating4").innerHTML="Rating =>" + rating1


    document.getElementById("pstock").innerHTML="Stock=>" + stock1
    document.getElementById("pstock1").innerHTML="Stock=>" + stock1
    document.getElementById("pstock2").innerHTML="Stock=>" + stock1
    document.getElementById("pstock3").innerHTML="Stock=>" + stock1
    document.getElementById("pstock4").innerHTML="Stock=>" + stock1




    let brand2=data.products[24].brand
    let category2=data.products[24].category
    let title2 = data.products[24].title
    let description2=data.products[24].description
    let price2=data.products[24].price
    let discount2=data.products[24].discountPercentage
    let gimage1=data.products[24].images[0]
    let gimage2=data.products[24].images[1]
    let gimage3=data.products[24].images[2]
    let gimage4=data.products[24].images[3]
    let gimage5=data.products[24].images[4]
    let rating2= data.products[24].rating
    let stock2=data.products[24].stock


    document.getElementById("category1").innerHTML= category2

    document.getElementById("gbrand").innerHTML="Brand : " +  brand2
    document.getElementById("gbrand1").innerHTML="Brand : " +  brand2
    document.getElementById("gbrand2").innerHTML="Brand : " +  brand2
    document.getElementById("gbrand3").innerHTML="Brand : " +  brand2
    document.getElementById("gbrand4").innerHTML="Brand : " +  brand2

    document.getElementById("gtitle").innerHTML=title2
    document.getElementById("gtitle1").innerHTML=title2
    document.getElementById("gtitle2").innerHTML=title2
    document.getElementById("gtitle3").innerHTML=title2
    document.getElementById("gtitle4").innerHTML=title2


    document.getElementById("gdescription").innerHTML=description2
    document.getElementById("gdescription1").innerHTML=description2
    document.getElementById("gdescription2").innerHTML=description2
    document.getElementById("gdescription3").innerHTML=description2
    document.getElementById("gdescription4").innerHTML=description2


    document.getElementById("gdiscount").innerHTML= "Discount =>" + discount2
    document.getElementById("gdiscount1").innerHTML= "Discount =>" + discount2
    document.getElementById("gdiscount2").innerHTML= "Discount =>" + discount2
    document.getElementById("gdiscount3").innerHTML= "Discount =>" + discount2
    document.getElementById("gdiscount4").innerHTML= "Discount =>" + discount2


    document.getElementById("gprice").innerHTML="$ " + price2
    document.getElementById("gprice1").innerHTML="$ " + price2
    document.getElementById("gprice2").innerHTML="$ " + price2
    document.getElementById("gprice3").innerHTML="$ " + price2
    document.getElementById("gprice4").innerHTML="$ " + price2


    document.getElementById("grating").innerHTML="Rating => " + rating2
    document.getElementById("grating1").innerHTML="Rating => " + rating2
    document.getElementById("grating2").innerHTML="Rating => " + rating2
    document.getElementById("grating3").innerHTML="Rating => " + rating2
    document.getElementById("grating4").innerHTML="Rating => " + rating2



    document.getElementById("gstock").innerHTML="Stock => " + stock2
    document.getElementById("gstock1").innerHTML="Stock => " + stock2
    document.getElementById("gstock2").innerHTML="Stock => " + stock2
    document.getElementById("gstock3").innerHTML="Stock => " + stock2
    document.getElementById("gstock4").innerHTML="Stock => " + stock2

    document.getElementById("gimage1").src=gimage1
    document.getElementById("gimage2").src=gimage2
    document.getElementById("gimage3").src=gimage3
    document.getElementById("gimage4").src=gimage4
    document.getElementById("gimage5").src=gimage5



    let brand3=data.products[18].brand
    let category3=data.products[18].category
    let title3 = data.products[18].title
    let description3=data.products[18].description
    let price3=data.products[18].price
    let discount3=data.products[18].discountPercentage
    let simage1=data.products[18].images[0]
    let simage2=data.products[18].images[1]
    let simage3=data.products[18].images[2]
    let simage4=data.products[18].images[3]
    let rating3= data.products[18].rating
    let stock3=data.products[18].stock


    document.getElementById("category2").innerHTML=category3

    document.getElementById("sbrand").innerHTML="Brand: " + brand3
    document.getElementById("sbrand1").innerHTML="Brand: " + brand3
    document.getElementById("sbrand2").innerHTML="Brand: " + brand3
    document.getElementById("sbrand3").innerHTML="Brand: " + brand3
    document.getElementById("sbrand4").innerHTML="Brand: " + brand3



    document.getElementById("stitle").innerHTML=title3
    document.getElementById("stitle1").innerHTML=title3
    document.getElementById("stitle2").innerHTML=title3
    document.getElementById("stitle3").innerHTML=title3
    document.getElementById("stitle4").innerHTML=title3



    document.getElementById("sdescription").innerHTML=description3
    document.getElementById("sdescription1").innerHTML=description3
    document.getElementById("sdescription2").innerHTML=description3
    document.getElementById("sdescription3").innerHTML=description3
    document.getElementById("sdescription4").innerHTML=description3


    document.getElementById("sdiscount").innerHTML= "Discount =>" + discount3
    document.getElementById("sdiscount1").innerHTML= "Discount =>" + discount3
    document.getElementById("sdiscount2").innerHTML= "Discount =>" + discount3
    document.getElementById("sdiscount3").innerHTML= "Discount =>" + discount3
    document.getElementById("sdiscount4").innerHTML= "Discount =>" + discount3


    document.getElementById("srating").innerHTML="Rating => " + rating3
    document.getElementById("srating1").innerHTML="Rating => " + rating3
    document.getElementById("srating2").innerHTML="Rating => " + rating3
    document.getElementById("srating3").innerHTML="Rating => " + rating3
    document.getElementById("srating4").innerHTML="Rating => " + rating3




    document.getElementById("sstock").innerHTML="Stock => " + stock3
    document.getElementById("sstock1").innerHTML="Stock => " + stock3
    document.getElementById("sstock2").innerHTML="Stock => " + stock3
    document.getElementById("sstock3").innerHTML="Stock => " + stock3
    document.getElementById("sstock4").innerHTML="Stock => " + stock3




    document.getElementById("sprice").innerHTML="$ " + price3
    document.getElementById("sprice1").innerHTML="$ " + price3
    document.getElementById("sprice2").innerHTML="$ " + price3
    document.getElementById("sprice3").innerHTML="$ " + price3
    document.getElementById("sprice4").innerHTML="$ " + price3


    document.getElementById("simage1").src=simage1
    document.getElementById("simage2").src=simage2
    document.getElementById("simage3").src=simage3
    document.getElementById("simage4").src=simage4
    document.getElementById("simage5").src=simage2




    let brand4=data.products[5].brand
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

    document.getElementById("category3").innerHTML=category4

    document.getElementById("lbrand").innerHTML="Brand: " + brand4
    document.getElementById("lbrand1").innerHTML="Brand: " + brand4
    document.getElementById("lbrand2").innerHTML="Brand: " + brand4
    document.getElementById("lbrand3").innerHTML="Brand: " + brand4
    document.getElementById("lbrand4").innerHTML="Brand: " + brand4



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


    document.getElementById("lprice").innerHTML="$ " + price4
    document.getElementById("lprice1").innerHTML="$ " + price4
    document.getElementById("lprice2").innerHTML="$ " + price4
    document.getElementById("lprice3").innerHTML="$ " + price4
    document.getElementById("lprice4").innerHTML="$ " + price4


    document.getElementById("limage1").src=limage1
    document.getElementById("limage2").src=limage2
    document.getElementById("limage3").src=limage3
    document.getElementById("limage4").src=limage4
    document.getElementById("limage5").src=limage3









});
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