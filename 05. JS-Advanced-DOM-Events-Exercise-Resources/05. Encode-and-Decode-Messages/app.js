function encodeAndDecodeMessages() {
    let textAreaDecoded = document.querySelectorAll('textarea')[0];
    let encodeButton = document.querySelectorAll('button')[0];
    let textAreaEncoded = document.querySelectorAll('textarea')[1];
    let decodeButton = document.querySelectorAll('button')[1];

    encodeButton.addEventListener('click', () => {
        let message = textAreaDecoded.value;
        if (message != '') {
            textAreaDecoded.value = '';
            textAreaEncoded.value = decodeMessage(message);
        }
    })
    decodeButton.addEventListener('click', () => {

        let message = textAreaEncoded.value;
        if (message != '') {
            textAreaEncoded.value = '';
            textAreaDecoded.value = encodeMessage(message);
        }

    })

    function decodeMessage(message) {
        let decodedMessage = '';
        for (let i = 0; i < message.length; ++i) {
            decodedMessage += String.fromCharCode((message.charCodeAt(i) + 1));
        }
        console.log(decodedMessage);
        return decodedMessage;
    }

    function encodeMessage(message) {
        let encodedMessage = '';
        for (let i = 0; i < message.length; ++i) {
            encodedMessage += String.fromCharCode((message.charCodeAt(i) - 1));
        }
        console.log(encodedMessage);
        return encodedMessage;

    }
}