import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    
   const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

// Cierra modal de registro (sign up)
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

        showMessage("Welcome " + userCredentials.user.email)

        Toastify({
            text: "Welcome",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "botton", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: 'blue',
            },
            onClick: function(){} // Callback after click
          }).showToast();
    
        } catch (error){

            if (error.code === 'auth/email-already-in-use') {
                showMessage('email already in use', "error")
            } else if (error.code === 'auth/invalid-email') {
                showMessage('invalid email', "error")
            } else if (error.code === 'auth/weak-password'){
                showMessage('password is too weak', "error")
            } else if (error.code) {
                showMessage(error.message, "error")
            }
        }
})