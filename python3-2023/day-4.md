# Conditional Statements using `if`

In Python, "if" is a conditional statement used to execute a block of code if a particular condition is true. The syntax for the "if" statement in Python is as follows:

```py
if condition:
    # code to be executed if the condition is true
```

Here, the keyword "if" is used to indicate the beginning of the conditional statement. The "condition" is the expression that is evaluated to either true or false. If the condition is true, then the block of code indented under the "if" statement will be executed.

Here are a few example of `if`:

```py
>>> if not is_money_in_wallet():
...     # Value of function is_money_in_wallet()
...     # evaluates to True and the below expr.
...     # is executed.
...     fetch_from_atm()


>>> lonely = True
>>> if lonely:
...     print('''
... Looks like I'll be staying
... sad for a while longer...
... Thanks for the advice, computer.
...     ''')
```

More examples of `if` demonstrating use of `not` conditional operator:

```py
>>> has_money = False
>>> if has_money:
...     print("Let's go on a shopping spree!")
...
>>> if not has_money:
...    print("Looks like it's time to start counting pennies again.")


>>> is_hungry = True
>>> if is_hungry:
...     print("Time to raid the fridge!")
...
>>> if not is_hungry:
...     print("I guess I'll just skip breakfast again.")


>>> num = 4
>>> if num % 2 == 0:
...     print(num, "is even")
...
>>> if not num % 2 != 0:
...     print(num, "is odd")


>>> num = 5
>>> if num > 0:
...     print(num, "is positive")
...
>>> if not num < 0:
...     print(num, "is negative")
...
>>> if not num > 0 and not num < 0:
...     print(num, "is zero")

```

# What is `True`? What is `False`?

In Python, the following expressions evaluate to False:

- `False`: This is the boolean False value.
- `None`: This is a special constant in Python that represents the absence of a value.
- `0`: This is the integer 0.
- `0.0`: This is the float 0.0.
- `''` or `""`: This is an empty string.
- `[]`: This is an empty list.
- `()`: This is an empty tuple.
- `{}`: This is an empty dictionary.
- `set()`: This is an empty set.

**Any other value not mentioned above is considered True.**

It is important to keep in mind that the boolean values True and False are keywords in Python and should not be used as variable names. Also, the expressions that evaluate to False can be used as conditions in if statements, while expressions that evaluate to True will execute the block of code inside the if statement.

# Conditional statements using `if-else`

In Python, "if-else" is a conditional statement used to execute different blocks of code depending on whether a condition is true or false. The syntax of an "if-else" statement is:

```py
if condition:
    # code to execute if condition is true
else:
    # code to execute if condition is false
```

Here's an example that uses "if-else" to check if a number is positive or negative:

```py
num = -5

if num > 0:
    print(num, "is positive")
else:
    print(num, "is negative")
```

In this example, the condition "num > 0" is checked. If it evaluates to true (i.e., if "num" is positive), the message "-5 is positive" is printed. Otherwise, the message "-5 is negative" is printed.

**Note that the "else" clause is optional. If it is omitted, nothing will be executed if the condition is false.**

Optimised examples from above rewritten using `if-else` instead of `if`-and-`not`:

```py
>>> has_money = False
>>> if has_money:
...     print("Let's go on a shopping spree!")
... else:
...    print("Looks like it's time to start counting pennies again.")


>>> is_hungry = True
>>> if is_hungry:
...     print("Time to raid the fridge!")
... else:
...     print("I guess I'll just skip breakfast again.")


>>> num = 4
>>> if num % 2 == 0:
...     print(num, "is even")
... else:
...     print(num, "is odd")
```

# Conditional statements using `if-elif(-elif)-else`

In Python, "if-elif-else" is a conditional statement used to execute different blocks of code depending on multiple conditions. The syntax of an "if-elif-else" statement is:

```py
if condition1:
    # code to execute if condition1 is true
elif condition2:
    # code to execute if condition1 is false, but condition2 is true
elif condition3:
    # code to execute if condition1 and condition2 are both false, but condition3 is true
else:
    # code to execute if all conditions (1,2 & 3) are false
```

