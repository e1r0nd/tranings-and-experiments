import math


def volume(r):
    """Returns the volume of a sphere with radius r."""
    v = (4.0 / 3.0) * math.pi * r ** 3
    return v


def cm(feet=0, inches=0):
    """Converts a length from feet and inches to centimeters."""
    inches_to_cm = inches * 2.54
    feet_to_cm = feet * 12 * 2.54
    return inches_to_cm + feet_to_cm


print("Volume of 3:", volume(3))
print("5 feet, 8 inches:", cm(feet=5, inches=8))

