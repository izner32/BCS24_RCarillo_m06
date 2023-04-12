function oddEvenChecker(num) {
    if (typeof num === 'number') {
        if (num % 2 === 0) {
            console.log('The number is even.');
        } else {
            console.log('The number is odd.');
        }
    } else {
        console.log('Invalid Input.');
    }
}

function budgetChecker(num) {
    if (typeof num === 'number') {
        if (num > 40000) {
            console.log('You are over the budget.');
        } else {
            console.log('You have resources left.');
        }
    } else {
        console.log('Invalid Input.');
    }
  }
  