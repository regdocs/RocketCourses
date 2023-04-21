# Introduction to Namespaces in Python

<p align="center"><img src="https://media.geeksforgeeks.org/wp-content/uploads/types_namespace-1.png" width="30%" /></p>

In Python, a namespace is a mapping of names (i.e., identifiers) to objects. It defines the rules for how names are resolved in a program and determines which names can be accessed in which parts of the code.

There are several types of namespaces in Python:

1.  **Built-in namespace:** This is the namespace that contains all the built-in functions and types in Python, such as "print", "len", "str", etc.
    
2.  **Global namespace:** This is the namespace that contains all the names defined at the top level of a module, as well as any names imported into the module.
    
3.  **Local namespace:** This is the namespace that contains all the names defined within a function or method. It is created when the function or method is called and destroyed when it completes.
    

Namespaces are used to prevent naming conflicts between different parts of a program. For example, if you define a variable with the name "x" in one function, it will not conflict with a variable with the same name in another function because each function has its own local namespace.

## Scope resolution using `global` and `nonlocal` keywords

In Python, the "global" and "nonlocal" keywords are used to specify the scope of variables.

**The "global" keyword is used to declare a variable inside a function as a global variable, meaning it can be accessed and modified from anywhere in the program.** For example:

```py
x = 10

def func():
    global x
    x = 20

func()
print(x)  # Output: 20
```

In this example, we declare the variable "x" as a global variable inside the function "func" using the "global" keyword. Then, when we call the function and modify the value of "x", the change is reflected in the global variable.

**The "nonlocal" keyword is used to access and modify a variable from a nested function, i.e., a function defined inside another function.** For example:

```py
def outer():
    x = 10
    def inner():
        nonlocal x
        x = 20
    inner()
    print(x)  # Output: 20

outer()
```

In this example, we define a variable "x" inside the "outer" function and a nested function "inner". We declare "x" as nonlocal inside "inner" using the "nonlocal" keyword. Then, when we call "inner" and modify the value of "x", the change is reflected in the outer function's variable "x".
