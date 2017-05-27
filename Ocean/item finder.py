import requests
from bs4 import BeautifulSoup
import urllib.request

def spider(max_pages):
	navItems = []
	url = "file:///C:/Raghav%20Stuff/Ocean/index2.html"
	source = requests.get(url)
	text = source.text
	soup = BeautifulSoup(text, "html.parser")
	for link in soup.find_all('li', {'class':'navItems'}):
		title = link.string
		print(title)
		navItems.append(lin)
	# fw = open('sample.txt', 'w')
	# fw.write(str(navItems))
	# fw.close()
spider(1)