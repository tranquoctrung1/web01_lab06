function CheckSubmit()
{
    var username = document.getElementById("txtUserName");
    if(username.value == "")
    {
        alert("Yêu cầu nhập tên đăng nhập!");
        username.focus();
        return false;
    }

    var password = document.getElementById("txtPassword");
    if(password.value == "")
    {
        alert("Yêu cầu nhập mật khẩu đăng nhập!");
        password.focus();
        return false;
    }

    return false;
}