import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const email = signInForm['login-email'].value
  const password = signInForm['login-password'].value

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(credentials)

    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
    modal.hide()

    showMessage('Welcome ' + credentials.user.email)

  } catch (error) {
    if (error.code === 'auth/invalid-credential') {
      showMessage('Wrong password', "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage('user not found', "error")
    } else {
      showMessage(error.message, "error")
    }
  }
})
