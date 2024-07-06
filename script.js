function validate()
{
    var uname = document.getElementById('uname').value;
    var pwd = document.getElementById('pwd').value;
    var errorElement = document.getElementById('error-msg');

    if (uname.trim() === "")
    {
        errorElement.innerHTML = "User Name cannot be empty.";
        document.getElementById('uname').focus();
    }

    else if (pwd.trim() === "")
    {
        errorElement.innerHTML = "Password cannot be empty.";
        document.getElementById('pwd').focus();
    }

    else if (uname === "REVA" && pwd === "University@12345")
    {
        errorElement.innerHTML = "Login Successful.";
        errorElement.style.color = "yellow";

        // Redirect to another page.
        window.location.href = "./Login Successful Page/LoginSuccessful.html";
    }

    else
    {
        errorElement.innerHTML = "Invalid login, try again!";
        errorElement.style.color = "yellow";
        document.getElementById('uname').value = "";
        document.getElementById('pwd').value = "";
        document.getElementById('uname').focus();
    }
}
