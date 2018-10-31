function createHeaderAndFooter () {

    let content = document.getElementById("container");

    let elementArray = ["header", "navbar", "footer"];

    for (let i = 0; i < elementArray.length; i++) {
        fetch(elementArray[i] + ".html").then(async function (response) {
        let text = await response.text();

        content.innerHTML = content.innerHTML.replace("{" + elementArray[i] + "}", text);
    });
    }
}

document.addEventListener("DOMContentLoaded", createHeaderAndFooter);   