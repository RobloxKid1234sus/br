// navbar location: assets/components/navbar.html
window.onload = function () {
    fetch('/assets/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            let div = document.createElement('div');
            div.innerHTML = data;
            document.body.insertBefore(div, document.body.firstChild);
        });
}