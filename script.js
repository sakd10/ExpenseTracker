let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    let category = document.getElementById("category").value;
    let amount = document.getElementById("amount").value;
    let comments = document.getElementById("comments").value;

    let date = new Date().toLocaleString();

    let expense = {
        category: category,
        amount: amount,
        comments: comments,
        createdAt: date,
        updatedAt: date
    };

    expenses.unshift(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    display();
}

function display() {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        let e = expenses[i];

        let row = `
        <tr>
            <td>${e.category}</td>
            <td>${e.amount}</td>
            <td>${e.createdAt}</td>
            <td>${e.updatedAt}</td>
            <td>${e.comments}</td>
            <td>
                <button onclick="editExpense(${i})">Edit</button>
                <button onclick="deleteExpense(${i})">Delete</button>
            </td>
        </tr>
        `;

        table.innerHTML += row;
    }
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    display();
}

function editExpense(index) {
    let newAmount = prompt("Enter new amount:");
    
    if (newAmount != null) {
        expenses[index].amount = newAmount;
        expenses[index].updatedAt = new Date().toLocaleString();
        localStorage.setItem("expenses", JSON.stringify(expenses));
        display();
    }
}
display();