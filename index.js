function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function nameOfFunction() {};
}

function returnsAnAnonymousFunction() {
    // Does not have a name
    return function() {};
}