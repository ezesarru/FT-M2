const [userList] = $('#userList');
const [loadUser] = $('#loadUser');



const responseHandler = (response)=>{

    response.forEach((user)=> {
        const newLi = document.createElement('li')
        newLi.innerText = user.name;
        userList.appendChild(newLi)
    })

};


const fetchUsers = ()=>{
    $.get('https://jsonplaceholder.typicode.com/users', responseHandler)

};



loadUser.addEventListener('click', fetchUsers)