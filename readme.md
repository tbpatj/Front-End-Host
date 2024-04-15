# Usage

This is a quick and simple node server that is meant to just serve up a simple built front-end that is all housed within a single build folder in the same directory

# .ENV

make sure to create a .env file with the following properties

```
PORT=_THE PORT THAT THE SERVER WILL RUN ON_
CORS_ALLOWED_URLS=_THE ALLOWED URLS TO SERVER TO_
FOLDER_PATH=_OPTIONAL, SPECIFIES WHICH FOLDER THE FRONT-END FILES ARE IN_
ENVIRONMENT_OS=SPECIFIES WHAT TYPE OF SYSTEM THE SERVER IS RUNNING ON
```

CORS_ALLOWED_URLS should be a comma separated list of urls that are allowed to access this server.
