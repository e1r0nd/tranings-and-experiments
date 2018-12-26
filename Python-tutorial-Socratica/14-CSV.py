path = "./google_stock_data.csv.csv"
lines = [line for line in open(path)]

dataset = [line.strip().split(",") for line in open(path)]
