import logging
import math

# Create and configure logging
LOG_FORMAT = "%(levelname)s %(asctime)s - %(message)s"
logging.basicConfig(
    filename="limberjack.log", level=logging.DEBUG, format=LOG_FORMAT, filemode="w"
)
logger = logging.getLogger()

# Test logger
logger.warning("Warning here.")
logger.critical("Division by zero!!")


def qadratic_formula(a, b, c):
    """Returns the solutions of the equation ax^2 + bx + c = 0."""
    logger.info("qadratic_formula({0},{1},{2})".format(a, b, c))
    # Compute the discriminant
    logger.debug("# Compute the discriminant")
    disc = b ** 2 - 4 * a * c
    # Compute the roots
    logger.debug("# Compute the roots")
    if disc < 0:
        logger.error("The discriminant cannot be negative!")
        root1 = "error"
        root2 = "error"
    else:
        root1 = -b + math.sqrt(disc) / (2 * a)
        root2 = -b - math.sqrt(disc) / (2 * a)
    # Return the roots
    logger.debug("# Return the roots")
    return (root1, root2)


roots = qadratic_formula(1, 0, -4)
print(roots)

roots = qadratic_formula(1, 0, 1)
