
year = +prompt("Enter the Year: ")

result = document.querySelector(".result")


if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {

    result.innerHTML = `${year} is a Leap Year.`
}
else {
    result.innerHTML = `${year} is not a Leap Year.`
}