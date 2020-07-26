numbers = [1, 2, 3, 4, 5]
print(type(numbers), numbers)

digits = list({9, 8, 7, 6})
print(digits)

fruits = ["Apples", "Oranges", "Grapes", "Pears"]
print(fruits[1], len(fruits))

fruits.append("Mangos")
fruits.remove("Grapes")
fruits.insert(2, "Strawberies")
fruits.remove("Oranges")
fruits.pop(2)
print(f"Current list: {fruits}")
fruits.reverse()
print(f"Reversed list: {fruits}")
fruits.sort()
print(f"Sorted list: {fruits}")

