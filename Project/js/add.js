
let products=JSON.parse(localStorage.getItem("product"))||[]

const product=(e)=>{
    e.preventDefault();

    let data={

        title:document.getElementById("title").value,
        img:document.getElementById("img").value,
        price:document.getElementById("price").value
    }

    if(title.length<2){
        document.getElementById("error").innerHTML="Please enetr must be grether then two letter"
        return
    }
    if(price<0){
        alert("please enter valid price")
        return
    }
   
    products.push(data)
    console.log(products)
    localStorage.setItem("product",JSON.stringify(products));

  
    window.location.href="/project/index.html"

   

}


document.getElementById("data").addEventListener("submit",product)