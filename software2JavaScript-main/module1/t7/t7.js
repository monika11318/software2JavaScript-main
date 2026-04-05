
number_of_dice = +prompt("Enter the number of dice.")

sum = 0
for (i = 0; i < number_of_dice; i++) {
    rolled_number = Math.floor(Math.random() * 6) + 1
    sum += rolled_number
}

document.querySelector(".result").innerHTML = `The Sum of ${number_of_dice} Rolled Dice is ${sum}`

