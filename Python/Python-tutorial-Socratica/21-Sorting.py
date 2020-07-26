planets = [("A", 1, -1), ("Z", 2, -2), ("B", 0, 0), ("Y", 4, -3), ("W", 3, -4)]

print("List:", planets)
size = lambda x: x[1]
planets.sort(key=size)
print("Sorted List:", planets)

abc = ["A", "Z", "B", "Y", "X"]
print("ABC:", abc)
cba = sorted(abc)
print("CBA:", cba)
