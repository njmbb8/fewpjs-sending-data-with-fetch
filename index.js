function submitData(name, email) {
    const reqURL = 'http://localhost:3000/users';

    const configurationObject = {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch(reqURL, configurationObject)
    .then((response) => response.json())
    .then(function(ret){
        let retNode = document.createElement('p');
        document.getElementsByTagName('body')[0].appendChild(retNode);
        retNode.textContent = ret.id;
    })
    .catch(function(error){
        let errorNode = document.createElement('p');
        document.getElementsByTagName('body')[0].appendChild(errorNode);
        errorNode.textContent = error.message;
    })
}