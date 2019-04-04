import json

# Sample JSON
userJSON = '{"firstname":"John", "lastname":"Doe"}'

# Parse to a dictionary
user = json.loads(userJSON)
print(user)
print(user["firstname"])
