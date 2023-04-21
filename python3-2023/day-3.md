# Number Systems in Python: Binary, Octal, Decimal & Hexadecimal
In Python, you can represent different number system literals using prefixes before the number. Here are some common number system prefixes and their meanings:

1. `0b` (**prefix: binary literal**) Binary literals are numbers expressed in base 2 using only two digits, 0 and 1. For example:

   ```python
   a = 0b1010  # binary representation of 10
   b = 0b1111  # binary representation of 15
   ```

2. `0o` (**prefix: octal literal**) Octal literals are numbers expressed in base 8 using digits from 0 to 7. For example:

   ```python
   a = 0o10  # octal representation of 8
   b = 0o20  # octal representation of 16
   ```

3. `0x` (**prefix: hexadecimal literal**) Hexadecimal literals are numbers expressed in base 16 using digits from 0 to 9 and letters from A to F (case-insensitive). For example:

   ```python
   a = 0x10  # hexadecimal representation of 16
   b = 0xFF  # hexadecimal representation of 255
   ```

4. No prefix: (**decimal literal**) Decimal literals are numbers expressed in base 10 using digits from 0 to 9. For example:

   ```python
   a = 10   # decimal representation of 10
   b = 123  # decimal representation of 123
   ```

Note that Python automatically converts numbers to decimal format unless a prefix is specified. For example, the following code will interpret `10` as a decimal number:

```python
a = 10   # decimal representation of 10
b = 0b1010   # binary representation of 10

print(a == b)  # Output: True
```

In this example, we're comparing `a` and `b`, which are both equal to 10 in different number systems. However, since we haven't used a prefix for `a`, Python will automatically interpret it as a decimal number. Since `b` is explicitly defined as a binary number with the `0b` prefix, the comparison works as expected.

# Bitwise Operators in Python

In Python, there are six bitwise operators that operate on integer operands at the bit level. These operators are:

- `&` **(bitwise AND):** performs a bitwise AND operation between two integers, resulting in a new integer where each bit is set to 1 only if the corresponding bits of both operands are 1.
- `|` **(bitwise OR):** performs a bitwise OR operation between two integers, resulting in a new integer where each bit is set to 1 if the corresponding bits of either operand are 1.
- `^` **(bitwise XOR):** performs a bitwise XOR (exclusive OR) operation between two integers, resulting in a new integer where each bit is set to 1 only if the corresponding bits of the two operands are different.
- `~` **(bitwise NOT):** performs a bitwise NOT operation on a single integer, resulting in a new integer where each bit is inverted (i.e., 0s become 1s and vice versa).
- `<<` **(bitwise left shift):** shifts the bits of an integer to the left by a specified number of positions, effectively multiplying the integer by 2 to the power of the shift amount.
- `>>` **(bitwise right shift):** shifts the bits of an integer to the right by a specified number of positions, effectively dividing the integer by 2 to the power of the shift amount.

Here's an example of how to use these operators in Python:

```py
a = 0b1010  # binary representation of 10
b = 0b1100  # binary representation of 12

# Bitwise AND
print(a & b)  # Output: 0b1000 (binary representation of 8)

# Bitwise OR
print(a | b)  # Output: 0b1110 (binary representation of 14)

# Bitwise XOR
print(a ^ b)  # Output: 0b0110 (binary representation of 6)

# Bitwise NOT
print(~a)  # Output: -11 (binary representation of -0b1011)

# Bitwise left shift
print(a << 2)  # Output: 0b101000 (binary representation of 40)

# Bitwise right shift
print(b >> 2)  # Output: 0b0011 (binary representation of 3)
```

In the above example, we use the `0b` prefix to represent the binary values of the variables a and b. We then perform each of the six bitwise operations using the appropriate operator, and print the result in binary format using the bin() function.

