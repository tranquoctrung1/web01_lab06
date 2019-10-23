function ChangeLanguage()
{
    var lang = document.getElementById("cmdLanguage");

    switch(lang.value) 
    {
        case "Tiếng Anh":
            document.getElementById("idHeader").innerHTML = "Login Form";
            document.getElementById("idUserName").innerHTML= "User Name:";
            document.getElementById("idPassword").innerHTML = "Password:";
            document.getElementById("idLanguage").innerHTML = "Language";
            document.getElementById("idEng").innerHTML = "English";
            document.getElementById("idVN").innerHTML = "Vietnamese";
            document.getElementById("btnSubmit").value= "Login";
            document.getElementById("btnClose").value= "Close";
            break;
        case "Vietnamese":
            document.getElementById("idHeader").innerHTML = "Khung Đăng Nhập";
            document.getElementById("idUserName").innerHTML= "Tên đăng nhập:";
            document.getElementById("idPassword").innerHTML = "Mật khẩu:";
            document.getElementById("idLanguage").innerHTML = "Ngôn ngữ";
            document.getElementById("idEng").innerHTML = "Tiếng Anh";
            document.getElementById("idVN").innerHTML = "Tiếng Việt";
            document.getElementById("btnSubmit").value = "Đăng Nhập";
            document.getElementById("btnClose").value = "Đóng";
            break;
    }
}