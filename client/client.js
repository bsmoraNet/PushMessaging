fetch('http://localhost:49160')
.then(response=> response.json())
.then(data=> {
    console.log('Response by server',data)
    const element = document.querySelector('#content');
    element.insertAdjacentHTML('beforeend', `<h1>${data.message}</h1>`);
})
.catch(error=>{
    console.error('Error in the request', error);
    const element = document.querySelector('#content');
    element.insertAdjacentHTML('beforeend', '<h1>Connection with server: Error</h1>');
});