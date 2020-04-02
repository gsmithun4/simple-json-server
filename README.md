# simple-json-server
Inspired from [json-server](https://www.npmjs.com/package/json-server). `json-server` not supporing to get data on post request.`simple-json-server` gives the configured response data for any type of requests.
## Installation
```
npm install -g simple-json-server
```
## Usage
```
simple-json-server -p [port(default 3000)] -f [file name in current directory(default db.json)] -fp [file path with file name]
```

## Response Configuration
add `URL Tag` as name and response json as value in `db.json`

```
"API_1" : {
  "response" : "value"
},
"API_2" : {
  "some_response" : "value"
}
```

Hit the URL `localhost:{port}/API_1`
