const url = 'http://localhost:5000/amigos';
 const [boton] = $('#boton');
 const [lista] = $('#lista');
 const [search] = $('#search');
 const [input] = $('#input');
 const [amigo] = $('#amigo');
 const [deleteBtn] = $('#delete');
 const [inputDelete] = $('#inputDelete');



 const listFriends = (response)=>{
    lista.innerHTML = '';

    response.forEach((friend)=>{
        const newLi = document.createElement('li');
        newLi.innerHTML = friend.name;
        lista.appendChild(newLi)
    })
 };


 const showFriends = ()=>{
    $.get(url, listFriends)
 };

 const searchFriend = ()=>{
    const id = input.value;
    $.get(`${url}/${id}`, findFriend)
    input.value = '';
 };

 const findFriend = (resp)=>{
    amigo.innerHTML = resp.name
 };

 const deleteFriend = ()=>{
   const id = inputDelete.value;
    inputDelete.value = '';
    
   $.ajax({
    type: 'DELETE',
    url: `${url}/${id}`,
    success: (response) => listFriends(response)
   })
 };



 boton.addEventListener('click', showFriends);
 search.addEventListener('click', searchFriend);
 deleteBtn.addEventListener('click', deleteFriend);
