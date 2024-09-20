document.getElementById('loginButton').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    const data = {
        name: name,
        email: email
    };

    fetch('http://localhost:9000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.message === 'success') {
            console.log(result);
        } else {
            console.error('Form submission failed:', result);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});