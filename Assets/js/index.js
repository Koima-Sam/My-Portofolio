let submitBtn = document.getElementById("Send");
let fname = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
submitBtn.addEventListener("click", function(){
    if(fname.value ===""){
        alert("name is required")
        fname.focus();
    }
    else if (phone.value===""){
        alert("phone is required");
        phone.focus();
    }
    else if(email.value ===""){
        alert("Email is required");
        email.focus();
    }
    else if(subject===""){
        alert("Subject are is empty")
    }
    else{
        alert("Message sent successfully")
        fname.value = "";
        email.value = "";
        phone.value = "";

    }
})