document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault(); // sahifani yangilanishini to‘xtatadi

    const Input = document.querySelector('.input')
    const errorText = document.querySelector(".errorText");

    const email = Input.value;


    // Email validatsiyasi (oddiy regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        Input.style.border = "1px solid red";
        errorText.style.display = "block";
    } else {
        Input.style.border = "1px solid green";
        errorText.style.display = "none";
        alert("Email valid!");
    }
});