### Why use Binary Number System to show bitwise operations?
Binary system is used to show bitwise operations because it is a natural way to represent the state of individual bits. Each digit in binary (0 or 1) represents the state of a single bit, which is either "on" or "off" (1 or 0). This makes binary a convenient way to express the state of a group of bits, such as those involved in bitwise operations.

# The Bitwise `&` Operator
The bitwise AND operator (`&`) is a binary operator that takes two integer operands and performs a bitwise AND operation on their binary representations. The resulting value is an integer where each bit is set to 1 only if the corresponding bits of both operands are also 1. If either of the bits is 0, then the resulting bit is also set to 0.

Here's an example of how to use the bitwise AND operator in Python:

```python
a = 0b1010  # binary representation of 10
b = 0b1100  # binary representation of 12

c = a & b   # bitwise AND of a and b
print(bin(c))  # Output: 0b1000 (binary representation of 8)
```

In the above example, we use the `&` operator to perform a bitwise AND operation on the binary representations of the variables `a` and `b`. The resulting value is assigned to the variable `c`, which is then printed in binary format using the `bin()` function.

In this example, the binary representation of `a` is `0b1010` and the binary representation of `b` is `0b1100`. When we perform the bitwise AND operation, we get the following result:

```py
   1010  # binary representation of a
 & 1100  # binary representation of b
 -------
   1000  # binary representation of the bitwise AND of a and b
```

So the resulting binary value is `0b1000`, which is equal to the decimal value 8.

The bitwise AND operation is commonly used in computer programming for tasks such as:

1. **Masking:** The AND operation can be used to mask off specific bits of a binary number, by ANDing it with a bit mask that has a 0 in the position of the bit you want to mask off.

2. **Bit testing:** The AND operation can be used to test if a specific bit in a binary number is set or not. By ANDing the number with a bit mask that has a 1 in the position of the bit you want to test, you can get a non-zero result if the bit is set, and a zero result if the bit is not set.

3. **Clearing bits:** The AND operation can be used to clear specific bits in a binary number. By ANDing the number with a bit mask that has a 0 in the position of the bit you want to clear, you can set that bit to zero.

4. **Boolean logic:** The AND operation is one of the basic operations in Boolean logic, and is used to combine two Boolean values into a single value. For example, in an if statement, the condition is evaluated using the AND operator to check if two conditions are both true.

# The Bitwise `|` Operator
The bitwise OR operator in Python is represented by the symbol `|`. It is a binary operator that takes two integer operands and performs a bitwise OR operation on their binary representations. The resulting binary representation is the bit-by-bit OR of the two operands.

The bitwise OR operation sets each bit of the result to 1 if either of the corresponding bits in the operands is 1. Otherwise, the bit is set to 0.

Here's an example of using the bitwise OR operator in Python:

```py
# Bitwise OR of 7 and 10
x = 7 | 10

# x is now 15
print(x)  # Output: 15

# Binary representation of 7 and 10
# 7: 111
# 10: 1010
# OR: 1111 (15)
```

In this example, we perform a bitwise OR operation on the integers 7 and 10. The resulting binary representation is `1111`, which is equivalent to the decimal value of 15. Therefore, the value of the variable `x` is set to 15.

The bitwise OR operation is commonly used in computer programming for tasks such as:

1. **Bitwise union:** The OR operation can be used to combine two binary numbers, by taking the union of their bits. Any bit that is set in either of the input numbers will be set in the result.

2. **Setting bits:** The OR operation can be used to set specific bits in a binary number. By ORing the number with a bit mask that has a 1 in the position of the bit you want to set, you can set that bit to 1.

3. **Boolean logic:** The OR operation is one of the basic operations in Boolean logic, and is used to combine two Boolean values into a single value. For example, in an if statement, the condition is evaluated using the OR operator to check if at least one of two conditions is true.

Overall, the bitwise OR operation is a powerful tool in computer programming for manipulating binary data, setting bits, and performing Boolean logic operations.

