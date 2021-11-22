import { count } from "console";
import fetch from "node-fetch";
import { version } from "process";

async function fetchData () {

    const url = "https://api.npms.io/v2/search/suggestions?q=react";
    const response = await (await fetch(url)).json();

    const responselen = response.length

    let count = 0;

    for (let i = 0; i < response.length; i++) {

        const packagei = response[i].package;
        const versioni = packagei.version;
        const versionNum = versioni.split(".")[0];
        // console.log(versionNum)
        if (versionNum >= 10) {
            count++;
        }
    }
    console.log(count)
    return count
    
}

fetchData()
