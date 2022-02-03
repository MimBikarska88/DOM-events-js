function addItem() {

    let itemValue = document.querySelector('#newItemValue');
    let itemId = document.querySelector('#newItemText');
    let selectElement = document.querySelector('#menu');



    if (itemValue.value != '' && itemId.value != '') {
        let option = document.createElement('option');
        option.setAttribute('id', itemValue.value);
        let newText = document.createTextNode(itemId.value);
        option.value = itemValue.value;
        option.appendChild(newText);
        selectElement.appendChild(option);
        console.log(option);
    }
    itemValue.value = '';
    itemId.value = '';
}