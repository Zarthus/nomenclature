const fs = require('fs');

const dataSets = ['public/api.json', 'public/posts.json'];
let failed = false;

dataSets.forEach((dataset) => {
    console.info(`Reading ${dataset}`);

    try {
        let json = fs.readFileSync(dataset);

        JSON.parse(json);

        console.info(` => ${dataset} is valid`);
    } catch (err) {
        failed = true;
        console.error(err);
    }
});

if (failed) {
    process.exit(1);
}
