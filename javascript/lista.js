const users = [
    { nome: "Nicollas Pilatti", email: "nicollasnick849@gmail.com", dataNascimento: "13/07/2004" },
    { nome: "Joao Pereira", email: "Joao123@hotmail.com", dataNascimento: "24/12/1990" },
    { nome: "Bill Gates", email: " media@gatesfoundation.org", dataNascimento: "28/10/1955" },
    { nome: "Neymar Jr", email: "contato@institutonjr.org.br", dataNascimento: "05/02/1992" }
];

function loadTable() {
    const tableBody = document.getElementById('userTable');
    tableBody.innerHTML = '';

    users.forEach((user, index) => {
        const row = document.createElement('tr');

        const cellNome = document.createElement('td');
        cellNome.textContent = user.nome;
        row.appendChild(cellNome);

        const cellEmail = document.createElement('td');
        cellEmail.textContent = user.email;
        row.appendChild(cellEmail);

        const cellDataNascimento = document.createElement('td');
        cellDataNascimento.textContent = user.dataNascimento;
        row.appendChild(cellDataNascimento);

        const cellAction = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.onclick = () => deleteUser(index);
        cellAction.appendChild(deleteButton);
        row.appendChild(cellAction);

        tableBody.appendChild(row);
    });
}

function deleteUser(index) {
    users.splice(index, 1);
    loadTable();
}

window.onload = loadTable;

