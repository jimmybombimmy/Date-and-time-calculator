//To do:
//* Make it so that the days/months carry over to months/years if carryOver === true
//You will probably need to make a function that 
//* Tidy up the code a bit so that the repeating code never repeats
//* Make it so that if you take away days and months 
//it will work the same as if you increase them
//* For some reason it gets stuck saying that newMonth is a number
// Fix this.


//------------------Today's Date

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


document.getElementById('dateBefore').value = new Date().toDateInputValue();
document.getElementById('dateAfter').value = new Date().toDateInputValue();

let beforeDate = dateBefore.valueAsDate.toDateInputValue();

document.getElementById('dateBefore').addEventListener('change', function() {
    beforeDate = dateBefore.valueAsDate.toDateInputValue();
    oldYear = beforeDate[0] + beforeDate[1] + beforeDate[2] + beforeDate[3];
    oldMonth = beforeDate[5] + beforeDate[6];
    oldDay = beforeDate[8] + beforeDate[9];
    // console.log('hello');
})

let copyDate = new Date().toDateInputValue();


let oldYear = copyDate[0] + copyDate[1] + copyDate[2] + copyDate[3];
let oldMonth = copyDate[5] + copyDate[6];
let oldDay = copyDate[8] + copyDate[9];

let newYear = oldYear;
let newMonth = oldMonth;
let newDay = oldDay;
let newDate = copyDate;

let overYear;
let overMonth;
let overDay;

let noYear;
let noMonth;
let noDay;


let dateControl = document.querySelector('input[id="dateBefore"]');



// Date 

let feb;
let febN = [0, ...Array(28).keys()].map(i => i + 1)
let febL = [0, ...Array(29).keys()].map(i => i + 1)

const monthList = [
    [0],
    [0, ...Array(31).keys()].map(i => i + 1),
    [feb],
    [0, ...Array(31).keys()].map(i => i + 1),
    [0, ...Array(30).keys()].map(i => i + 1),
    [0, ...Array(31).keys()].map(i => i + 1),
    [0, ...Array(30).keys()].map(i => i + 1),
    [0, ...Array(31).keys()].map(i => i + 1),
    [0, ...Array(31).keys()].map(i => i + 1),
    [0, ...Array(30).keys()].map(i => i + 1),
    [0, ...Array(31).keys()].map(i => i + 1),
    [0, ...Array(30).keys()].map(i => i + 1),
    [0, ...Array(31).keys()].map(i => i + 1)
];

function dateCorrect() {
    if (parseInt(newYear) < 10) {
        newYear = '000' + newYear;
    } else if (parseInt(newYear) < 100) {
        newYear = '00' + newYear;
    } else if (parseInt(newYear) < 1000) {
        newYear = '0' + newYear;
    }

    if (parseInt(newMonth) < 10) {
        newMonth = '0' + JSON.parse(parseInt(newMonth));
    } 

    if (parseInt(newDay) < 10) {
        newDay = '0' + JSON.parse(parseInt(newDay));
    }
    
}

function getDate() {
    // noMonth = parseInt(newMonth)
    if (parseInt(newYear) % 400 === 0) {
        feb = febL;
    } else if (parseInt(newYear) % 100 === 0) {
        feb = febN;
    } else if (parseInt(newYear) % 4 === 0) {
        feb = febL;
    } else {
        feb = febN;
    }
    // newMonth = parseInt(newMonth);
    // newMonth = JSON.parse(newMonth);
    if (parseInt(newMonth) > 12) {
        // overYear = Math.floor(parseInt(newMonth) / 12);
        newYear = parseInt(newYear) + 1;
        newMonth = parseInt(newMonth) -12;
        // console.log(newYear);
        // console.log(newMonth);
        dateCorrect();
        getDate();
    } else if ((parseInt(currentNumber[1]) < 1) && (newMonth == 1) && ((Math.abs(currentNumber[1] % 12) == oldMonth))) {
        // console.log(newYear);
        newYear = JSON.parse(parseInt(newYear) - 1);
        // console.log(newYear) 
        newMonth = parseInt(newMonth);
        console.log(newMonth);
        newMonth =- 1;
        // if (oldMonth == 0) {
        newMonth = JSON.parse(parseInt(newMonth) + 13);
        Number.toString(newMonth);
        // newYear = JSON.parse(parseInt(newYear) - 1);
        // }
        overMonth = 12;
        // console.log(newMonth)
        dateCorrect();
        getDate();
    } 
    // else {dateCorrect()}
    if (parseInt(newDay) >= monthList[parseInt(newMonth)].length) {
        newDay = JSON.parse(parseInt(newDay) - (monthList[parseInt(newMonth)].length - 1))
        newMonth = JSON.parse(parseInt(newMonth) + 1);
        dateCorrect();
        getDate();
    }
    if (parseInt(newDay < 0)) {
        newMonth = JSON.parse(parseInt(newMonth) - 1);
        newDay = JSON.parse(parseInt(newDay) - (monthList[parseInt(newMonth)].length + 1));
        dateCorrect();
        getDate();
    }
    // dateCorrect();
    // getDate();
}


