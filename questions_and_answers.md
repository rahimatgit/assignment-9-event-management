1. let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer:-  A: {}
Explanation:- In the code you provided, there's a typo in the variable names. You've declared a variable called greetign instead of greeting, and you're assigning an empty object {} to it. When you log greetign to the console, it will print {}, which is an empty JavaScript object.

2. function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer:- C: "12"
Explanation:- sum(1, "2"); will return the string "12" (not the number 3) because JavaScript performs type coercion when you use the + operator with different types. In this case, it converts the number 1 to a string and then concatenates it with the string "2", resulting in the string "12".



3. const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer:- A: ['🍕', '🍫', '🥑', '🍔']
Explanation:- In the code, you initially create an array food containing four food emojis. Then, you create an object info with a property favoriteFood set to the first element of the food array, which is "🍕". However, in the next line, you reassign the info.favoriteFood property to "🍝". This reassignment doesn't affect the food array in any way, so when you log the food array to the console, it remains unchanged, containing the original elements.

4. function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer:- B: Hi there, undefined
Explanation:- the sayHi function expects an argument name to be provided when it's called. In the console.log(sayHi()); line, you didn't pass any argument to the sayHi function, so name inside the function is undefined, and when it tries to concatenate it with the string, it leads to the error.

5. let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer:- C: 3
Explanation:- three elements in the array are truthy (1, 2, and 3), so the count variable gets incremented three times, leading to a final value of 3. Therefore, when you log count to the console, it displays 3.