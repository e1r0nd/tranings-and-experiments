import random


def random_walk(n):
    """Return Coordinates after 'n' block random walk."""
    x = 0
    y = 0
    for _ in range(n):
        step = random.choice(["N", "S", "E", "W"])
        if step == "N":
            y = y + 1
        elif step == "S":
            y = y - 1
        elif step == "E":
            x = x + 1
        elif step == "W":
            x = x - 1
    return (x, y)


for i in range(25):
    walk = random_walk(10)
    print(walk, "Distance from home = ", abs(walk[0]) + abs(walk[1]))
