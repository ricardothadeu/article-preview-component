let share = document.getElementsByClassName("share")[0];
let footer = document.getElementsByClassName("footer")[0];
let container = document.getElementsByClassName("container")[0];
let socials = document.getElementsByClassName("socials-share")[0];
let icon = document.getElementsByClassName("icon")[0];
let change = true


share.addEventListener("click", () => {
        if(change == true) {
            container.setAttribute("style", "height: 30.5rem;");
            socials.removeAttribute("style", "display:none;");
            icon.setAttribute("fill", "#ffffff");
            share.setAttribute("style","background-color: hsl(214, 17%, 51%);")
            change = false;
        } else {
            container.setAttribute("style", "height: 31.5rem;");
            socials.setAttribute("style", "display:none;");
            icon.setAttribute("fill", "#6E8098");
            share.setAttribute("style","background-color: hsl(210, 46%, 95%);")
            change = true;
        }
    });