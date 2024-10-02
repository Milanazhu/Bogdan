const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}
redButton.text = 'No'
console.log(redButton);
console.log(button);