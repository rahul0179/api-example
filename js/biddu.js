const lodedata = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(jData => displayBuddies(jData))
}

const displayBuddies = jData => {
    const data = jData.results
    //console.log(jData)
    //console.log(data)
    const buddiesDiv = document.getElementById("buddy");
    for (const i of data) {
        //console.log(i.name.title, i.name.first, i.name.last);
        const p = document.createElement('p')
        p.innerText = `Full-Name:${i.name.title} ${i.name.first} ${i.name.lasat} ${i.email}`;

        buddiesDiv.appendChild(p)

    }


}