//To do:
//* Make it so that the day month and year are set if you type in a value
//because at the moment it will revert to what it was last dragged to.
//* Sort out the values of NewYear, New

//------------------Today's Date

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('dateBefore').value = new Date().toDateInputValue();

console.log(new Date().toDateInputValue());
let copyDate = new Date().toDateInputValue()

let year = copyDate.slice(0, 4);
let month = copyDate.slice(1, 3);
let day = copyDate.slice(1, 3);

let newYear;
let newMonth;
let newDay;


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

function handleMouseMove(e) {
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
    
    let newYear = year + currentNumber[2];
    if (month < 10) {
        month = ("0" + month).slice(-2);
    }
    if (day < 10) {
        day = ("0" + day).slice(-2);
    }
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




