// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)


let table = document.createElement('table');

let count = 1;
for (let i = 0; i < 10; i++) {
    let row = table.insertRow();
    for (let j = 0; j < 10; j++) {
        let cell = row.insertCell();
        cell.textContent = count;
        count++;
    }
}

document.body.appendChild(table);