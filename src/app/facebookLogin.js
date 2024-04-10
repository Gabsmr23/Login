import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const facebookButton = document.querySelector('#facebookLogin')

facebookButton.addEventListener('click', async () => {

  const provider = new FacebookAuthProvider()

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials)

    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
    modal.hide()

    showMessage('Welcome ' + credentials.user.displayName, 'sucess')
  } catch (error) {
    console.log(error)
  }
})
