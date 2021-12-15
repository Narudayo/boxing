

async function getUser() {
    try{
        const res = await axios.get('/users');
        const users = res.data;
        console.log(users);

        
        // const tbody = document.querySelector('#user-list tbody');
        // tbody.innerHTML = '';
        // users.map(function (user) {
        //     const row = document.createElement('tr');
        //     row.addEventListener('click', () => {
        //         getComment(user._id);
        //     })
        // })

    } catch (err){
        console.error(err);
    }
}

