# History of Programming
 - What is a **program**?
 - **Programming 200 years back** v/s **Programming in a versatile modern computer in the 21st century**
	 - [Difference engine (circa 1822)](https://en.wikipedia.org/wiki/Difference_engine)
	 - [Colossus Mark I (1943) - World War II](https://en.wikipedia.org/wiki/Colossus_computer)
 - Key milestones in digital computing after invention of **Colossus Mark I**:
    - 1943: Colossus Mark I, the world's first programmable electronic digital computer, is built in the UK to help with code-breaking during World War II.
	- 1945: The Electronic Numerical Integrator and Computer (ENIAC) is built in the US by John Mauchly and J. Presper Eckert. It's the first general-purpose electronic computer.
	- 1949: The Manchester Mark 1 is built in the UK, which is the first computer to have a stored-program architecture.
	- 1951: The UNIVAC I (Universal Automatic Computer I) is built in the US, which is the first computer to be produced in quantity and sold commercially.
	- 1957: The FORTRAN (FORmula TRANslation) programming language is developed by John Backus and his team at IBM.
	- 1964: IBM introduces the System/360 mainframe computer, which allows customers to upgrade from smaller systems to larger ones without having to rewrite their software.
	- 1969: The ARPANET, the precursor to the modern internet, is created by the US Department of Defense's Advanced Research Projects Agency (ARPA).
	- 1971: Intel introduces the first microprocessor, the Intel 4004, which is a single-chip CPU designed for use in calculators.
	- 1972: Intel introduces the 8008, an 8-bit microprocessor that was the predecessor to the 8080 and the 8085.
	- 1974: Intel introduces the 8080, an 8-bit microprocessor that was widely used in early personal computers.
	- 1976: Intel introduces the 8085, an improved version of the 8080 with more features and better performance.
	- 1976: Apple Computer is founded by Steve Jobs and Steve Wozniak and releases the Apple I personal computer kit.
	- 1978: Intel introduces the 8086, a 16-bit microprocessor that was the first in the x86 family of processors and the basis for the IBM PC.
	- 1981: IBM introduces the IBM PC, which becomes the dominant platform for personal computing in the 1980s and 1990s, which uses the 8088, a variant of the 8086 with an 8-bit external bus.
	- 1984: Apple introduces the Macintosh personal computer, which features a graphical user interface and a mouse.
	- 1985: Intel introduces the 80386, a 32-bit processor that greatly improved the performance of personal computers.
	- 1991: The World Wide Web is introduced by Tim Berners-Lee, a computer scientist at CERN in Switzerland.
	- 1993: The Pentium processor is introduced by Intel, which becomes one of the most successful microprocessors in history.
	- 2001: Apple introduces the iPod portable media player, which revolutionizes the music industry.
	- 2006: Intel introduces the Core microarchitecture, which greatly improves the performance and power efficiency of its processors.
	- 2007: Apple introduces the iPhone smartphone, which revolutionizes the mobile phone industry.
	- 2010: Apple introduces the iPad tablet computer, which revolutionizes the tablet market.
	- 2011: IBM's Watson computer defeats two human champions on the quiz show Jeopardy!, demonstrating the power of artificial intelligence and natural language processing.
 - Why we need a programming language: **ambiguity of human languages**

# Introduction to Python 3
 - *Hello World* in Python interactive shell mode/IDLE

	```python
	>>> print("Hello World")
	```
	
 - **Programming in Python 3**: a rudimentary functional approach
 
	 ```py
	 >>> # Program: actual.py
	 >>> # A simple program illustrating Python tokens
	 >>> # This is a single line comment
	 >>> 
	 >>> # Prints to console/terminal
	 >>> print("Hi, this is my first actual program in Python 3")
	 >>> 
	 >>> # input(): Prints the argument string and waits for user input and a LINEFEED
	 >>> # The user input until just before the LINEFEED is 
	 >>> # stored as a 'string' in a newly created 'variable' x
	 >>> x = input("Enter your name: ")
	 >>> 
	 >>> # Prints "Woah, ", then the string stored in x, then
	 >>> # " is a beautiful name!"
	 >>> print("Woah, " + x + " is a beautiful name!")
	 >>> 
	 >>> # End of actual.py
	 ```
	
### 📝 Programs to try:
1. Write a program in the interactive shell to input the *name* and *age* of the user and print the corresponsing information as a formatted string:

	 ```sh
	'Hello, {name}! You are {age} years old'
	```
3. Write a program in the interactive shell to input a string and print its length as a formatted string: `'x is {length} characters long'`. (**Hint:** use function `len()` with the string variable as its argument.)

# Algorithmic Intuition: Thinking Discrete like a Computer
 - **Think:** "find the sum of my number and 20, and say the result out loud"
 - A program to add a given number 45 to an input number

	 ```py
	 >>> # Program: sum.py
	 >>> # A simple program to add 20 to a number
	 >>> 
	 >>> x = input("Enter a number: ")
	 >>> x = int(x)
	 >>> x = x + 45
	 >>> 
	 >>> print("45 added to the number is " + x)
	 ```
*(What are Python datatypes?)*

### 📝 Programs to try:

1. Take the above example of the program and modify the output to print: 

	```sh
	'{input_number} + 45 = {x}'
	``` 

	**INSTEAD OF:**

	```sh
	'45 added to the number is {x}'
	```
	
	Notice, other than in the `print(...)` statement, what other changes are necessary.

2. Write a program in interactive shell to input three numbers and print their sum formatted as:

	```sh
	'{number1} + {number2} + {number3} = {sum}'
	```
	
# Defining our own functions
 - A function is a block of code which **only runs when it is 'called'**. You can pass data, known as *parameters* or *arguments*, into a function. A function can **return data** as a result, or **return nothing**.
	 - Example 1
	
		```python
		>>> def greet(x):
		...     print("Hello, " + x + "!")
		... 
		>>> greet("Bill")
		>>> greet("Steve")
		```
	- Example 2

		```python
		>>> def printsum(x, y):
		...     s = x + y
		...     print("The sum of " + x + " and " + y + " is " + s)
		... 
		>>> def getsum(x, y):
		...     s = x + y
		...     return s
		... 
		>>> printsum(3, 77)
		>>> getsum(45, 32)
		```

### 📝 Programs to try:

1. Write two functions `getprod(x, y)` and `printprod(x, y)` in the same fashion as above and call them in main. Acknowledge the distinction between a function that 'returns' a result and one that doesn't.
2. Write to program to input the name of a character to 'kill' and the number of bullets required to do so. Write a function `kill(n, b)` that takes two parameters as input: `n` (the name of the character to kill), and `b` (the number of bullets) and make it print the following message to the console:

	```sh
	'{n} was killed with {b} bullets :P'
	```
