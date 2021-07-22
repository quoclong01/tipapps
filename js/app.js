const bill = document.getElementById('bill');
const people = document.getElementById('people');
const error = document.getElementById('error');
const percent = document.getElementById('percent');
const total = document.getElementById('total');
const tip = document.getElementById('tip');
const reset = document.querySelector('.btn-reset');
const custom = document.getElementById('custom');
var btn = document.querySelectorAll('.btn');
var per = 0;
var totalPeople = 0;
var totalPerson = 0;
var tipPerson = 0;
var number = 0;


bill.addEventListener('keyup', (e) => {
    if (e.target.value !== '') {
        totalPeople = parseFloat(e.target.value);
        calc();
    } else {
        totalPeople = 0;
        calc();
    }
});


people.addEventListener('keyup', (e) => {
    if (e.target.value === '0') {
        error.innerText = `Can't be zero`;
        people.classList.add('input-error');
        calc();
        number = 0;
    }
    else {
        error.innerText = '';
        people.classList.remove('input-error');
        number = Number(e.target.value);
        calc();
    }
});

btn.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        removeButton();
        e.target.classList.add('btn-active');
        per = e.target.dataset.value;
        calc();
        custom.value = '';
    });
});

function removeButton() {
    btn.forEach((e) => {
        if (e.classList.contains('btn-active')) {
            e.classList.remove('btn-active');
        }
    });
}

custom.addEventListener('keyup', (e) => {
    removeButton();
    if (e.target.value !== '') {
        per = parseFloat(e.target.value);
        calc();
    } else {
        per = 0;
        tip.innerText = `$0.00`;
    }
})

reset.addEventListener('click', (e) => {
    if (e.target.classList.contains('reset-active')) {
        bill.value = '';
        people.value = '';
        custom.value = '';
        total.innerText = `$0.00`;
        tip.innerText = `$0.00`;
        totalPeople = 0;
        per = 0;
        totalPerson = 0;
        tipPerson = 0;
        number = 0;
        e.target.classList.remove('reset-active');
        removeButton();
    }

});


function calc() {
    if (number !== 0 && totalPeople !== 0) {
        totalPerson = ((totalPeople + (totalPeople * per / 100)) / number).toFixed(2);
        tipPerson = ((totalPeople * per / 100) / number).toFixed(2);
        total.innerText = `$${totalPerson}`;
        tip.innerText = `$${tipPerson}`;
        reset.classList.add('reset-active');
    } else {
        total.innerText = `$0.00`;
        tip.innerText = `$0.00`;
        reset.classList.remove('reset-active');
    }
}


