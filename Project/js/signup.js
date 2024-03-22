
let signups=JSON.parse(localStorage.getItem("datas"))||[]

const signup=(e)=>{
    e.preventDefault();

    let sign={
        user:document.getElementById("user").value,
        mail:document.getElementById("mail").value,
        pass:document.getElementById("pass").value
    }
      let usermail=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

     if(!(usermail.test(mail))){
       alert("please enetr valid Email Address");
         return
       }

    signups.push(sign)
    console.log(signups)
    localStorage.setItem("datas",JSON.stringify(signups))


}



document.getElementById("data").addEventListener("submit",signup)