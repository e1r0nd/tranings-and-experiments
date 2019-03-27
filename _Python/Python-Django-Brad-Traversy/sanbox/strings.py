name = "Brad"
age = 37

# Concatinate
print("Hello " + name + " and I am " + str(age) + " old")

# Arguments by position
print("{}, {}".format(name, age))
print("{1}, {2}, {0}".format("first", "second", "third"))
# Arguments by name
print("My name is {name} and I'm {age} years old".format(name="Yoda", age=100))

# F-Strings (Python 3.6+)
print(f"My name is {name} and I am {age}")

# String methods
s = "hello there, World"
print(s + " -> " + s.capitalize())
print(s + " -> " + s.upper())
print(s + " -> " + s.lower())
print(s + " -> " + s.swapcase())
print("string length: " + str(len(s)))
print(s + " -> " + s.replace("World", "everyone"))
