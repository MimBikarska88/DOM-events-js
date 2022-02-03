function solve() {


    let divContainer = document.getElementById('container');
    let table = document.getElementsByClassName('table')[0];
    let generateButton = document.getElementsByTagName('button')[0];
    let checkOutTextArea = document.getElementsByTagName('textarea')[1];

    generateButton.addEventListener('click', () => {
        let ItemInfo = divContainer.querySelector('textarea').value;
        divContainer.querySelector('textarea').value = '';
        checkOutTextArea.value = '';
        let newItem = JSON.parse(ItemInfo);
        console.log(newItem);

        for (let i = 0; i < newItem.length; ++i) {
            let row = document.createElement('tr');
            let tdName = document.createElement('td');
            tdName.textContent = newItem[i].name;
            let tdImg = document.createElement('td');
            let imgSrc = document.createElement('img');
            imgSrc.src = newItem[i].img;
            tdImg.appendChild(imgSrc);
            row.appendChild(tdImg);
            row.appendChild(tdName);
            let tdPrice = document.createElement('td');
            tdPrice.textContent = newItem[i].price;
            row.appendChild(tdPrice);
            let tdFactor = document.createElement('td');
            tdFactor.textContent = newItem[i].decFactor;
            row.appendChild(tdFactor);
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            let td = document.createElement('td');
            td.appendChild(checkbox);
            row.appendChild(td);
            table.querySelector('tbody').appendChild(row);
        }
    })


    let checkOutButton = document.getElementsByTagName('button')[1];
    checkOutButton.addEventListener('click', () => {
        let total = 0;
        let furniture = [];
        let factor = 0;
        let allRows = Array.from(table.querySelectorAll('tr'));
        for (let i = 0; i < allRows.length; ++i) {
            let cells = Array.from(allRows[i].querySelectorAll('td'));
            for (let j = 0; j < cells.length; ++j) {
                if (j == 4) {
                    let inputValue = cells[j].querySelector('input');
                    if (inputValue.checked == true) {
                        total += Number(cells[2].textContent);
                        furniture.push(cells[1].textContent);
                        factor += Number(cells[3].textContent);

                    }
                }
            }

        }
        let checkOutTextArea = document.getElementsByTagName('textarea')[1];
        checkOutTextArea.value += `Bought furniture: ${furniture.join(', ')}\n`;
        checkOutTextArea.value += `Total price: ${total.toFixed(2)}\n`;
        checkOutTextArea.value += `Average decoration factor: ${factor/furniture.length}\n`;
    })

}