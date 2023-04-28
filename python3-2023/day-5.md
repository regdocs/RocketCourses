# Loops

Loops in Python allow you to repeatedly execute a block of code, either for a fixed number of times or until a specific condition is met. There are two types of loops in Python:

1. `for` loops
2. `while` loops

## `for` loops

The `for` loop in Python is used to iterate over a sequence of elements, such as a list or a tuple. Here is the basic syntax of a `for` loop:

```py
for variable in sequence:
    # code to be executed
```

In this syntax, `variable` is a new variable that takes on the value of each element in the `sequence` during each iteration of the loop. Here is an example of a `for` loop that iterates over a list of numbers and prints each number:

```py
numbers = [1, 2, 3, 4, 5]

for number in numbers:
    print(number)
```

This will output:

```
1
2
3
4
5
```

## What are the allowed `sequence`s?

These allowed sequences are called iterables in Python. In Python, an iterable is any object that can be looped over using a `for` loop or other iterator-based constructs. Here are some common types of iterables in Python:

1. **Range objects:** Range objects are iterable sequences of numbers that are often used to control the number of iterations in a loop.

	In Python, the `range()` function has two different ways it can be overloaded:

	- `range(stop)` - This form of the `range()` function returns a sequence of numbers starting from 0 and going up to (but not including) the specified `stop` value. For example, `range(5)` will return the sequence `(0, 1, 2, 3, 4)`.

	- `range(start, stop[, step])` - This form of the `range()` function returns a sequence of numbers starting from `start` and going up to (but not including) the specified `stop` value, incrementing by the specified `step` value. For example, `range(2, 10, 2)` will return the sequence `(2, 4, 6, 8)`.

	Note that the second form of the `range()` function is overloaded with an optional third argument `step`, which specifies the amount to increment by between each value in the sequence. If `step` is not provided, it defaults to 1.

	Here are some examples of using both forms of the `range()` function:

	```py
	# Using range(stop) to "run a loop 5 times"
	for i in range(5):
		print(i)
	# Output: 0 1 2 3 4

	# Using range(start, stop, step)
	for i in range(1, 10, 2):
		print(i)
	# Output: 1 3 5 7 9
	```

	In the first example, we use the `range()` function with a single argument `stop`. This returns a sequence of integers starting from 0 and going up to (but not including) the value 5.

	In the second example, we use the `range()` function with three arguments: `start`, `stop`, and `step`. This returns a sequence of integers starting from 1, going up to (but not including) 10, and incrementing by 2 each time.

1. **Lists:** Lists are ordered collections of objects that can be iterated over using a `for` loop or a list comprehension. They can contain any type of object, including other lists, tuples, and dictionaries.

	```py
	# create a list of integers
	my_list = [1, 2, 3, 4, 5]

	# loop over the list and print each value
	for num in my_list:
		print(num)
	```

2. **Tuples:** Tuples are similar to lists, but they are immutable, meaning they cannot be modified once created. They are often used to group related values together and pass them as a single object.

	```py
	# create a tuple of integers
	my_tuple = (1, 2, 3, 4, 5)

	# loop over the tuple and print each value
	for num in my_tuple:
		print(num)
	```

3. **Strings:** Strings are sequences of characters that can be iterated over using a `for` loop. They are also immutable, meaning they cannot be modified once created.

	```py
	# create a string
	my_string = 'hello, world!'

	# loop over the string and print each character
	for char in my_string:
		print(char)
	```

4. **Dictionaries:** Dictionaries are collections of key-value pairs that can be iterated over using a `for` loop. They are unordered, meaning the order in which the keys are returned is not guaranteed.

	```
	# create a dictionary of name and age
	ages = {'Alice': 25, 'Bob': 30, 'Charlie': 35}

	# loop over the dictionary and print each key-value pair
	for name in ages:
		print(f"{name} is {ages[name]} years old.")
	```

5. **Sets:** Sets are collections of unique objects that can be iterated over using a `for` loop. They are unordered, meaning the order in which the objects are returned is not guaranteed.

	```py
	# create a set of integers
	my_set = {1, 2, 3, 4, 5}

	# loop over the set and print each value
	for num in my_set:
		print(num)
	```

6. **Generators:** Generators are functions that use the `yield` keyword to lazily compute a sequence of values. They are iterable, meaning they can be looped over using a `for` loop.

	```py
	# define a generator function that generates the first n Fibonacci numbers
	def fibonacci(n):
		a, b = 0, 1
		for i in range(n):
			yield a
			a, b = b, a + b

	# use the generator to generate the first 10 Fibonacci numbers and print them
	for num in fibonacci(10):
		print(num)
	```

7. **Files:** Files in Python are iterable, meaning they can be looped over to read their contents line by line.

	```py
	# open a file for reading
	f = open('myfile.txt', 'r')
	
	# loop over the lines in the file and print each one
	for line in f:
		print(line)
	```

9. **Enumerations:** Enumerations are iterable objects that represent a set of named values. They are often used to define a fixed set of options for a program. Enums are useful because they allow you to define a type with a limited set of values, which can make your code more readable and maintainable.

	In Python, enums are defined using the `enum` module. Here is an example:

	```py
	from enum import Enum

	class Color(Enum):
		RED = 1
		GREEN = 2
		BLUE = 3
	```

	In this example, we define an enum called `Color` with three possible values: `RED`, `GREEN`, and `BLUE`. Each value is assigned an integer value (1, 2, or 3, respectively) which can be accessed as an attribute of the enum.

	Here are some examples of how to use this enum:

	```py
	# get the value of a single enum member
	print(Color.RED)  # Color.RED

	# get the integer value of a single enum member
	print(Color.RED.value)  # 1

	# loop over all enum members
	for color in Color:
		print(color)

	# check if an enum value is valid
	print(Color(2) == Color.GREEN)  # True
	print(Color(4) == Color.GREEN)  # False
	```

	In this example, we use the enum members as if they were constants. We can also access the integer value of an enum member using the `.value` attribute, and we can loop over all the members of the enum using a `for` loop. Finally, we can use the `Color()` constructor to check if a given value is a valid enum member.

