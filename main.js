document.getElementById('my-file-csv').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const content = e.target.result;
        console.log(content);
    };

    reader.readAsText(file);
    document.getElementById("my-result").innerHTML = "Proceso OK";
});