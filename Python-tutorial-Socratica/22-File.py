# f = open("dummy.txt")
# text = f.read()
# f.close()
# print(text)

try:
    with open("dummy.txt") as fobj:
        txt = fobj.read()
except FileNotFoundError:
    txt = None
print(txt)

abc = ["A", "Z", "B", "Y", "X"]
with open("abc.txt", "w") as f:
    for x in abc:
        f.write(x)
        f.write("\n")
