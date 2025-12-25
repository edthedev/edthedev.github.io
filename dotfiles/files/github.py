"""
Recently Updated Open GitHub Issues
"""

import http.client

conn = http.client.HTTPSConnection("api.github.com")

payload = ""
token = open('./.github_access_token').read()
headers = { 'authorization': "token {}".format(token),
    'User-Agent': 'Python Jupyter Notebook'}
conn.request("GET", "/issues?state=open&sort=updated", payload, headers)

res = conn.getresponse()
data = res.read()

results = data.decode("utf-8")

data_file = 'gh_open.json'
f = open(data_file, "w")
f.write(results)
f.close()
print("Updated {} with {} length".format(data_file, len(results)))

import pandas

pdata = pandas.read_json(data_file)
# print(pdata.title.head(3))

from simple_rest_client import api

token = open('./.github_access_token').read()
headers = { 'authorization': "token {}".format(token),
    'User-Agent': 'Python Jupyter Notebook'}
gh = api.API(api_root_url="https://api.github.com", headers=headers,
    append_slash=False,
     json_encode_body=True)

gh.add_resource(resource_name='issues')
gh.issues.actions

results = gh.issues.list(params=query)
titles = list(map(lambda t : t["title"], results.body))

from simple_rest_client import api

token = open('./.github_access_token').read()
headers = { 'authorization': "token {}".format(token),
    'User-Agent': 'Python Jupyter Notebook'}
gh = api.API(api_root_url="https://api.github.com", headers=headers,
    append_slash=False,
     json_encode_body=True)

gh.add_resource(resource_name='issues')
gh.issues.actions

titles = list(map(lambda t : t["title"], results.body))