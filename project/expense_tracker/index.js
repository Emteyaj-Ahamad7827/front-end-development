let expenses = [];
$("#addBtn").click(function () {

    let title = $("#title").val();
    let amount = Number($("#amount").val());

    if (title === "" || amount === 0) {
        alert("Please enter all fields");
        return;
    }

    let expense = {
        id: Date.now(),
        title: title,
        amount: amount
    };

    expenses.push(expense);

    displayExpenses();
    saveData();

    $("#title").val("");
    $("#amount").val("");
});

function displayExpenses() {

    $("#expenseList").html("");

    let total = 0;

    $.each(expenses, function (index, item) {

        total += item.amount;

        $("#expenseList").append(`
            <li>
                ${item.title} - ₹${item.amount}

                <div>
                    <button onclick="editExpense(${item.id})">
                        Edit
                    </button>

                    <button onclick="deleteExpense(${item.id})">
                        Delete
                    </button>
                </div>
            </li>
        `);
    });

    $("#total").text(total);
}