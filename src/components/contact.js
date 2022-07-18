import { BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = ()=>{
  return (
    <div className='contactContainer'>
      <h1>Need to contact me?</h1>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/jiayu-zhang658'><BsLinkedin/> linkedin.com/in/jiayu-zhang658</a>
        </li>
        <li><AiOutlineMail/> jiayuzhangg@gmail.com</li>
        <li><BsFillTelephoneFill/> 646-269-1944</li>
      </ul>
    </div>
  )
}

export default Contact