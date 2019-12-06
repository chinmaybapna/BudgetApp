function calcLeft(y) {
	var budgetDisplay = document.getElementById("budget-display");
	var leftDisplay = document.getElementById("left-display");
	var x = leftDisplay.innerHTML;
	var z = parseFloat(budgetDisplay.innerHTML) - y;
	leftDisplay.innerHTML = z;
}

function calcSpent(amount) {
	var spentDisplay = document.getElementById("spent-display");
	var x = spentDisplay.innerHTML;
	var y = parseFloat(x) + parseFloat(amount);
	spentDisplay.innerHTML = y;
	calcLeft(y);
}

function addToExpense() {
	var table = document.getElementById("expense-list");
	var description = document.getElementById("description").value;
	var amount = document.getElementById("amount").value;
	if(amount!= "" && description!= "" && amount.length <= 8) {
		var row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var today = new Date();
		var date = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
		cell1.innerHTML = date;
		cell2.innerHTML = description;
		cell3.innerHTML = amount;
		calcSpent(amount);
		document.getElementById("form").reset();
	}
}

function addToBudget() {
	var budget = document.getElementById("budget").value;
	if(budget === "" || budget.length >= 8) {
		document.getElementById("budget-display").innerHTML = "--";
		document.getElementById("spent-display").innerHTML = "--";
		document.getElementById("left-display").innerHTML = "--";
	}

	else{
		var budgetDisplay = document.getElementById("budget-display");
		budgetDisplay.innerHTML = budget;
		if(budgetDisplay.innerHTML != "--" && budget.length < 8) {
			document.getElementById("spent-display").innerHTML = "0";
			document.getElementById("left-display").innerHTML = budget;
			document.getElementById("budget-submit").style.display = "none";
			document.getElementById("form").style.display = "block";
			document.getElementById("edit-budget").style.display = "block";
	}
	}
}

function editBudgetForm() {
	document.getElementById("new-budget").style.display = "block";
	document.getElementById("form").style.display = "none";
	document.getElementById("edit-budget").style.display = "none";
}

function editBudget() {
	var budgetEdit = document.getElementById("budgetEdit").value;
	if(budgetEdit!="" && budgetEdit.length<=8) {
		var budgetDisplay = document.getElementById("budget-display");
		budgetDisplay.innerHTML = budgetEdit;
		var spentDisplay = document.getElementById("spent-display");
		var y = spentDisplay.innerHTML;
		var z = parseInt(y);
		calcLeft(y);
		document.getElementById("new-budget").reset();
		document.getElementById("form").style.display = "block";
		document.getElementById("edit-budget").style.display = "block";
		document.getElementById("new-budget").style.display = "none";	
	}
		
}
