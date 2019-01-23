# Collect string / test length
input = input("Please enter a test string: ")

if len(input) == 0:
    print("Your string is empty.")
elif len(input) < 6:
    print("Your string is too short.")
    print("Please enter a string at least 6 characters.")
else:
    print("Your string has been accepted!")
