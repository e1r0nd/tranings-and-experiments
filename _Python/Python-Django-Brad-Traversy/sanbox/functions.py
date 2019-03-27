def say_hello(name="Sam"):
    """
    Prints hello to a person
    """
    print(f"Hello, {name}!")


say_hello()
say_hello("Max")


def get_sum(num1, num2):
    total = num1 + num2
    return total


print(get_sum(4, 5))

# Lambda functions
add_nums = lambda num1, num2: num1 + num2
print(add_nums(1, 2))

