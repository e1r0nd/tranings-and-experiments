import datetime

gvr = datetime.date(1956, 1, 31)
print(gvr, ":", gvr.day, "/", gvr.month, "/", gvr.year)

mill = datetime.date(2000, 1, 1)
dt = datetime.timedelta(100)
print(mill + dt)

print(gvr.strftime("%A, %B %d, %Y"))

message = "GVR was born on {:%A, %B %d, %Y}."
print(message.format(gvr))

launch_date = datetime.date(2017, 3, 30)
print(launch_date)
launch_time = datetime.time(22, 27, 0)
print(launch_time)
launch_datetime = datetime.datetime(2017, 3, 30, 22, 27, 0)
print(launch_datetime)

now = datetime.datetime.now()
print(now)

moon_landing = "7/20/1969"
moon_landing_datetime = datetime.datetime.strptime(moon_landing, "%m/%d/%Y")
print(moon_landing_datetime)
