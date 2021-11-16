import './assets/Root.css'

export default function Root() {
  function registerForm(e) {
    e.preventDefault()
  }
  return (

    <form onSubmit={registerForm}>


      <img className='profilePic' src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" />

      <div className='input_area'>
        <div className='userN_div'>
          <input type='text' className='userN_inputs' placeholder = 'Enter your name' />
          <input type='text' className='userN_inputs' placeholder = 'Enter your user name' />
        </div>
        <div className='userE_div'>
          <input type='email' className='userE_inputs' placeholder = 'Enter your email' />
          <input type='tel' className='userTel_inputs'  placeholder = 'Enter your tel.number' />
        </div>
        <div>
          <input type='submit' value='Enviar' />
        </div>
      </div>

    </form>
  )
}