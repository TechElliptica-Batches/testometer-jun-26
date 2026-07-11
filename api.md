
API - Application Programming interface 


english  ->    translator    -> japanese

java   -   api   -     c#

zomato - java 
rider -> ggogle map (golang)
weather information -> weather-api (ruby)


SOAP - stateful and stateless
REST - 99%  - stateless

certain rules 

1 - authentication
    stateless  
    stateful

authapi - credential -> token (10 min) - auth token

2 - all endpoint information - endpoint (resources)

3 - body/payload (information)

    1 - query param (url) &, key and values
    2 - path param (url) - {{usersApiBase}}/users/userid
    3 - payload (Json) - 

4 - Methods
    GET - Read
    POST - Create 
    PUT - Update
    PATCH - Partially update
    DELETE - Delete

5 - Response 
  1 - Response code
    1XX - Informational 
    2XX - Success , 200-OK, 201- CREATED, 204- NOCONTENT 
    3XX - Redirectional, 300 - Multiple request, 301 - Moved permanently
    4XX - Client side error - 400-BADREQUEST, 401-Unauthorized, 403 - Forbidden (expired, invalid, no-auth to access endpoint), 404 - NO RESOURECE FOUND, 405 - Method not allowed, 409- conflict, 415 - unsuppoerted media, 429 - too many request
    5XX - Server Side error -  500 - internal server error,503 - service nto available

  2 - Response header - header 
  3 - Response body   - json file , xml, html

