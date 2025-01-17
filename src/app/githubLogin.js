import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const githubButton = document.querySelector('#githubLogin')

githubButton.addEventListener('click', async () => {

  const provider = new GithubAuthProvider()

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