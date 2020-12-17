const form = document.querySelector('form');
const input = document.querySelector('#vowel-counter');
const btnCheck = document.querySelector('.btn-check');
let countVowels = 0;

btnCheck.addEventListener('click', checkForVowels);

function checkForVowels(e) {
    e.preventDefault();

    let userInput = input.value.toLowerCase();
    let arr = userInput.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || arr[i] === 'e' || 
            arr[i] === 'i' || arr[i] === 'o' ||
            arr[i] === 'u' ) {
                countVowels++;
            }
    }

    alert(`There are ${countVowels} vowels!`);
    countVowels = 0;
    form.reset();
}