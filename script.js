fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        populateTable(data);
    })
    .catch(error => console.error('Error:', error));

function populateTable(users) {
    const tableBody = document.querySelector('#usersTable tbody');

    users.forEach(user => {
        const row = document.createElement('tr');

        const nameChel = document.createElement('td');
        nameChel.textContent = user.name;
        row.appendChild(nameChel);

        const emailChel = document.createElement('td');
        emailChel.textContent = user.email;
        row.appendChild(emailChel);

        const streetChel = document.createElement('td');
        streetChel.textContent = user.address.street;
        row.appendChild(streetChel);

        const cityChel = document.createElement('td');
        cityChel.textContent = user.address.city;
        row.appendChild(cityChel);

        tableBody.appendChild(row);
    });
}