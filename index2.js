import fetch from "node-fetch";

async function fetchData2 () {
    const url = "https://api.npms.io/v2/search/suggestions?q=react";
    const response = await (await fetch(url)).json();

    const responselen = response.length

    let dateList = [];
    let objectp = [];

    for (let i = 0; i < response.length; i++) { 
        const packagei = response[i].package;
        const packagedate = packagei.date;
        const packagedateT = packagedate
        const oldDate = Date.parse(packagedateT);
        dateList.push(oldDate)
        
    }

    let od = new Date(Math.max.apply(null, dateList));
    console.log(od);
    let strOd = JSON.stringify(od);
    console.log(strOd);

    for (let j = 0; j < response.length; j++) {
        const packagej = response[j].package;
        const packagedatej = packagej.date;
        // console.log(typeof packagedatej);
        // if (packagedatej == od) {
        //     console.log(packagej)
        // }
        
    }
    let findOldest;
    objectp.push(response);
    // console.log(response);
    findOldest = objectp.find(findOldest=>findOldest.date == strOd);
    console.log(findOldest)
}

fetchData2()