Here is an optimised version of a previously discussed example program:

```py
>>> num = 5
>>> if num > 0:
...     print(num, "is positive")
... elif num < 0:
...     print(num, "is negative")
... else:
...     print(num, "is zero")
```

Here's an example that uses "if-elif-else" to check the grade of a student based on their exam score:

```py
score = 85

if score >= 90 and score <= 100:
    grade = "A"
elif score >= 80 and score < 90:
    grade = "B"
elif score >= 70 and score < 80:
    grade = "C"
elif score >= 60 and score < 70:
    grade = "D"
elif score >= 50 and score < 60:
    grade = "E"
else:
    grade = "F"

print("Your grade is:", grade)
```

In this example, the condition "score >= 90" is checked first. If it is true, the grade is set to "A". If it is false, the next condition "score >= 80" is checked. If it is true, the grade is set to "B". This process continues until a condition is found to be true, or until all conditions are checked and found to be false. If all conditions are false, the "else" block is executed, and the grade is set to "F".

**📝 Think of ways to optimise the conditions of the above program.**

## Tips: ways to optimise "if-elif-else" statements

- Order your conditions based on the likelihood of them being true. If you have a range of values, order the conditions from smallest to largest or from largest to smallest.
    
- Use range-based conditions whenever possible. For example, if you are checking if a value is within a range of values, use the "and" operator to combine two conditions into a single condition.
    
- Avoid redundant conditions. If you have already checked a condition in a previous block, don't check it again in the next block.
    

# 📝 Problems to try

1.  Write a Python program that asks the user to enter their grade as a percentage, and then prints out their letter grade based on the following scale:
    
    - A: 95% and above
    - B: 85% to 94%
    - C: 75% to 84%
    - D: 65% to 74%
    - F: below 65%
    
    The program should use "if" statements to determine the letter grade based on the percentage entered by the user, and then print out the corresponding letter grade.
    
2.  Write a program to check if the input year is a leap year.
    
    ```
    The conditions for a leap year are based on the Gregorian calendar,
    which has a leap year every 4 years. However, there are some 
    exceptions to this rule.
    
    One of the exceptions is that years that are divisible by 100 are 
    not leap years, unless they are also divisible by 400. For example, 
    the year 1900 was not a leap year even though it was divisible by 
    4, because it is also divisible by 100 but not by 400. However, the 
    year 2000 was a leap year because it is divisible by both 100 and 
    400.
    
    This adjustment is necessary because the actual length of a year is 
    slightly less than 365.25 days. Without this adjustment, the 
    calendar would gradually drift from the actual solar year.
    
    The actual length of a tropical year (i.e., the time it takes the 
    Earth to complete one orbit around the sun) is about 365.2422 days, 
    which is slightly less than 365.25 days.
    
    To be more precise, the length of a tropical year is about 365 
    days, 5 hours, 48 minutes, and 46 seconds. This means that if we 
    simply added an extra day to the calendar every 4 years, the 
    calendar would be off by about 1 day after 100 years. By skipping 
    leap years that are divisible by 100 but not by 400, we can correct 
    for this discrepancy and keep the calendar accurate for many 
    centuries.
    ```
    
3.  Write a program that asks the user for their age, and then prints out a message based on their age. If the user is under 18, print "You are a minor." If the user is between 18 and 65, print "You are an adult." If the user is 65 or older, print "You are a senior citizen."
    
4.  Write a program that asks the user for their favorite color, and then prints out a message based on their color. If the user enters "blue", print "You have good taste." If the user enters "red", print "That's a bold choice." If the user enters "green", print "That's a calming color." If the user enters any other color, print "I'm not familiar with that color."
    
5.  Write a program that asks the user to enter a number, and then prints out a message based on whether the number is positive, negative, or zero. If the number is positive, print "The number is positive." If the number is negative, print "The number is negative." If the number is zero, print "The number is zero."
