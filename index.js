//To do:
//* Make it so that carry over

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
    year = beforeDate[0] + beforeDate[1] + beforeDate[2] + beforeDate[3];
    month = beforeDate[5] + beforeDate[6];
    day = beforeDate[8] + beforeDate[9];
    console.log('hi');
})

let copyDate = new Date().toDateInputValue();


let year = copyDate[0] + copyDate[1] + copyDate[2] + copyDate[3];
let month = copyDate[5] + copyDate[6];
let day = copyDate[8] + copyDate[9];

let newYear = year;
let newMonth = month;
let newDay = day;


let dateControl = document.querySelector('input[id="dateBefore"]');



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
    // document.removeEventListener('mouseMove', handleMouseMove)
});


document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('input', handleMouseMove);

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
        currentNumber[reali] = curNum;
      }
      box.innerHTML = curNum;
      e.movementY;
    } else {
        curNum = currentNumber[i]
    }

    newYear = JSON.parse(parseInt(year) + parseInt(currentNumber[2]));
    newMonth = JSON.parse(parseInt(month) + parseInt(currentNumber[1]));
    if (parseInt(newMonth) < 10) {
        newMonth = '0' + newMonth;
    }
    newDay = JSON.parse(parseInt(day) + parseInt(currentNumber[0]));
    if (parseInt(newDay) < 10) {
        newDay = '0' + newDay;
    }
    newDate = newYear + '-' + newMonth + '-' + newDay;

    dateAfter.toDateInputValue = newDate

    // dateControl.value = (parseInt(year) + currentNumber[2])  + '-' + (month) + '-' + (day);
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
        dateClass[j].style.marginTop = '44%';
    }
    
}


// datey.style.marginTop('100px');




