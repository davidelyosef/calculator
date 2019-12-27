(() => {

    const buttons = document.getElementsByTagName('button');
    const input = document.getElementById("result");
    let result;

    for (let button of buttons) {
        button.addEventListener("click", () => {
            if (!button.value) {
                button.value = button.innerText;
            }
            switch (button.value) {
                case 'C': input.value = '';
                    return;
                case '=':
                    result = eval(input.value);
                    input.value = result;
                    return;
            }

            input.value += button.value;
        });
    }

})();
const regex = /^[a-zA-Z]{1}$/;
function disallowLetters(input) {
    input.value = parseInt(input.value.replace(regex, ""));
    input.value = input.value === 'NaN' ? '' : input.value; 
}