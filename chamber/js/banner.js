// On Mondays and Tuesdays display a banner

switch (day) {
    case 1:
        document.querySelector("#meetAndGreet").style.display = "block";
    break;
    case 2:
        document.querySelector("#meetAndGreet").style.display = "block";
    break;
    default:
        document.querySelector("#meetAndGreet").style.display = "none";
}