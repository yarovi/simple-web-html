function uploadCsv() {
    const inpObj = document.getElementById("my-csv");
    const file = inpObj.files[0];
    // console.log(file);
    // const reader = new FileReader();

    // reader.onload = function(inpObj) {
    //     const content = inpObj.target.result;
    //     const rows = content.split('\n');

    //     const csvData = [];
    //     rows.forEach(function(row) {
    //         const cells = row.split(',');
    //         csvData.push(cells);
    //     });

    //     console.log(csvData);
    // };

    // reader.readAsText(file);
};

/*
document.getElementById('csvForm').addEventListener('submit',
    function (event) {
        event.preventDefault();


        var formData = new FormData(this);

        fetch('http://156.35.98.155:80', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                // Manipular la respuesta del servidor (opcional)
                console.log(data);
                
                console.log(data.text);
            })
            .catch(error => console.error('Error:', error));


    })
    */