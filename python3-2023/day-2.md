# Elements of a Python program
In Python, a <u><b>token refers to the basic building blocks of the language</b></u>. A token is a sequence of characters that represents a single element of the program, such as a keyword, an identifier, a number, a string, an operator, or a punctuation symbol.

Here are the different types of tokens in Python:

 1. **Keywords:** These are reserved words that have a specific meaning in the language, such as `if`, `else`, `while`, `for`, `and`, `or`, `not`, `def`, `yield`, `nonlocal`, `global`, `class` etc.

 2. **Identifiers:** These are names given to variables, functions, classes, or modules. An identifier can consist of letters, digits, and underscores, but *it cannot start with a digit*.
	 - List of valid identifiers:
		 - `my_variable`
		 - `number_of_items`
		 - `hello_world`
		 - `myFunction`
	     - `MyClass`
		 - `_private_variable`
		 - `__private_variable`

		In general, identifiers can consist of letters (both uppercase and lowercase), digits, and underscores. However, they cannot start with a digit. Also, Python is case-sensitive, so `my_variable` and `My_Variable` are considered to be different identifiers. Here are a few examples of invalid identifiers:
		- **Keywords:** You cannot use keywords as identifiers. Keywords are reserved words that have a special meaning in the language, such as "if", "else", "while", and "for".
	    - **Punctuation:** You cannot use punctuation characters such as dots (".") or hyphens ("-") in identifiers.
        - **Spaces:** You cannot use spaces in identifiers. Instead, you can use underscores ("_") to separate words.
        - **Starting with a digit:** Identifiers cannot start with a digit.
        - **Special characters:** Identifiers cannot contain special characters such as "$" or "@".
        <br />
	
		```py
		if = 10     # "if" is a keyword
		my-variable = 20     # "-" is not allowed in identifiers
		my identifier = 30   # spaces are not allowed in identifiers
		7colors = ["red", "orange", "yellow"]   # Identifiers cannot start with a digit
		$price = 9.99     # "$" is not allowed in identifiers
		```

 3. **'Soft' keywords:**  In Python, there are a few keywords that are considered "soft" keywords, which means that *they are not reserved words in the language and can be used as identifiers (variable names, function names, etc.) without causing a syntax error*. However, it is generally not recommended to use these soft keywords as identifiers, as it can make the code less readable and harder to maintain.

	The following are the soft keywords in Python:
	 - `async`
	 - `await`
	 - `as`
	 - `match`
	 - `case`

	Keep in mind that *in future versions of Python, these soft keywords may become reserved words, which means that they will no longer be allowed as identifiers*. Therefore, it is best to avoid using them as identifiers in your code.

 4. **Literals:** These are values that are directly written into the code, such as numbers (integers, floating-point, complex), strings (text enclosed in quotes), and Boolean values (True or False). Here is a list of all the literals supported in Python:

	- Numeric literals:
		- Integer literals: `42`, `-10`, `0x1F`, `0b101010`, `0o11`
		- Floating-point literals: `3.14`, `-0.5`, `1.23e9`
		- Complex literals: `3 + 4j`, `1j`, `-2.5`, `-0.5j`
	- String literals:
		- Single-quoted: `'hello world'`, `'don\'t'`
		- Double-quoted: `"hello world"`, `"don't"`
		- Triple-quoted: `'''hello\nworld'''`, `"""hello\nworld"""`
	- Boolean literals: `True`, `False`
	- None literal: `None`
	- Container literals:
		- List literals: `[1, 2, 3]`, `[]`
		- Tuple literals: `(1, 2, 3)`, `()`
		- Set literals: `{1, 2, 3}`, `set()`
		- Dictionary literals: `{'a': 1, 'b': 2}`, `{}`
	- Ellipsis literal: `...`
	- Special string literals: b'hello', b""""hello\nworld""""
Note that the syntax for numeric literals allows for different bases (hexadecimal and binary), as well as scientific notation for floating-point literals. String literals can be single-quoted, double-quoted, or triple-quoted, and can contain escape sequences to represent special characters. Container literals allow you to create lists, tuples, sets, and dictionaries with a sequence of elements enclosed in brackets or braces. The Ellipsis literal (...) is used in advanced slicing syntax, and the bytes literal (b'hello') is used to represent a sequence of bytes.

 5. **Operators:** These are symbols that perform arithmetic, logical, or comparison operations. Python operators are as follows:
	- Arithmetic operators:
		- `+` (addition)
		- `-` (subtraction)
		- `*` (multiplication)
		- `/` (division)
		- `//` (floor division)
		- `%` (modulus)
		- `**` (exponentiation)
	- Comparison Operators:
		- `==` (equal to)
		- `!=` (not equal to)
		- `<` (less than)
		- `>` (greater than)
		- `<=` (less than or equal to)
		- `>=` (greater than or equal to)
	- Assignment Operators:
		- `=` (simple assignment)
		- `+=` (add and assign)
		- `-=` (subtract and assign)
		- `*=` (multiply and assign)
		- `/=` (divide and assign)
		- `//=` (floor divide and assign)
		- `%=` (modulus and assign)
		- `**=` (exponentiation and assign)
		- `&=` (bitwise AND and assign)
		- `|=` (bitwise OR and assign)
		- `^=` (bitwise XOR and assign)
		- `<<=` (left shift and assign)
		- `>>=` (right shift and assign)
	- Logical Operators:
		- `and` (logical AND)
		- `or` (logical OR)
		- `not` (logical NOT)
	- Bitwise Operators:
		- `&` (bitwise AND)
		- `|` (bitwise OR)
		- `^` (bitwise XOR)
		- `~` (bitwise NOT)
		- `<<` (left shift)
		- `>>` (right shift)
	- Membership Operators:
		- `in` (membership test)
		- `not in` (negated membership test)
	- Identity Operators:
		- `is` (object identity)
		- `is not` (negated object identity)
		Note that some of these operators (such as and, or, not, in, and is) are also keywords in Python, and have special meanings in certain contexts.

 6. **Punctuation:** These are symbols that are used to structure the code, such as brackets `{}` `[]`, parentheses `()`, commas `,`, semicolons `;`, colons `:`, periods `.`, etc.

Python uses a lexer to break down the program into individual tokens before it is compiled or interpreted. This allows the Python interpreter to understand the meaning of the code and execute it accordingly.

## Spot the keywords:
```py
import math
from collections import deque

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

def fibonacci(n):
    a, b = 0, 1
    for i in range(n):
        yield a
        a, b = b, a + b

def main():
    x = 5
    y = 10
    z = x + y
    print(f"The sum of {x} and {y} is {z}.")

    name = "Alice"
    age = 25
    person = Person(name, age)
    person.say_hello()

    numbers = [1, 2, 3, 4, 5]
    even_numbers = [num for num in numbers if num % 2 == 0]
    print(f"The even numbers in {numbers} are {even_numbers}.")

    queue = deque(["Alice", "Bob", "Charlie"])
    queue.append("Dave")
    queue.popleft()
    print(f"The current queue is {queue}.")

    radius = 5
    area = math.pi * radius ** 2
    print(f"The area of a circle with radius {radius} is {area:.2f}.")

    for i, fib in enumerate(fibonacci(10)):
        print(f"The {i+1}th Fibonacci number is {fib}.")

if __name__ == "__main__":
    main()
```

# Boolean data type
In Python, *bool* is a built-in data type that represents Boolean values. A Boolean value can be either True or False.

Boolean values are often used in decision making and conditional statements to determine which code path to take.

Here's an example:

```python
x = 5
y = 10
z = x < y  # z is now True
```

In this example, z is assigned the value of True because x is less than y.


