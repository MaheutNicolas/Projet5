async function getData() {
    return fetch('./src/data/logements.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return data;
    })
}

export default getData;