//----------------------------------------------------------------------------------------------------\\
//----------------------------------------Changable number box----------------------------------------\\
//----------------------------------------------------------------------------------------------------\\

let numBox = document.getElementsByClassName('numBox');
let currentNumber = [];
let isDragging = false;
let newY = [0, 0]
let box;
let reali;

for (let i = 0; i < numBox.length; i++) {
    currentNumber.push(0);
    numBox[i].addEventListener('mousedown', function(e) {
        // console.log(i);
        isDragging = true;
        box = numBox[i];
        curNum = currentNumber[i];
        return reali = i;
    })


// console.log(numBox);
// console.log(currentNumber[reali]);
// console.log(reali);


document.addEventListener('mouseup', function(e) {
    isDragging = false;
    // getDate();
    dateAfter.value = newDate
    // console.log('hello');
    // document.removeEventListener('mouseMove', handleMouseMove)
});


document.addEventListener('mousemove', handleMouseMove);
numBox[i].addEventListener('input', handleMouseMove);

function handleMouseMove(e) {
    currentNumber[i] = numBox[i].innerHTML;
    if (isDragging) {
        newY.push(e.clientY);
        newY.shift();
      if (newY[0] > newY[1]) {
        curNum++;
        currentNumber[reali] = curNum;
        // console.log(currentNumber)
      } else if (newY[0] < newY[1]) {
        curNum--;
        overMonth--;
        currentNumber[reali] = curNum;
      }
      box.innerHTML = curNum;
      e.movementY;
    } else {
        curNum = currentNumber[i]
    }

    newDay = JSON.parse(parseInt(oldDay) + parseInt(currentNumber[0]));
    newMonth = JSON.parse(parseInt(oldMonth) + parseInt(currentNumber[1]));
    newYear = JSON.parse(parseInt(oldYear) + parseInt(currentNumber[2]));

    
    dateCorrect();
    getDate();

    newDate = newYear + '-' + newMonth + '-' + newDay;

    dateAfter.value = newDate

    // dateControl.value = (parseInt(oldYear) + currentNumber[2])  + '-' + (oldmonth) + '-' + (day);
};
}
//The specified value "2-2-2023" does not conform to the required format, "yyyy-MM-dd".



//----------------Website buttons

document.getElementById('resetButton').addEventListener('click', function() {
    for (let i = 0; i < currentNumber.length; i++) {
        // currentNumber[reali] = 0;
        numBox[i].innerHTML = 0;
    }
})



// document.getElementsByClassName('date').css

let classHeight = document.querySelectorAll('.numBoxFull');

// let numBoxHeight = document.querySelectorAll('')
dateDiv = document.querySelectorAll('.dateDiv')
for (var i = 0; i < numBox.length; i++) {
    classHeight[i].style.height = '100px';
    console.log(classHeight[i].style.height);
    let dateClass = document.querySelectorAll('.date')
    for (j = 0; j < dateClass.length; j++) {
        dateDiv[j].style.height = classHeight[i].style.height
        dateClass[j].style.marginTop = '34%';
    }
    
}

// let sum = document.querySelectorAll(.plus)



// datey.style.marginTop('100px');




