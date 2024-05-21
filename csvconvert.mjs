import csv from 'csvtojson';
import fs from 'fs/promises';

async function csvToJson(filename) {
    const csvData = await fs.readFile(filename, 'utf-8');
    const jsonArray = await csv().fromString(csvData);
    return JSON.stringify(jsonArray);
}

csvToJson('_data/prayerrequests.csv').then(
    async json => {
        await (fs).writeFile('_data/prayerrequests.json', json);
        console.log(json);
    }
);