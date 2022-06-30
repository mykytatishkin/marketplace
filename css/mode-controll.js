let switchMode = document.getElementById("themeMode");

themeMode.onclick = function() {
    let theme = document.getElementById("theme");

    if(theme.getAttribute("href") == "../css/light-mode.css"){
    console.log(theme.getAttribute("href"))
        theme.href = "../css/dark-mode.css";
    }
    else{
    console.log(theme.getAttribute("href"))
        theme.href = "../css/light-mode.css";
    }
}