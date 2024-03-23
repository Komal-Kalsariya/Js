
let signups=JSON.parse(localStorage.getItem("datas"))||[]

const signup=(e)=>{
    e.preventDefault();

    let sign={
        user:document.getElementById("user").value,
        mail:document.getElementById("mail").value,
        pass:document.getElementById("pass").value
    }
    if((sign.mail==null || sign.mail.length==0) ||(sign.pass==null || sign.pass.length==0) ||(sign.user==null || sign.user.length==0)){
            alert("please valid")
            return
        }
        

    signups.push(sign)

    localStorage.setItem("datas",JSON.stringify(signups))
    window.location.href="/project/index.html"

}



document.getElementById("data").addEventListener("submit",signup)