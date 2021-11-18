const form = document.forms.form

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const [senha] = form
    console.log(senha.value)
    Login(senha.value)
    senha.value = ''
})

const Login = (password) => {
    let currentPassword = 'Livros'
    if(password === currentPassword){
        window.location.href = './contents.html'
    }else{
        alert('Senha errada, tente novamente!')
    }
}