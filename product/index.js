
let products=JSON.parse(localStorage.getItem("data"))||[]
console.log("products",products);

let display=()=>{
    document.getElementById("box").innerHTML="";
    products.map((ele)=>{
        let title=document.createElement("h2")
        title.innerHTML=ele.title

        let price=document.createElement("h2")
        price.innerHTML=ele.price

        let img=document.createElement("img")
        img.src=ele.img

        let div=document.createElement("div")
        div.append(img,title,price)
        document.getElementById("box").append(div)
    })
   
}


let product = (e) => {
    e.preventDefault();

    let data = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        img: document.getElementById("img").value
    }

    products.push(data);
    console.log(products)
    localStorage.setItem("data", JSON.stringify(products));

    display()
}
display()
document.getElementById("datas").addEventListener("submit",product)