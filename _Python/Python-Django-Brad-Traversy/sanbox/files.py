# Files manipulation

myfile = open("myfile.txt", "w")

# Get some info
print(f"Name: {myfile.name}")
print(f"Is closed: {myfile.closed}")
print(f"Openning mode: {myfile.mode}")

# Write to file
myfile.write("I like Python")
myfile.close()

# Append
myfile = open("myfile.txt", "a")
myfile.write("\nI like JS!")
myfile.close()

# Read
myfile = open("myfile.txt", "r+")
text = myfile.read(10)
print(text)
