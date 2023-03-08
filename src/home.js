const loadPage = () => {
    const divContent = document.getElementById('content');
    
    const title = document.createElement('h1');
    title.innerHTML = "Anthony's Restaurant";

    const image = document.createElement('img');
    image.src = "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
    image.alt = "rice";
    image.width = 400;
    image.height = 300;

    const description = document.createElement('p');
    description.innerHTML = "Welcome to Anthony's restaurant -- best food in the city!";

    divContent.appendChild(title);
    divContent.appendChild(image);
    divContent.appendChild(description);
}

export default loadPage;