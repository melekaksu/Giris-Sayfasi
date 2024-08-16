let newAccount = document.querySelector('.new-account')
let login = document.querySelector('.login')
let register = document.querySelector('.register')
let resetPass = document.querySelector('.reset-pass')
let closeBtn = document.querySelector('.close-btn')
let overlay = document.querySelector('.overlay')
let alreadyAccount = document.querySelector('.already-account')
let forgotPassPanel = document.querySelector('.forgot-pass')

newAccount.addEventListener('click', () => {
    login.style.animation = "toRegister 0.5s forwards"

    setTimeout(() => {
        login.style.display = "none"
        register.style.display = "flex"
        register.style.animation = "toLogin 0.5s forwards"
    }, 600)
})

alreadyAccount.addEventListener('click', () => {
    register.style.animation = "toRegister 0.5s forwards"

    setTimeout(() => {
        register.style.display = "none"
        login.style.display = "flex"
        login.style.animation = "toLogin 0.5s forwards"
    }, 600)
})

resetPass.addEventListener('click', () => {
    overlay.style.display = "block"
    forgotPassPanel.style.display = "block"
    forgotPassPanel.style.animation = "showPasswordResetPanel 0.5s forwards"
    login.style.filter = "blur(5px)"
})

closeBtn.addEventListener('click', () => {
    forgotPassPanel.style.animation = "hidePasswordResetPanel 0.5s forwards"
    overlay.style.display = "none"
    login.style.filter = "blur(0px)"

    setTimeout(() => {
        forgotPassPanel.style.display = "none"
    }, 600)
})