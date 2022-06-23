function samplePromise() {
    return Promise.resolve("huda");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();