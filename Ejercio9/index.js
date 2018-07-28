var helloPerson = function (person) {
    var name = person.fullName ? person.fullName() : person;
    console.log('Hello ' + name + '!');
}

var people = ["Pedro", "Juan", "María", "Alberto"];
people.forEach(helloPerson);

var fullPerson = {
    firstName: 'Antonio',
    lastName: 'Osorio',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(fullPerson.fullName());

var people2 = [fullPerson];
people2.forEach(helloPerson);

fullPerson.age = 12;
fullPerson['id'] = 8972897398;
for (var prop in fullPerson){
    if(fullPerson.hasOwnProperty(prop)){
        console.log(prop, fullPerson[prop]);
    }
}