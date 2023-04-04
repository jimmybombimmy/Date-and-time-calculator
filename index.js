



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


console.log(numBox);
console.log(currentNumber[reali]);
console.log(reali);

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
        console.log(currentNumber)
      } else if (newY[0] < newY[1]) {
        curNum--;
        currentNumber[reali] = curNum;
      }
      box.innerHTML = curNum;
      e.movementY;
    } else {
        curNum = currentNumber[i]
    }
};
}


// Website buttons

document.getElementById('resetButton').addEventListener('click', function() {
    for (let i = 0; i < currentNumber.length; i++) {
        // currentNumber[reali] = 0;
        numBox[i].innerHTML = 0;
    }
})