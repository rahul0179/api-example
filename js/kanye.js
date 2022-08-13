const lodeQuota = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(jData => displayQuota(jData))
}

const displayQuota = jData => {
    const quotaElement = document.getElementById("quota");
    quotaElement.innerText = jData.quote


}