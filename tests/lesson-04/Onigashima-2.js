const crewList =[
    {name: "Zoro", bountry:1000000},
    {name: "Black", bountry: 200000},
    {name: "Mario", bountry: 1000},
    {name: "Blo", bountry: 2000000000}
];
function printBountyLeaderBoard(crewList){
    //sắp xếp mảng:
    crewList.sort((a,b)=>b.bountry-a.bountry);
    for (let i = 0; i < crewList.length; i++) {
        const member = crewList[i];

        let vuongMien = "";
    if(i===0) {
        vuongMien = "🥇"
    }
    else if(i===1){
        vuongMien ="🥈"
    }
    else if(i===2){
        vuongMien ="🥉"
    }
    console.log (`${vuongMien} ${member.name}-${member.bountry}`)

}

}
printBountyLeaderBoard(crewList);