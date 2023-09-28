
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
    