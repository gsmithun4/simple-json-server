# simple-json-server
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
"urTag" : {
  "name" : "value"
}
```

Hit the URL `localhost:{port}/urTag`
