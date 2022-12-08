function samplePromise(){
    console.log("Start");
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
}

function promiseRace(){
    const p1 = new Promise((resolve) => {
        setTimeout(resolve, 3000, 'one');
    });

    const p2 = new Promise((resolve) => {
        setTimeout(resolve, 800, 'two');
    });

    return Promise.race([p1, p2]);
}

function promiseWaitAll(){
    const p1 = new Promise((resolve) => {
        setTimeout(() => {
            console.log("one");
            resolve();
        }, 1000);
    });

    const p2 = new Promise((resolve) => {
        setTimeout(() => {
            console.log("two");
            resolve();
        }, 1000);
    });

    const p3 = new Promise((resolve) => {
        setTimeout(() => {
            console.log("three");
            resolve();
        }, 1000);
    });

    return Promise.all([p1, p2, p3]);
}

function promisesOneByOne(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("one");
            resolve();
        }, 1000);
    }).then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("two");
                resolve();
            }, 1000);
        }).then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("three");
                    resolve();
                }, 1000);
            });
        });
    });
}

async function promisesOneByOne2(){
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("one");
            resolve();
        }, 1000);
    });
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("two");
            resolve();
        }, 1000);
    });
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("three");
            resolve();
        }, 1000);
    });
}