# The Bitwise `~` Operator
The bitwise NOT operator in Python is represented by the symbol `~`. It is a unary operator that takes a single integer operand and performs a bitwise NOT operation on its binary representation. The resulting binary representation is the bit-by-bit complement of the operand.

The bitwise NOT operation inverts each bit of the operand, setting 0 bits to 1 and 1 bits to 0.

Here's an example of using the bitwise NOT operator in Python:

```py
# Bitwise NOT of 7
x = ~7

# x is now -8
print(x)  # Output: -8

# Binary representation of 7 and -8
# 7: 111
# -8: 11111111111111111111111111111000
# NOT: 11111111111111111111111111111000 (-8)
```

In this example, we perform a bitwise NOT operation on the integer 7. The resulting binary representation is `11111111111111111111111111111000`, which is equivalent to the decimal value of -8 (in two's complement representation).

The bitwise NOT operation is commonly used in computer programming for tasks such as:

1. **Bitwise complement:** The NOT operation can be used to flip all the bits in a binary number, turning every 0 to a 1, and every 1 to a 0. This is sometimes called the bitwise complement of the number.

2. **Creating bit masks:** The NOT operation can be used to create bit masks with a specific pattern of 1s and 0s. For example, if you want to create a bit mask with all bits set to 1 except for a single bit, you can start with a mask of all 1s, and then use the NOT operation to set the desired bit to 0.

3. **Boolean logic:** The NOT operation is one of the basic operations in Boolean logic, and is used to negate a Boolean value. For example, in an if statement, the condition can be negated using the NOT operator to check if the condition is false.

# The Bitwise `^` Operator

## The XOR Gate
In digital logic, an XOR (exclusive OR) gate is a logic gate that gives an output of 1 if the number of inputs with a value of 1 is odd, and 0 otherwise. An XOR gate takes two or more binary inputs and produces a single binary output. 

The XOR gate truth table looks like this:


| Input `A` | Input `B` | Output = `A𐄁B' + A'𐄁B` |
|---------|---------|--------|
|    0    |    0    |   0    |
|    0    |    1    |   1    |
|    1    |    0    |   1    |
|    1    |    1    |   0    |


As you can see from the truth table, the output of an XOR gate is 1 only if the inputs are different, and 0 if they are the same.

The XOR gate, also known as the exclusive OR gate, is a fundamental building block in digital electronics. It is a two-input logic gate that produces a high output only when its inputs are different. Otherwise, it produces a low output.

The XOR gate has several important applications in electronics, including:

1. **Addition:** In digital electronics, addition can be performed using XOR gates. For example, consider two bits A and B. The sum of A and B can be obtained using an XOR gate, and the carry bit can be obtained using an AND gate. This forms the basis of the binary adder circuit.

2. **Subtraction:** XOR gates can also be used in subtraction circuits. By combining XOR gates with other logic gates such as NOT gates and AND gates, a subtractor circuit can be created.

3. **Error detection and correction:** XOR gates are commonly used in error detection and correction circuits. In a simple parity checking circuit, a string of data bits is XORed together to generate a parity bit. The parity bit is then sent along with the data, and the receiver can check for errors by re-XORing the data and checking that the result matches the parity bit.

4. **Data encryption:** XOR gates can be used in encryption circuits to scramble the data. By XORing the data with a key, the data can be encrypted. To decrypt the data, the same key is XORed with the encrypted data.

5. **Clock synchronization:** XOR gates are used in clock synchronization circuits to align two clocks that have a small phase difference. By XORing the two clock signals, a pulse is generated when the clocks are out of phase, which can be used to adjust the phase of one of the clocks.


## XOR (`^`) in Python
The bitwise XOR (exclusive OR) operator in Python is represented by the caret symbol (^). The XOR operator compares the corresponding bits of two operands and sets the corresponding bit in the result to 1 if the bits are different, and to 0 if the bits are the same.

Here's an example of the XOR operator in action:

```py
a = 10  # binary: 1010
b = 6   # binary: 0110

c = a ^ b

print(c)  # output: 12 (binary: 1100)
```

In the example above, we're XOR-ing the binary representations of the integers 10 and 6. The binary representation of 10 is "1010" and the binary representation of 6 is "0110". When we XOR these two values, we get "1100", which is the binary representation of the integer 12.

To better understand how the XOR operator works, let's look at the bitwise operation in more detail:

```py
  1 0 1 0    # a (binary)
X 0 1 1 0    # b (binary)
---------
  1 1 0 0    # c (binary)
```

The first bit of `a` is 1, and the first bit of `b` is 0. These bits are different, so the first bit of `c` is set to 1. The second bit of `a` is 0, and the second bit of `b` is 1. Again, these bits are different, so the second bit of `c` is set to 1. The third and fourth bits of `a` and `b` are the same, so the corresponding bits of `c` are set to 0.

Therefore, the final result of the XOR operation is "1100", which is the binary representation of the integer 12.

The bitwise XOR operation is commonly used in computer programming for tasks such as:

1. **Bitwise toggle:** The XOR operation can be used to toggle a specific bit in a binary number. By XORing the number with a bit mask that has a 1 in the position of the bit you want to toggle, you can flip the value of that bit.

2. **Encryption:** The XOR operation is used in cryptography and encryption algorithms to scramble data. By XORing the data with a secret key, the data can be transformed into an unreadable form, which can then be decrypted by performing the same XOR operation with the same key.

3. **Error detection and correction:** The XOR operation is used in error detection and correction algorithms. By XORing the bits of a message with a check value, errors in the message can be detected. By XORing the bits of the message with the check value again, the errors can be corrected.

4. **Masking:** The XOR operation can be used to mask specific bits in a binary number. By XORing the number with a bit mask that has a 0 in the position of the bit you want to mask, you can set that bit to 0 without affecting any of the other bits.

Overall, the bitwise XOR operation is a versatile tool in computer programming for manipulating binary data, performing encryption and cryptography, error detection and correction, and masking specific bits in a binary number.

# The Bitwise `<<` Operator
The left shift operator (`<<`) is a bitwise operator in Python that shifts the bits of a number to the left by a specified number of positions. The syntax for the left shift operator is `a << b`, where `a` is the number to be shifted and `b` is the number of positions to shift it.

The left shift operation works by moving all the bits in the number to the left by the specified number of positions. The bits that are shifted off the left end of the number are lost, and the empty bit positions on the right are filled with zeros.

Here is an example of how the left shift operator works:

```py
>>> a = 10      # binary representation of 10 is 1010
>>> b = 2
>>> c = a << b  # shift a to the left by 2 positions
>>> bin(c)     # convert the result to binary
'0b101000'
```

In this example, the number 10 is represented in binary as 1010. When we shift it to the left by two positions, we get the number 40, which is represented in binary as 101000.

Note that left shifting a number by `n` positions is equivalent to multiplying the number by 2 to the power of `n`. So `a << b` is the same as `a * (2**b)`.

The bitwise left shift operation is commonly used in computer programming for tasks such as:

1. **Multiplication by powers of 2:** Shifting a binary number to the left by n positions is equivalent to multiplying it by 2^n. This property is frequently used in computer programming to perform multiplication by powers of 2 quickly and efficiently.

2. **Creating bit masks:** Bit masks are often used in computer programming to select or isolate specific bits in a binary number. Shifting a 1 to the left by n positions creates a bit mask with a 1 in the nth position and 0s elsewhere. By using bitwise OR and AND operations with this mask, specific bits can be selected or isolated.

3. **Packing and unpacking data:** In some cases, data may be stored in a series of bytes, and the individual bits need to be extracted or combined. The bitwise left shift operation can be used to pack bits into a byte or to unpack bits from a byte.

# The Bitwise `>>` Operator
The right shift operator (`>>`) is a bitwise operator in Python that shifts the bits of a number to the right by a specified number of positions. The syntax for the right shift operator is `a >> b`, where `a` is the number to be shifted and `b` is the number of positions to shift it.

The right shift operation works by moving all the bits in the number to the right by the specified number of positions. The bits that are shifted off the right end of the number are lost, and the empty bit positions on the left are filled with zeros if the number being shifted is non-negative. However, if the number being shifted is negative, then the empty bit positions on the left will be filled with ones.

Here is an example of how the right shift operator works:

```py
>>> a = 10      # binary representation of 10 is 1010
>>> b = 2
>>> c = a >> b  # shift a to the right by 2 positions
>>> bin(c)     # convert the result to binary
'0b10'
```

In this example, the number 10 is represented in binary as 1010. When we shift it to the right by two positions, we get the number 2, which is represented in binary as 10.

Note that right shifting a number by `n` positions is equivalent to dividing the number by 2 to the power of `n`. So `a >> b` is the same as `a // (2**b)`.

The bitwise right shift operation is commonly used in computer programming for tasks such as:

1. **Division by powers of 2:** Shifting a binary number to the right by n positions is equivalent to dividing it by 2^n. This property is frequently used in computer programming to perform division by powers of 2 quickly and efficiently.

2. **Extracting or discarding bits:** The bitwise right shift operation can be used to extract specific bits from a binary number by shifting the desired bits to the rightmost position and then using a bitwise AND operation with a mask. It can also be used to discard the least significant bits of a number by shifting them off the right end.

3. **Implementing bit fields:** Bit fields are often used in computer programming to store multiple values in a single variable, with each value occupying a specific number of bits. The bitwise right shift operation can be used to align and extract the individual bit fields.

# 📝 Problems to try out (if you are a bitwise enthusiast)

1. Bitwise AND: Write a program to check if a given number is even or odd using the bitwise AND operator.
2. Bitwise OR: Write a program to swap two integers using the bitwise OR operator.
3. Bitwise NOT: Write a program to invert the bits in a given integer using the bitwise NOT operator.
4. Bitwise XOR: Write a program to find the missing number in an array of integers using the bitwise XOR operator.
5. Bitwise left shift: Write a program to multiply a given number by 2^n using the bitwise left shift operator.
6. Bitwise right shift: Write a program to divide a given number by 2^n using the bitwise right shift operator.
7. Bit manipulation: Write a program to set, clear or toggle specific bits in a given integer using bitwise operators.
8. Bitwise operations on strings: Write a program to perform bitwise operations on two binary strings of equal length, such as XOR or AND.
9. Set or clear a bit at a specific position: Write a program to set or clear a bit at a specific position in a given number using bitwise OR and NOT operators.
10. Bitwise operations on sets: Write a program to perform bitwise operations on sets represented as bit masks, such as intersection or union.
11. Check if a number is a power of two: Write a program to check if a given number is a power of two using the bitwise AND operator.
12. Swap two variables: Write a program to swap two variables without using a third variable, using the bitwise XOR operator.
13. Get the absolute value of a number: Write a program to get the absolute value of a given number using the bitwise AND operator.
14. Count the number of set bits in a number: Write a program to count the number of set bits (bits with a value of 1) in a given number using bitwise AND and right shift operators.
15. Reverse the bits in a number: Write a program to reverse the bits in a given number using bitwise AND, left shift, and right shift operators.
16. Check if two numbers have opposite signs: Write a program to check if two given numbers have opposite signs using bitwise XOR and right shift operators.
17. Check if a given number is a palindrome: Write a program to check if a given number is a palindrome (reads the same forwards and backwards) using bitwise AND and left shift operators.
18. Get the maximum of two numbers: Write a program to get the maximum of two given numbers using bitwise AND, OR, and XOR operators.
19. Find all subsets of a given set using the concept of switches and combination of bits.
