let upper = document.getElementById("upper-case");
let lower = document.querySelector("#lower-case");
let proper = document.querySelector("#proper-case");
let sentence = document.querySelector("#sentence-case");
let save = document.querySelector("#save-text-file");
let text = document.querySelector(".text");

upper.onclick = function () {
    text = document.querySelector(".text");
    text = text.value.toUpperCase();
    document.querySelector(".text").value = text;
}

lower.onclick = function () {
    text = document.querySelector(".text");
    text = text.value.toLowerCase();
    document.querySelector(".text").value = text;
}

proper.onclick = function () {
    text = document.querySelector(".text").value;
    text = text.toLowerCase();
    text = text[0].toUpperCase() + text.slice(1);
    for (let i = 0; i < text.length; i++) {
        if (text[i] == " ") {
            text = text.slice(0, i+1) + text[i+1].toUpperCase() + text.slice(i+2);
            document.querySelector(".text").value = text;
        }
    }
}

sentence.onclick = function () {
    text = document.querySelector(".text").value;
    text = text.toLowerCase();
    text = text[0].toUpperCase() + text.slice(1);
    for (let i = 0; i < text.length; i++) {
        if ((text[i] == ".") && (text[i+1] == ".") && (text[i+2] == ".") && (text[i+3] == " ")) {
            text = text.slice(0, i+4) + text[i+4].toUpperCase() + text.slice(i+5);
            document.querySelector(".text").value = text;
        }
        if ((text[i] == "!") && (text[i+1] == "!") && (text[i+2] == "!") && (text[i+3] == " ")) {
            text = text.slice(0, i+4) + text[i+4].toUpperCase() + text.slice(i+5);
            document.querySelector(".text").value = text;
        }

        if ((text[i] == "?") && (text[i+1] == "?") && (text[i+2] == "?") && (text[i+3] == " ")) {
            text = text.slice(0, i+4) + text[i+4].toUpperCase() + text.slice(i+5);
            document.querySelector(".text").value = text;
        }

        if (((text[i] == ".") || (text[i] == "!") ||
            (text[i] == "?") || (text[i] == ";")) && (text[i+1] == " ")) {
            text = text.slice(0, i+2) + text[i+2].toUpperCase() + text.slice(i+3);
            document.querySelector(".text").value = text;
        }
    }
}

save.onclick = function () {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.querySelector(".text").value));
    element.setAttribute('download', "text");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
