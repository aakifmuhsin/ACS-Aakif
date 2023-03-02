let keyBoard = document.querySelector('#keyboard');
let display = document.querySelector('#display-screen');
let letters = '';
let shiftCheck = false;
let capsLockCheck = -1;
keyBoard.addEventListener('click', (event) => {
    let key = event.target.getAttribute('data-key'); 

    //using switch case for different button action
    switch (key) {
        // fot space
        case '32':
            letters += ' ';
            break;

        // to nextline
        case '13':
            letters += '\n';
            break;

        // to give space
        case '8':
            letters = letters.slice(0, -1);
            break;

        // for shift flag
        case '16':
            shiftCheck = true;
            break;

        // for capslock flag
        case '20':
            capsLockCheck *= -1;
            break;

        default:
            // codition for alphabets
            if (key >= 97 && key <= 123) {
                // condition for shift key or caps key
                if (shiftCheck || capsLockCheck > 0) {
                    key = key - 32;

                    // if shift key is true change the flag to false
                    if (shiftCheck) {
                        shiftCheck = false;
                    }
                } 
            }  
        letters += String.fromCharCode(key);
    }
    display.innerHTML = letters;
});