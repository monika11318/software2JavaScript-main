mixed_array = [1, 2, 3, 4, 8, 12, 13]


function even(numbers) {
    even_array = numbers.filter((number) => number % 2 == 0)
    return even_array
}
console.log(`The original array is : ${mixed_array}`)
console.log(mixed_array)
even_array = even(mixed_array)
console.log(`The even filtered array is : ${even_array}`)
console.log(even_array)
