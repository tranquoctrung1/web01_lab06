var flag = false;

document.addEventListener("DOMContentLoaded", function(event){ 
    //define variables 
    var usernmame = document.getElementById('username');
    var password = document.getElementById('password');
    var rePassword = document.getElementById('rePassword');
    var email = document.getElementById('email');
    var answer  =document.getElementById('answer');
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var confirming_image = document.getElementById('confirming-image');
    
    //define function to check input with id
    usernmame.addEventListener('blur', () => 
    {
        if(usernmame.value === "")
        {
            document.getElementById('error_username').innerHTML = "Tên đăng nhập không được trống";
            usernmame.classList.add('error');
        }
        else if(usernmame.value === "liila_85vn")
        {
            document.getElementById('error_username').innerHTML = "Tên đăng nhập đã tồn tại";
            usernmame.classList.add('error');
        }
        else
        {
            document.getElementById('error_username').innerHTML = "";
            usernmame.classList.remove('error');
            flag = true;
        }
    })

    password.addEventListener('blur', () => 
    {
        if(password.value === "")
        {
            document.getElementById('error_password').innerHTML = "Mật khẩu không được để trống";
            password.classList.add('error');
        }
        else
        {
            document.getElementById('error_password').innerHTML = "";
            password.classList.remove('error');
            flag = true;
        }
    })

    rePassword.addEventListener('blur', () => 
    {
        if(rePassword.value === "")
        {
            document.getElementById('error_rePassword').innerHTML = "Nhập lại mật khẩu không trống";
            rePassword.classList.add('error');
        }
        else if(rePassword.value !== password.value)
        {
            document.getElementById('error_rePassword').innerHTML = "Mật khẩu không trùng";
            rePassword.classList.add('error');
        }
        else
        {
            document.getElementById('error_rePassword').innerHTML = "";
            rePassword.classList.remove('error');
            flag = true;
        }
    })

    email.addEventListener('blur', () => 
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(email.value === "")
        {
            document.getElementById('error_email').innerHTML = "Email không được để trống";
            email.classList.add('error');
        }
        else if(!email.value.match(mailformat))
        {
            document.getElementById('error_email').innerHTML = "Email không hợp lệ";
            email.classList.add('error');
        }
        else
        {
            document.getElementById('error_email').innerHTML = "";
            email.classList.remove('error');
            flag = true;
        }
    })

    answer.addEventListener('blur', () => 
    {
        if(answer.value === "")
        {
            document.getElementById('error_answer').innerHTML = "Câu trả lời không được để trống";
            answer.classList.add('error');
        }
        else
        {
            document.getElementById('error_answer').innerHTML = "";
            answer.classList.remove('error');
            flag = true;
        }
    })

    firstName.addEventListener('blur', () => 
    {
        if(firstName.value === "")
        {
            document.getElementById('error_first-name').innerHTML = "Họ tên không được để trống";
            firstName.classList.add('error');
        }
        else
        {
            document.getElementById('error_first-name').innerHTML = "";
            firstName.classList.remove('error');
            flag = true;
        }
    })

    lastName.addEventListener('blur', () => 
    {
        if(lastName.value === "")
        {
            document.getElementById('error_last-name').innerHTML = "Họ tên không được để trống";
            lastName.classList.add('error');
        }
        else
        {
            document.getElementById('error_last-name').innerHTML = "";
            lastName.classList.remove('error');
            flag = true;
        }
    })

    confirming_image.addEventListener('blur', () => 
    {
        if(confirming_image.value.toLowerCase().trim() !== "cajve")
        {
            document.getElementById('error_conforming-image').innerHTML = "Không trùng với ảnh xác nhận";
            confirming_image.classList.add('error');
        }
        else
        {
            document.getElementById('error_conforming-image').innerHTML = "";
            confirming_image.classList.remove('error');
            flag = true
        }
    }) 
});

// define function to check checkbox
function check ()
{
    if(checkBox.checked == true)
    {
        flag = true;
    }
}

// define fucntion to check submit for form 
function onSubmit () { 
    return flag
}