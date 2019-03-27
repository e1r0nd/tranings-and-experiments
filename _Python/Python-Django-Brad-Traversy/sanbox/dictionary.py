# Simple dictionary

person = {"first_name": "John", "last_name": "Doh", "age": 37}
print(person)
print(person["first_name"])
print(person.get("last_name"))

person["phone"] = "123-45678"
del person["age"]
print(person)

print(person.keys())
print(person.items())
print(len(person))

# List of dicts
people = [{"name": "John", "age": "13"}, {"name": "Doh", "age": "31"}]
print(people)
print(people[1]["name"])
