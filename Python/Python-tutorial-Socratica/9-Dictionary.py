post = {"id": 123, "message": "a message here", "tag": ["cat", "fun"]}
print(post)

post2 = dict(id=321, message="a new one")
post2["tag"] = ["cat", "dog"]

print(post2)
if "location" in post2:
    print(post2["location"])
else:
    print("Location is not specified")

try:
    print(post2["location"])
except KeyError:
    print("Error")

for key in post2.keys():
    value = post2[key]
    print(key, "=", value)
