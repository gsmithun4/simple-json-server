# simple-json-server
Inspired from [json-server](https://www.npmjs.com/package/json-server). 
`simple-json-server` gives the configured response data for different request methods of requests.
## Installation
```
npm install -g simple-json-server
```
## Usage
```
simple-json-server -p [port(default 3000)] -f [file name in current directory(default db.json)] -fp [file path with file name]
```

## Response Configuration
add `URL Tag` as name and response json as value in `db.json`, no restart required after configuration changes.

```
{
    "API_1" : {
      "GET": {
          "GETresponse" : "value"
      },
      "POST": {
          "POSTresponse" : "value"
      },
      "PUT": {
          "PUTresponse" : "value"
      },
      "DELETE": {
          "DELETEresponse" : "value"
      }
      //You can add more methods here
    },
    "API_2" : {
      "some_response" : "value" // Returns entire json, If no methods specified
    }
}

```

Hit the URL `localhost:{port}/API_1`
