from urllib import request

resp = request.urlopen("https://www.wikipedia.org/")
data = resp.read()
html = data.decode("UTF-8")
print(html)
