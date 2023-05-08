
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{
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



    // let current_date= new Date()
    // let hours = current_date.getHours();
    // let minutes = current_date.getMinutes();
    // let seconds =current_date.getSeconds()
    // document.getElementById('time').innerHTML=`${hours}: ${minutes}: ${seconds}`;
    // console.log(current_date)

    


    document.getElementById('category').innerHTML=category1

    let brand2=data.products[1].brand
    let category2=data.products[1].category
    let title2 = data.products[1].title
    let description2=data.products[1].description
    let price2=data.products[1].price
    let discount2=data.products[1].discountPercentage
    let simage1=data.products[1].images[0]
    let simage2=data.products[1].images[1]
    let simage3=data.products[1].images[2]
    let simage4=data.products[1].images[3]
    let simage5=data.products[1].images[4]
    let srating2= data.products[1].rating
    let sstock2=data.products[1].stock





    let tbrand2=data.products[2].brand
    let tcategory2=data.products[2].category
    let ttitle2 = data.products[2].title
    let tdescription2=data.products[2].description
    let tprice2=data.products[2].price
    let tdiscount2=data.products[2].discountPercentage
    let tsimage1=data.products[2].images[0]
    let tsimage2=data.products[2].images[1]
    let tsimage3=data.products[2].images[2]
    let tsimage4=data.products[2].images[3]
    let tsimage5=data.products[2].images[4]
    let tsrating2= data.products[2].rating
    let tstock2=data.products[2].stock



    //3#############################


    let rbrand2=data.products[3].brand
    let rcategory2=data.products[3].category
    let rtitle2 = data.products[3].title
    let rdescription2=data.products[3].description
    let rprice2=data.products[3].price
    let rdiscount2=data.products[3].discountPercentage
    let rsimage1=data.products[3].images[0]
    let rsimage2=data.products[3].images[1]
    let rsimage3=data.products[3].images[2]
    let rsimage4=data.products[3].images[3]
    let rsimage5=data.products[3].images[4]
    let rsrating2= data.products[3].rating
    let rstock2=data.products[3].stock




    //#######################################



    let nbrand2=data.products[4].brand
    let ncategory2=data.products[4].category
    let ntitle2 = data.products[4].title
    let ndescription2=data.products[4].description
    let nprice2=data.products[4].price
    let ndiscount2=data.products[4].discountPercentage
    let nsimage1=data.products[4].images[0]
    let nsimage2=data.products[4].images[1]
    let nsimage3=data.products[4].images[2]
    let nsimage4=data.products[4].images[0]
    let nsimage5=data.products[4].images[1]
    let nsrating2= data.products[4].rating
    let nstock2=data.products[4].stock


    let lsimage1=data.products[5].images[0]
    let ltitle1 = data.products[5].title
    let ldescription1=data.products[5].description
    let lprice1=data.products[5].price
    let ldiscount1=data.products[5].discountPercentage
    let lrating1= data.products[5].rating

  




    let lsimage2=data.products[5].images[3]
    let ltitle2 = data.products[5].title
    let ldescription2=data.products[5].description
    let lprice2=data.products[5].price
    let ldiscount2=data.products[5].discountPercentage
    let lrating2= data.products[5].rating


    let lsimage3=data.products[7].images[3]
    let ltitle3 = data.products[7].title
    let ldescription3=data.products[7].description
    let lprice3=data.products[7].price
    let ldiscount3=data.products[7].discountPercentage
    let lrating3= data.products[7].rating



    let lsimage4=data.products[7].images[0]
    let ltitle4 = data.products[7].title
    let ldescription4=data.products[7].description
    let lprice4=data.products[7].price
    let ldiscount4=data.products[7].discountPercentage
    let lrating4= data.products[7].rating


    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&####################


    let iimage=data.products[9].images[0]
    let lititle4 = data.products[9].title
    let lidescription4=data.products[9].description
    let liprice4=data.products[9].price
    let lidiscount4=data.products[9].discountPercentage
    let lirating4= data.products[9].rating

    document.getElementById('liimage').src=iimage
    document.getElementById('lititle').innerHTML=lititle4
    document.getElementById('lidescription').innerHTML=lidescription4
    document.getElementById('lidiscount').innerHTML= "Discount=>" + lidiscount4
    document.getElementById('lirating').innerHTML= "Rating=>" + lirating4
    document.getElementById('liprice').innerHTML= "$"+liprice4

    let diimage=data.products[27].images[0]
    let dititle4 = data.products[27].title
    let didescription4=data.products[27].description
    let diprice4=data.products[27].price
    let didiscount4=data.products[27].discountPercentage
    let dirating4= data.products[27].rating


    document.getElementById('diimages').src=diimage
    document.getElementById('dititles').innerHTML=dititle4
    document.getElementById('didescriptions').innerHTML=didescription4
    document.getElementById('didiscounts').innerHTML= "Discount=>" + didiscount4
    document.getElementById('diratings').innerHTML= "Rating=>" + dirating4
    document.getElementById('diprices').innerHTML= "$"+diprice4





    let ediimage=data.products[25].images[0]
    let edititle4 = data.products[25].title
    let edidescription4=data.products[25].description
    let ediprice4=data.products[25].price
    let edidiscount4=data.products[25].discountPercentage
    let edirating4= data.products[25].rating


    document.getElementById('ediimages').src=ediimage
    document.getElementById('edititles').innerHTML=edititle4
    document.getElementById('edidescriptions').innerHTML=edidescription4
    document.getElementById('edidiscounts').innerHTML= "Discount=>" + edidiscount4
    document.getElementById('ediratings').innerHTML= "Rating=>" + edirating4
    document.getElementById('ediprices').innerHTML= "$"+ediprice4




    let fediimage=data.products[14].images[0]
    let fedititle4 = data.products[14].title
    let fedidescription4=data.products[14].description
    let fediprice4=data.products[14].price
    let fedidiscount4=data.products[14].discountPercentage
    let fedirating4= data.products[14].rating


    document.getElementById('fediimages').src=fediimage
    document.getElementById('fedititles').innerHTML=fedititle4
    document.getElementById('fedidescriptions').innerHTML=fedidescription4
    document.getElementById('fedidiscounts').innerHTML= "Discount=>" + fedidiscount4
    document.getElementById('fediratings').innerHTML= "Rating=>" + fedirating4
    document.getElementById('fediprices').innerHTML= "$"+fediprice4


///      let category3=data.products[2].category
 //   let title3 = data.products[2].title
   // let description3=data.products[2].description
//            let price3=data.products[2].price
//          let discount3=data.products[2].discountPercentage
//        let  timage1=data.products[2].images[0]
//      let  timage2=data.products[2].images[1]
//    let timage3=data.products[2].images[2]
  //  let  timage4=data.products[2].images[3]
    //let  timage5=data.products[2].images[4]
//       let brand3=data.products[2].brand
//     let trating3= data.products[2].rating
 //   let stock3=data.products[2].stock



    console.log(brand1)
    console.log(category1)
    console.log(title1)
    console.log(description1)
    console.log(price1)
    console.log(discount1)
    console.log(rating1)
    console.log(stock1)
    console.log(image1)

    document.getElementById('image1').src=image1
    document.getElementById('title').innerHTML=title1
    document.getElementById('description').innerHTML=description1
    document.getElementById('price').innerHTML= "$"+ price1
    document.getElementById('discount').innerHTML= "Discount=> "+ discount1
    document.getElementById('rating').innerHTML= "Rating=> "+ rating1
    document.getElementById('stock').innerHTML= "Stock=> "+ stock1


    //#####################################################3###

    document.getElementById('image2').src=image2
    document.getElementById('title1').innerHTML=title1
    document.getElementById('description1').innerHTML=description1
    document.getElementById('price1').innerHTML= "$"+ price1
    document.getElementById('discount1').innerHTML= "Discount=> "+ discount1
    document.getElementById('rating1').innerHTML= "Rating=> "+ rating1
    document.getElementById('stock1').innerHTML= "Stock=> "+ stock1


    //333333333333##############################################

    document.getElementById('image3').src=image3
    document.getElementById('title2').innerHTML=title1
    document.getElementById('description2').innerHTML=description1
    document.getElementById('price2').innerHTML= "$"+ price1
    document.getElementById('discount2').innerHTML= "Discount=> "+ discount1
    document.getElementById('rating2').innerHTML= "Rating=> "+ rating1
    document.getElementById('stock2').innerHTML= "Stock=> "+ stock1


   // ############################################


   document.getElementById('image4').src=image4
   document.getElementById('title3').innerHTML=title1
   document.getElementById('description3').innerHTML=description1
   document.getElementById('price3').innerHTML= "$"+ price1
   document.getElementById('discount3').innerHTML= "Discount=> "+ discount1
   document.getElementById('rating3').innerHTML= "Rating=> "+ rating1
   document.getElementById('stock3').innerHTML= "Stock=> "+ stock1

  // #########W###################################


  document.getElementById('image5').src=image5
  document.getElementById('title4').innerHTML=title1
  document.getElementById('description4').innerHTML=description1
  document.getElementById('price4').innerHTML= "$"+ price1
  document.getElementById('discount4').innerHTML= "Discount=> "+ discount1
  document.getElementById('rating4').innerHTML= "Rating=> "+ rating1
  document.getElementById('stock4').innerHTML= "Stock=> "+ stock1



  //##########################################33

  
  document.getElementById('image6').src= simage1
  document.getElementById('s1title').innerHTML=title2
  document.getElementById('s1description').innerHTML=description2
  document.getElementById('s1price').innerHTML= "$"+ price2
  document.getElementById('s1discount').innerHTML= "Discount=> "+ discount2
  document.getElementById('s1rating').innerHTML= "Rating=> "+ srating2
  document.getElementById('s1stock').innerHTML= "Stock=> "+ sstock2
  








  document.getElementById('image7').src= simage2
  document.getElementById('s2title1').innerHTML=title2
  document.getElementById('s2description1').innerHTML=description2
  document.getElementById('s2price1').innerHTML= "$"+ price2
  document.getElementById('s2discount1').innerHTML= "Discount=> "+ discount2
  document.getElementById('s2rating1').innerHTML= "Rating=> "+ srating2
  document.getElementById('s2stock1').innerHTML= "Stock=> "+ sstock2



 document.getElementById('image8').src = simage3
 document.getElementById('s3title2').innerHTML=title2
 document.getElementById('s3description2').innerHTML=description2
 document.getElementById('s3price2').innerHTML= "$"+ price2
 document.getElementById('s3discount2').innerHTML= "Discount=> "+ discount2
 document.getElementById('s3rating2').innerHTML= "Rating=> "+ srating2
 document.getElementById('s3stock2').innerHTML= "Stock=> "+ sstock2




  
  document.getElementById('image9').src= simage4
  document.getElementById('s4title3').innerHTML=title2
  document.getElementById('s4description3').innerHTML=description2
  document.getElementById('s4price3').innerHTML= "$"+ price2
  document.getElementById('s4discount3').innerHTML= "Discount=> "+ discount2
  document.getElementById('s4rating3').innerHTML= "Rating=> "+ srating2
  document.getElementById('s4stock3').innerHTML= "Stock=> "+ sstock2


  
  document.getElementById('image10').src= simage2
  document.getElementById('s5title4').innerHTML=title2
  document.getElementById('s5description4').innerHTML=description2
  document.getElementById('s5price4').innerHTML= "$"+ price2
  document.getElementById('s5discount4').innerHTML= "Discount=> "+ discount2
  document.getElementById('s5rating4').innerHTML= "Rating=> "+ srating2
  document.getElementById('s5stock4').innerHTML= "Stock=> "+ sstock2





  document.getElementById('image11').src= tsimage1
  document.getElementById('s3title').innerHTML=ttitle2
  document.getElementById('s3description').innerHTML=tdescription2
  document.getElementById('s3price').innerHTML= "$"+ tprice2
  document.getElementById('s3discount').innerHTML= "Discount=> "+ tdiscount2
  document.getElementById('s3rating').innerHTML= "Rating=> "+ tsrating2
  document.getElementById('s3stock').innerHTML= "Stock=> "+ tstock2


  document.getElementById('image12').src= rsimage1
  document.getElementById('s4title1').innerHTML=rtitle2
  document.getElementById('s4description1').innerHTML=rdescription2
  document.getElementById('s4price1').innerHTML= "$"+ rprice2
  document.getElementById('s4discount1').innerHTML= "Discount=> "+ rdiscount2
  document.getElementById('s4rating1').innerHTML= "Rating=> "+ rsrating2
  document.getElementById('s4stock1').innerHTML= "Stock=> "+ rstock2



  


  document.getElementById('image13').src= rsimage2
  document.getElementById('setitle2').innerHTML= rtitle2
  document.getElementById('sedescription2').innerHTML= rdescription2
  document.getElementById('seprice2').innerHTML= "$"+  rprice2
  document.getElementById('sediscount2').innerHTML= "Discount=> "+ rdiscount2
  document.getElementById('serating2').innerHTML= "Rating=> "+ rsrating2
  document.getElementById('sestock2').innerHTML= "Stock=> "+ rstock2


  document.getElementById('image14').src= rsimage3
  document.getElementById('s4title4').innerHTML= rtitle2
  document.getElementById('s4description4').innerHTML= rdescription2
  document.getElementById('s4price4').innerHTML= "$"+  rprice2
  document.getElementById('s4discount4').innerHTML= "Discount=> "+ rdiscount2
  document.getElementById('s4rating4').innerHTML= "Rating=> "+ rsrating2
  document.getElementById('s4stock4').innerHTML= "Stock=> "+ rstock2



  document.getElementById('image15').src= rsimage3
  document.getElementById('s5title5').innerHTML= rtitle2
  document.getElementById('s5description5').innerHTML= rdescription2
  document.getElementById('s5price5').innerHTML= "$"+  rprice2
  document.getElementById('s5discount5').innerHTML= "Discount=> "+ rdiscount2
  document.getElementById('s5rating5').innerHTML= "Rating=> "+ rsrating2
  document.getElementById('s5stock5').innerHTML= "Stock=> "+ rstock2


  document.getElementById('image16').src= nsimage1
  document.getElementById('s6title5').innerHTML= ntitle2
  document.getElementById('s6description5').innerHTML= ndescription2
  document.getElementById('s6price5').innerHTML= "$"+  nprice2
  document.getElementById('s6discount5').innerHTML= "Discount=> "+ ndiscount2
  document.getElementById('s6rating5').innerHTML= "Rating=> "+ nsrating2
  document.getElementById('s6stock5').innerHTML= "Stock=> "+ nstock2





  document.getElementById('image17').src= nsimage2
  document.getElementById('s6title1').innerHTML= ntitle2
  document.getElementById('s6description1').innerHTML= ndescription2
  document.getElementById('s6price1').innerHTML= "$"+  nprice2
  document.getElementById('s6discount1').innerHTML= "Discount=> "+ ndiscount2
  document.getElementById('s6rating1').innerHTML= "Rating=> "+ nsrating2
  document.getElementById('s6stock1').innerHTML= "Stock=> "+ nstock2





  document.getElementById('image18').src= nsimage3
  document.getElementById('s6title2').innerHTML= ntitle2
  document.getElementById('s6description2').innerHTML= ndescription2
  document.getElementById('s6price2').innerHTML= "$"+  nprice2
  document.getElementById('s6discount2').innerHTML= "Discount=> "+ ndiscount2
  document.getElementById('s6rating2').innerHTML= "Rating=> "+ nsrating2
  document.getElementById('s6stock2').innerHTML= "Stock=> "+ nstock2




  document.getElementById('image19').src= nsimage4
  document.getElementById('s6title4').innerHTML= ntitle2
  document.getElementById('s6description4').innerHTML= ndescription2
  document.getElementById('s6price4').innerHTML= "$"+  nprice2
  document.getElementById('s6discount4').innerHTML= "Discount=> "+ ndiscount2
  document.getElementById('s6rating4').innerHTML= "Rating=> "+ nsrating2
  document.getElementById('s6stock4').innerHTML= "Stock=> "+ nstock2



  document.getElementById('image20').src= nsimage5
  document.getElementById('h6title5').innerHTML= ntitle2
  document.getElementById('h6description5').innerHTML= ndescription2
  document.getElementById('h6price5').innerHTML= "$"+  nprice2
  document.getElementById('h6discount5').innerHTML= "Discount=> "+ ndiscount2
  document.getElementById('h6rating5').innerHTML= "Rating=> "+ nsrating2
  document.getElementById('h6stock5').innerHTML= "Stock=> "+ nstock2



  //######################################3
  document.getElementById('image21').src= lsimage1
  document.getElementById('ltitle1').innerHTML=ltitle1
  document.getElementById('ldescription1').innerHTML="Description" + ldescription1
  document.getElementById('lprice1').innerHTML="$" + lprice1
  document.getElementById('ldiscount1').innerHTML="Discount=>" + ldiscount1
  document.getElementById('lrating1').innerHTML="Rating:" + lrating1





  document.getElementById('image22').src= lsimage2
  document.getElementById('ltitle2').innerHTML=ltitle1
  document.getElementById('ldescription2').innerHTML="Description" + ldescription1
  document.getElementById('lprice2').innerHTML="$" + lprice1
  document.getElementById('ldiscount2').innerHTML="Discount=>" + ldiscount1
  document.getElementById('lrating2').innerHTML="Rating:" + lrating1




  document.getElementById('image23').src= lsimage3
  document.getElementById('ltitle3').innerHTML=ltitle3
  document.getElementById('ldescription3').innerHTML="Description" + ldescription3
  document.getElementById('lprice3').innerHTML="$" + lprice3
  document.getElementById('ldiscount3').innerHTML="Discount=>" + ldiscount3
  document.getElementById('lrating3').innerHTML="Rating:" + lrating3




  document.getElementById('image24').src= lsimage4
  document.getElementById('ltitle4').innerHTML=ltitle4
  document.getElementById('ldescription4').innerHTML="Description" + ldescription4
  document.getElementById('lprice4').innerHTML="$" + lprice4
  document.getElementById('ldiscount4').innerHTML="Discount=>" + ldiscount4
  document.getElementById('lrating4').innerHTML="Rating:" + lrating4









  



  console.log(simage3)     

});




