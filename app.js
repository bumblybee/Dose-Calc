const calculateButton = document.getElementById("calculate");
const startOverButton = document.getElementById("start-over");
const container = document.getElementById("container");
const calculationList = document.getElementById("calculations");

calculateButton.addEventListener("click", calculateTotals);
startOverButton.addEventListener("click", startOver);

function calculateTotals(e) {
    const weight = document.getElementById("weight").value;
    const percentage = document.getElementById("percent").value;
    const servings = document.getElementById('servings').value;

    if (weight != "" && percentage != "") {

        const totalMg = (weight * percentage) * 10;
        const servingMg = Math.round(totalMg / servings);

        const liTotal = document.createElement("li");
        liTotal.appendChild(document.createTextNode(`${totalMg} mg in total`));
        liTotal.className = "list-item";
        calculationList.appendChild(liTotal);

        if (servings != "") {
            const liServing = document.createElement("li");
            liServing.appendChild(document.createTextNode(`${servingMg} mg per serving`));
            liServing.className = "list-item";
            calculationList.appendChild(liServing);
        }

        container.classList.add("right-panel-active");
    } else {
        alert("Please enter values for weight and percentage. Servings are optional.");
    }


}

function startOver(e) {

    const weight = document.getElementById("weight");
    const percentage = document.getElementById("percent");
    const servings = document.getElementById('servings');
    weight.value = "";
    percentage.value = "";
    servings.value = "";

    while (calculationList.firstChild) {
        calculationList.removeChild(calculationList.firstChild);
    }

    container.classList.remove("right-panel-active")
}