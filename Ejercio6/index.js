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

var helloPerson = function(person){
    var name = person.fullName ? person.fullName(): person;
    rootElement.appendChild(
        createParagraphWithText('Hello ' + name + '!')
    );
}

var people = ["Pedro", "Juan", "María", "Alberto"];
people.forEach(helloPerson);

var fullPerson = {
    firstName: 'Antonio',
    lastName: 'Osorio',
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(fullPerson.fullName());

var people2 = [fullPerson];
people2.forEach(helloPerson);