function showPassword(e){
    e.preventDefault();
    const email=document.getElementById('email').value
    const emailObj={
        email
    }
    axios.post('http://localhost:2500/forgetpassword', emailObj)
    .then((res)=>{
        console.log(res)
        
    })
    .catch(err => console.log(err))
}