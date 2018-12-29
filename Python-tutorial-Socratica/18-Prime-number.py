import math


def is_prime_v1(n):
    """Return 'True' if 'n' is a prime number. 'False' otherwice."""
    if n == 1:
        return False  # 1 is not prime

    for d in range(2, n):
        if n % d == 0:
            return False
    return True


# === Test Function v1 ===
for n in range(1, 21):
    print(n, is_prime_v1(n))


def is_prime_v2(n):
    """Return 'True' if 'n' is a prime number. 'False' otherwice."""
    if n == 1:
        return False  # 1 is not prime

    max_divisor = math.floor(math.sqrt(n))
    for d in range(2, 1 + max_divisor):
        if n % d == 0:
            return False
    return True


# === Test Function v2 ===
for n in range(1, 21):
    print(n, is_prime_v2(n))
