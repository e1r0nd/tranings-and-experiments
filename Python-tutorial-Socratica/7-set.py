example = set()

example.add(42)
example.add(False)
example.add(3.14159)
example.add("Thorium")

print(example, len(example))

example.remove(42)
print(example)

example.discard(42)
print(example)

example2 = set([1, 2, True, "Yes"])
print(example2)
example2.clear()
print(example2)

odds = set([1, 3, 5, 7, 9])
evens = set([2, 4, 6, 8, 10])
primes = set([2, 3, 5, 7])
composites = set([4, 6, 8, 9, 10])
print(odds.union(evens))
print(odds.intersection(primes))
print(2 in primes)
print(9 not in evens)

