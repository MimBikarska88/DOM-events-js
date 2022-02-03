function create(words) {
    let mainDiv = document.getElementById('content');
    for (let i = 0; i < words.length; ++i) {
        let innerDivElement = document.createElement('div');
        let pElement = document.createElement('p');
        pElement.textContent = `${words[i]}`;
        pElement.style.display = 'none';
        innerDivElement.appendChild(pElement);
        mainDiv.appendChild(innerDivElement);
        innerDivElement.addEventListener('click', function(event) {
            pElement.style.display = 'inline-block';
        })
    }
}