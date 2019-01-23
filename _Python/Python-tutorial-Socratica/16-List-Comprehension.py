squares = []
for i in range(0, 101):
    squares.append(i ** 2)

print(squares)

squares2 = [i ** 2 for i in range(0, 101)]
print(squares2)

words = [
    "risk",
    "general",
    "same",
    "rise",
    "produce",
    "product",
    "generation",
    "get",
    "save",
    "say",
]

# gwords = []
# for word in words:
#     if word.startswith("g"):
#         gwords.append(word)
gwords = [word for word in words if word.startswith("g")]
print(gwords)

A = [1, 3, 5, 7]
B = [2, 4, 6, 8]

cartesian_product = [(a, b) for a in A for b in B]
print(cartesian_product)
