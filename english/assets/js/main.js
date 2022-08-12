const bnt_bin = document.querySelector('.button__binary')

const bnt_dec = document.querySelector('.button__decimal.hide')


const conveter_block = document.querySelector('.conversion__box')
const swith_arrows = document.querySelector('.swith__icon')

const binary_to_decimal__block = document.querySelector('.card__binary_to_decimal')
const decimal_to_binary__block = document.querySelector('.card__decimal_to_binary') 

//inputs

const binary_decimal_input = document.querySelector('.binary_to_decimal__input');
const decimal_binary_input = document.querySelector('.decimal_to_binary__input.hide');


//total

const result_box = document.querySelector('.result__box');


//events

swith_arrows.addEventListener('click', swith_functions);
bnt_bin.addEventListener('click', execute_binary_decimal_conversion);

bnt_dec.addEventListener('click', execute_decimal_binary_conversion);


/////////////////////////////////////////////////
//////////////  BINARY TO DECIMAL  //////////////
/////////////////////////////////////////////////

let active = false

function swith_functions () {
    if (!active) {
        conveter_block.classList.add('clicked')
        bnt_bin.classList.add ('hide')
        bnt_dec.classList.remove ('hide')
        decimal_binary_input.classList.remove('hide')
        binary_decimal_input.classList.add('hide')

        binary_decimal_input.value = '';
        result_box.innerText = '';

        active = true
    } else {
        conveter_block.classList.remove('clicked')
        bnt_bin.classList.remove('hide')
        bnt_dec.classList.add('hide')
        binary_decimal_input.classList.remove('hide')
        decimal_binary_input.classList.add('hide')

        decimal_binary_input.value = '';
        result_box.innerText = '';
        
        active = false
    }
}

function execute_binary_decimal_conversion () {
    binary_to_decimal(binary_decimal_input.value);
}


function binary_to_decimal(binary_numbers) {
    //////////////////
    // PARSE ERRORS //
    //////////////////

    //check if the user's input contains text.

    if (isNaN (binary_numbers)) {
        result_box.innerText = 'Please, type only "numbers"';
        return null;
    }

    let array_of_numbers = binary_numbers.split("");


    //check if the user's input only contains 0 and 1.

    if (check_for_binary(array_of_numbers) === null) {
        result_box.innerText = 'Please, type only 1 and 0';
        return null;
    }


    //check if the user's input is empty.

    if (binary_decimal_input.value === '') {
        result_box.innerText = '';
        return null;
    }

    ///////////////////////////////
    // CONVERT BINARY TO DECIMAL //
    ///////////////////////////////

    let reverse_array = array_of_numbers.reverse();

    let total = 0;

    for (number in reverse_array){
        let decimal_formula = reverse_array[number] * 2**number;
        total += decimal_formula;
    }

    result_box.innerText = total;
}

/////////////////////////////////////////////////
//////////////  DECIMAL TO BINARY  //////////////
/////////////////////////////////////////////////


function execute_decimal_binary_conversion () {
    decimal_to_binary(decimal_binary_input.value);
}


function decimal_to_binary(decimal_numbers) {
    //////////////////
    // PARSE ERRORS //
    //////////////////

    //check if the user's input contains text.

    if (isNaN(decimal_numbers)) {
        result_box.innerText = 'Please, type only "numbers"';
        return null;
    }


    //check if the user's input is empty.

    if (decimal_binary_input.value === '') {
        result_box.innerText = '';
        return null;
    }

    ///////////////////////////////
    // CONVERT DECIMAL TO BINARY //
    ///////////////////////////////

    decimal_numbers = parseInt(decimal_numbers);
    const binary_convert = decimal_numbers.toString(2);
    result_box.innerText = binary_convert
}


/////////////////////////////////////////////////
////////  SIDE FUNCTION: CONTROL ERRORS  ////////
/////////////////////////////////////////////////


function check_for_binary (array_of_numbers) {
    //checks number by number in the array
    //to find a number different of 0 or 1.

    for (number in array_of_numbers){

        let is_it_zero = array_of_numbers[number] !== '0';
        let is_it_one = array_of_numbers[number] !== '1';


        //if both conditions are true, then the array of 
        //numbers do not make part of a binary code, 
        //this condition will return a null response.

        let it_is_not_binary = is_it_zero && is_it_one;

        if (it_is_not_binary) {
            return null;
        }
    }
}
