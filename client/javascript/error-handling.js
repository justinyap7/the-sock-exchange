function exampleFunction() {
    try {
        let value = riskyOperation();
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('The try/catch block has finished executing.');
    }
    console.log('This is the end of the function.');
}

function riskyOperation() {
    throw new Error('This is an example error.');
}

exampleFunction()