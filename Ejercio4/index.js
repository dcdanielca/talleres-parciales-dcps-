var rootElement = document.getElementById('root');

function createParagraphWithText(text){
    var paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    return paragraph;
}

function createHelloWorld(){
    rootElement.appendChild(createParagraphWithText("Hello World!"));
}

function createByeWorld(){
    rootElement.appendChild(createParagraphWithText("Bye World"));
}

for (var i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        createHelloWorld();
    } else {
        createByeWorld();
    }
}