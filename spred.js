const button = {
    width: 200,
    text: 'Buy'
}
const redButton = JSON.parse(JSON.stringify(button));
redButton.color = 'red';
redButton.text = 'No';
console.log(redButton);
console.log(button);