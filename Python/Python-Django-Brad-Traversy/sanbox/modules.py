# Core modules
import datetime
from datetime import date
import time
from time import time

# Pip module
import camelcase

# today = datetime.date.today()
today = date.today()
print(today)

# timestamp = time.time()
timestamp = time()
print(timestamp)

camel = camelcase.CamelCase()
text = "Hello, world!"
print(camel.hump(text))
