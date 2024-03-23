let logins=JSON.parse(localStorage.getItem("datas"))||[]
const login=(e)=>{
    e.preventDefault();
    

    let mails=document.getElementById("mails").value
    let passd=document.getElementById("pwd").value
    let data={
        mails:mails,
        passd:passd,
    }

    logins.map((ele)=>{
        if(ele.mail==mails && ele.pass==passd){
            document.getElementById("error1").innerHTML="login successfull...."
            window.location.href="/Project/index.html"
        }
        else{
            document.getElementById("error").innerHTML="login fail!!"
            return
        }
    })


    logins.push(data)

localStorage.setItem("datas",JSON.stringify(logins))

}
document.getElementById("data").addEventListener("submit",login)