// Backend

// creates new HTTP message to send to the backend.
// message = request.
const xhr = new XMLHttpRequest();

// send request to backend
// wait for request sent.
xhr.addEventListener("load", () => {
    console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev/images/apple.jpg");
xhr.send();

// backend api - how we interact with the backend
// text/plain - json - html
