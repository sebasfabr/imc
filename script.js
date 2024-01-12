function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Ingrese valores válidos para peso y altura.");
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Su IMC es: ${bmi.toFixed(2)}`;

    // Agregar al historial
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Peso: ${weight} kg, Altura: ${height} cm, IMC: ${bmi.toFixed(2)}`;
    historyList.appendChild(listItem);
}
