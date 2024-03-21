
let ui=(data)=>{

    data.map((ele)=>{

        let id=document.createElement("p")
        id.innerHTML=ele.id
        
        
        let title=document.createElement("p")
        title.innerHTML=ele.title

        let price=document.createElement("p")
        price.innerHTML=ele.price

       

        let thumbnail=document.createElement("img")
        thumbnail.src=ele.thumbnail

       

        let div=document.createElement("div")
        div.append(title,thumbnail,`price:`,price)
        div.setAttribute("class","boxe")
        id.setAttribute("class","id")
        title.setAttribute("class","title")
        price.setAttribute("class","Price")
        thumbnail.setAttribute("class","thumbnail")
        document.getElementById("box1").append(div)

    })
}


fetch("https://dummyjson.com/products")
.then((responce)=>responce.json())
.then((data)=>ui(data.products))