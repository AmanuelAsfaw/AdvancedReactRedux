# Cross-Origin Resource Sharing (CORS)
[MDN- Reading Source](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

**Cross-Origin Resource Sharing (CORS)** is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, ```XMLHttpRequest``` and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)

The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as ```XMLHttpRequest``` or ***Fetch*** to mitigate the risks of cross-origin HTTP requests.

## Functional overview

The Cross-Origin Resource Sharing standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser. Additionally, for HTTP request methods that can cause side-effects on server data (in particular, HTTP methods other than ```GET```, or ```POST``` with certain MIME types), the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with the HTTP ```OPTIONS``` request method, and then, upon "approval" from the server, sending the actual request. Servers can also inform clients whether "credentials" (such as Cookies and HTTP Authentication) should be sent with requests.

CORS failures result in errors but for security reasons, specifics about the error are not available to JavaScript. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the browser's console for details.

Subsequent sections discuss scenarios, as well as provide a breakdown of the HTTP headers used.

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/simple-req.png)

## Preflighted requests

Unlike simple requests, for "preflighted" requests the browser first sends an HTTP request using the ```OPTIONS``` method to the resource on the other origin, in order to determine if the actual request is safe to send. Such cross-origin requests are preflighted since they may have implications for user data.

```
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://bar.other/resources/post-here/');
xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
xhr.setRequestHeader('Content-Type', 'application/xml');
xhr.onreadystatechange = handler;
xhr.send('<person><name>Arun</name></person>');
```

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/preflight_correct.png)