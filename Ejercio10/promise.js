console.log('before define Promise')

var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var randomNumber = Math.random();
        if (randomNumber < 0.5) {
            console.log('before resolve');
            resolve(randomNumber);
        } else {
            var error = new Error('You didn\'t win, Your value was: ' + randomNumber);
            console.log('before refect');
            reject(error);
        }
    }, 5000);
});

myPromise.then(function succesCallback(dataResolved) {
    console.log('successPromise');
    console.log('value was: ' + dataResolved);
}, function errorCallback(error) {
    console.log('errorPromise');
    console.log('error was: ', error);
});

console.log('after define Promise');