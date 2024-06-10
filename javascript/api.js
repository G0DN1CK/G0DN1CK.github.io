function fetchApiData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            const resultElement = document.getElementById('result');
            const formattedData = JSON.stringify(data, null, 2);
            resultElement.textContent = formattedData;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

window.onload = fetchApiData;