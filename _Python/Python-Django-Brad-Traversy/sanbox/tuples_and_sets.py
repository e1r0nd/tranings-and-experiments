# Tuples and Sets in Python

# Tuples
fruit_tuple = ("Apple", "Orange", "Mango")
print(fruit_tuple)
print(fruit_tuple[1])

numbers_tuple = tuple(("1", "2", "3"))
print(numbers_tuple)
del numbers_tuple  # remove this tuple

# Sets
fruit_set = {"Apple", "Orange", "Mango", "Apple"}
print(fruit_set)
print("Apple" in fruit_set)
fruit_set.add("Grapes")
fruit_set.remove("Apple")
print(fruit_set)

fruit_set.clear()
del fruit_set

print(fruit_set)
