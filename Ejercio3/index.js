var rootElement = document.getElementById('root');

for (var i = 0; i <= 15; i++) {
    var newElement = document.createElement('p');
    if (i % 2 == 0) {
        newElement.innerHTML = "Hola Mundo";
    } else {
        newElement.innerHTML = "Chao Mundo";
    }
    rootElement.appendChild(newElement);
}