
let products=JSON.parse(localStorage.getItem("product"))||[]

let deleteproduct=(i)=>{
    products.splice(i,1)
    display()
    localStorage.setItem("product",JSON.stringify(products))
}

let display=()=>{
    document.getElementById("box").innerHTML=""
    products.map((ele,i)=>{

        let title=document.createElement("h2")
        title.innerHTML=ele.title
        let img=document.createElement("img")
        img.src=ele.img
        let price=document.createElement("price")
        price.innerHTML="Price:"+ele.price
        let btn=document.createElement("button")
        btn.innerHTML="Delete"

        btn.addEventListener("click",()=>deleteproduct(i))

        let div=document.createElement("div")
        div.append(title,img,price,btn)
        div.setAttribute("class","box1")
        title.setAttribute("class","title")
        img.setAttribute("class","imag")
        price.setAttribute("class","price")
        btn.setAttribute("class","btn  btn-success m-3")
        document.getElementById("box").append(div)



    })

}

display()
