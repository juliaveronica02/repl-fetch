const URL = 'https://catfact.ninja/breeds'
fetch(URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        for (i = 0; i >= 0; i++) {
            ninja(data[i])
        }
    })
    .catch((err) => {
        console.log(err);
    })
