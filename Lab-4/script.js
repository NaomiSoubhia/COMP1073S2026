
let moves = 0;

async function foward(velocity, distance){

setMainLed({r:255, g:255 , b:255});

await speak('Im moving foward', true);

await delay(0.5)


await roll(0, distance, velocity);

moves++;
}


async function right(velocity, distance) {

    setMainLed({ r: 255, g: 255, b: 255 });

    await speak('Im moving right', true);

    await delay(0.5)


    await roll(90, distance, velocity);

    moves++;
}

async function left(velocity, distance) {

    setMainLed({ r: 255, g: 255, b: 255 });

    await speak('Im moving left', true);

    await delay(0.5)


    await roll(270, distance, velocity);

    moves++;
}


async function startProgram() {
    setMainLed({
        r: 255,
        g: 255,
        b: 255
    });
    // Main program loop
    await foward(6,2);
    await right(2,6);
    await foward(4,3);
    await left(3, 4);
    await foward(15, 2);

    await delay(2);
    setMainLed({
        r: 255,
        g: 0,
        b: 255
    });


    await speak('I made ' + moves + 'moves', true);
    exitProgram();
}