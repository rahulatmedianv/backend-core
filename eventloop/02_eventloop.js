Promise.resolve().then(() => {
    console.log('Promise resolved');
    setTimeout(() => {
        console.log('micro > macro')
    }, 0);
})


console.log('Hello')