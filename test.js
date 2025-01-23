fetch('https://www.gk360.at/api/counties/?action=all')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });