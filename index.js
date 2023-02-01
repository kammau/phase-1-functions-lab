// Code your solution in this file!
function distanceFromHqInBlocks(someValue1) {
    if (someValue1 >= 42) {
        return someValue1 - 42
    } else if (someValue1 <= 42) {
        return 42 - someValue1
    }
}

function distanceFromHqInFeet(someValue2) {
    return distanceFromHqInBlocks(someValue2) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start >= end) {
        return (start - end)*264
    } else if (start <= end) {
        return (end - start)*264
    }
}

function calculatesFarePrice(start, destination) {
    let total = 0;
    if (start <= destination){
        total = (destination - start)*264
    } else if (start >= destination) {
        total = (start - destination)*264
    }
    if (total <= 400){
        return 0
    } else if (total > 400 && total <= 2000) {
        return (total - 400)* 0.02
    } else if (total > 2000 && total < 2500) {
        return 25
    } else if (total > 2500) {
        return "cannot travel that far"
    }
}