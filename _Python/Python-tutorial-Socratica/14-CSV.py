import csv
from datetime import datetime

path = "./google_stock_data.csv"
file = open(path, newline="")
reader = csv.reader(file)

header = next(reader)  # The next line in the header
data = []
for row in reader:
    # row = [Date, Open, High, Low, Close, Volume, Adj. Close]
    date = datetime.strptime(row[0], "%m/%d/%Y")
    open_price = float(row[1])  # 'open' is a builtin function
    high = float(row[2])
    low = float(row[3])
    close = float(row[4])
    volume = int(row[5])
    adj_close = float(row[6])

    data.append([data, open_price, high, low, close, volume, adj_close])

# Compute and store daily stock returns
returns_path = "./google_return.csv"
file = open(returns_path, "w")
writer = csv.writer(file)
writer.writerow(["Date", "Return"])

for i in range(len(data) - 1):
    todays_row = data[i]
    todays_date = todays_row[0]
    todays_price = todays_row[-1]
    yesterdays_row = data[i + 1]
    yesterdays_price = yesterdays_row[-1]

    daily_return = (todays_price - yesterdays_price) / yesterdays_price
    formatted_date = todays_date.strftime("%m/%d/%Y")
    writer.writerow([formatted_date, daily_return])

