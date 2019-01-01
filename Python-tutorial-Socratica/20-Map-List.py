import math


def area(r):
    """Area of a circle with the radius 'r'."""
    return math.pi * (r ** 2)


radii = [2, 5, 7.1, 0.3, 10]

# Method 1: Direct method

areas = []
for r in radii:
    a = area(r)
    areas.append(a)
print(areas)

# Method 2: Use 'map' function
areas = list(map(area, radii))
print(areas)


import statistics

data = [1.3, 2.7, 0.8, 4.1, 4.3, -0.1]
avg = statistics.mean(data)
above_avg = list(filter(lambda x: x > avg, data))
print(above_avg)

from functools import reduce

# Multiply all numbers in a list
data = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
multiplier = lambda x, y: x * y
result = reduce(multiplier, data)
print(result)
