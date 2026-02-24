console.log('Running on call stack');

setTimeout(() => {
    console.log('3 Running on macro task');
    Promise.resolve().then(() => {
        console.log('4 macro task -> micro task');
        setTimeout(() => {
            console.log('macro -> micro -> macro');
        }, 0);
    })
}, 0);

Promise.resolve().then(() => {
    console.log('2 Running on priority/micro que');
    setTimeout(() => {
        console.log('5 micro task que -> macro task');
    }, 0);
});



