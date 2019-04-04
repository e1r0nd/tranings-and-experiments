# Classes

# Create a class
class User:
    # Costructor
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age

    def greerings(self):
        return f"My name is {self.name} and I am {self.age}"

    def has_birthday(self):
        self.age += 1


class Customer(User):
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age
        self.balance = 0

    def set_balance(self, balance):
        self.balance = balance

    def greerings(self):
        return f"My name is {self.name} and I have {self.balance}"


# Init "user" object
brad = User("Brad", "email@inbox.com", 30)

print(brad.name, brad.email, brad.age)

# Edit property
brad.age = 50
print(brad.greerings())
# New user
micky = User("Micky", "", 10)
print(f"Yesterday {micky.name} was {micky.age}")
micky.has_birthday()
print(f"But today {micky.name} is {micky.age}")

# Init customer
john = Customer("John", "", 0)
john.set_balance(100)
print(john.greerings())