In general, any object that implements the `__iter__()` or `__getitem__()` method can be treated as an iterable in Python. This makes it easy to create custom iterable objects that can be used with a `for` loop or other iterator-based constructs.

## Python `for` loops V/S `for` loops in C

The `for` loop in Python is quite different from the `for` loop in C. Here is a detailed analysis of the differences between the two languages:

1. Range-based for loop: In Python, the `for` loop is usually used with a sequence (such as a list or a tuple) using a range-based `for` loop. In C, the `for` loop is typically used with an index variable to iterate over an array or a container. The range-based `for` loop in Python is simpler and more intuitive than the index-based `for` loop in C.

2. No need to specify the size of the array: In Python, the `for` loop can iterate over any iterable object, regardless of its size. In C, the size of the array needs to be specified before the `for` loop. This can be a drawback because if the size of the array changes, the code needs to be modified accordingly. 

3. No increment operator: In Python, there is no need to update any variable inside the loop. The `for` loop automatically moves to the next element of the sequence. In C, the `for` loop typically uses an increment operator to update the index variable. This can be a drawback because it can make the code more complex and error-prone.

4. Nested loops: In Python, nested `for` loops are often used to iterate over two or more sequences simultaneously. In C, nested `for` loops are also used, but they are usually more complex because they involve index variables. 

5. The `range()` function: In Python, the built-in `range()` function is often used to generate a sequence of numbers that can be used in a `for` loop. In C, a `for` loop can also generate a sequence of numbers using the `for(int i=0; i<n; i++)` syntax, where `n` is the size of the sequence. 

Advantages of Python `for` loop:

- Simpler and more intuitive syntax for iterating over a sequence
- No need to specify the size of the sequence
- No need to update any variable inside the loop
- The `range()` function makes it easy to generate sequences of numbers

Drawbacks of Python `for` loop:

- Slower than C `for` loop, especially for large sequences, because of the overhead associated with range-based iteration and dynamic typing. 
- Not as flexible as C `for` loop because of its lack of index variables and post-block-execution condition checking. 

In summary, the Python `for` loop has a simpler and more intuitive syntax than the C `for` loop, but it can be slower and less flexible for some use cases.

## `while` loops

The `while` loop in Python is used to repeatedly execute a block of code while a specific condition is true. Here is the basic syntax of a `while` loop:

```py
while condition:
    # code to be executed
```

In this syntax, `condition` is a Boolean expression that is evaluated during each iteration of the loop. Here is an example of a `while` loop that counts down from 10 to 1:

```py
count = 10

while count > 0:
    print(count)
    count -= 1
```

This will output:

```
10
9
8
7
6
5
4
3
2
1
```

In this example, the `count` variable is decremented by 1 during each iteration of the loop, and the loop continues until the `count` variable is no longer greater than 0.

# 📝 Getting comfortable with Python's syntax

1. Print the first 10 natural numbers using for loop.
2. Python program to print all the even numbers within the given range.
3. Python program to calculate the sum of all numbers from 1 to a given number.
4. Python program to calculate the sum of all the odd numbers within the given range.
5. Python program to print a multiplication table of a given number
6. Python program to display numbers from a list using a for loop.
7. Python program to count the total number of digits in a number.
8. Python program to check if the given string is a palindrome.
9. Python program that accepts a word from the user and reverses it.
10. Python program to check if a given number is an Armstrong number
11. Python program to count the number of even and odd numbers from a series of numbers.
12. Python program to display all numbers within a range except the prime numbers.
13. Python program to get the Fibonacci series between 0 to 50.
14. Python program to find the factorial of a given number.
15. Python program that accepts a string and calculates the number of digits and letters.
16. Write a Python program that iterates the integers from 1 to 25.
17. Python program to check the validity of password input by users.
18. Python program to convert the month name to a number of days.

# 📝 Problems to try

1. Find the sum of the first `n` prime numbers.
2. Calculate the approximate value of `	π` using Leibniz's alternating series. The series formula is given as:
	![](https://camo.githubusercontent.com/e4fe341cb7552ab8d6aeca41c9dfe569f7b5372a81f3b3f3616bed710c1a6d1e/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e253341414e643947635273657246706a346d704b593473796575385463344138474c6b4e38723052734170546a5636665579514d695a7778696c38)
3. Calculate `f(x)` using their Taylor series expansion where `f` are the following trigonometric problems:
![](https://cdn.discordapp.com/attachments/1091719595552931881/1101510324437389312/158a0ae14d1c9e0d1dc21c268f7e2169b9066dc7.png)

1. Print the pattern:
	```js
	*
	**
	***
	****
	*****
	```

2. Find the sum of digits in a given number.

5. Implement the binary search algorithm to search for a given element in a sorted list.

6. Implement loops to generate an ASCII square spiral given the `"DOT"` element as input along with the `dimension` (edge length) of the spiral. An example is given below with 19 asterisk dots:
	```js

	 *******************                              
                     *
	 ***************** *
	 *               * *
	 * ************* * *
	 * *           * * *
	 * * ********* * * *
	 * * *       * * * *
	 * * * ***** * * * *
	 * * * *   * * * * *
	 * * * * *** * * * *
	 * * * *     * * * *
	 * * * ******* * * *
	 * * *         * * *
	 * * *********** * *
	 * *             * *
	 * *************** *
	 *                 *
	 *******************

	DOT "*" | DIMENSION 19
	```
