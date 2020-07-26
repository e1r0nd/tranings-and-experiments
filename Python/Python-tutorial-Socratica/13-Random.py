import random

# Display 10 random numbers from interval [0, 1)
for i in range(10):
    print(random.random())

# Generate random numbers from interval [3,7)
def my_random():
    """Random, scale, shift, return..."""
    return 4 * random.random() + 3


print(my_random())

# Generate random numbers from interval [3,7) - option 2

print(random.uniform(3, 7))

# Generate random numbers with a normal distribution
for i in range(20):
    print(random.normalvariate(0, 1))

# Generate random integer numbers from interval [1,6]
for i in range(20):
    print(random.randint(1, 6))

# Generate random choice from a list
outcomes = ["rock", "paper", "scisors"]
for i in range(5):
    print(random.choice(outcomes))
