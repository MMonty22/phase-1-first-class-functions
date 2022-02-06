function receivesAFunction(spy) {
    spy()
}

function returnsANamedFunction() {
    return function namedFunction () {
        console.log('I\'m returning a named function')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I\'m returning an anonymous function')
    }
}