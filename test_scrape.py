import urllib.request
import json
import re

url = "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@akhmad.suhardian"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        data = json.loads(html)
        print("Scraped oEmbed Data:")
        print(json.dumps(data, indent=2))
except Exception as e:
    print("Error:", e)
