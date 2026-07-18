import 'react'
import { signInWithPopup } from 'firebase/auth'
import {auth, googleProvider} from '../utils/firebase'
function App() {

  const googleLogin= async()=>{
   const data = await signInWithPopup(auth, googleProvider)
   console.log(data)
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={googleLogin}>
        Continue with google
      </button>
    </div>
  )
}

export default App