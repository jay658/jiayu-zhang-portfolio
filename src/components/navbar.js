import { BsLinkedin, BsGithub } from 'react-icons/bs'


const Navbar = ()=>{
  return (
    <nav className='navbar'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#intro'>
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo' id='logo'/>
            </a>
          </li>
          <li className='nav-item navLinks'>
            <a href='#about'>About</a>
          </li>
          <li className='nav-item navLinks'>
            <a href='#work'>Work</a>
          </li>
          <li className='nav-item navLinks'>
            <a href='#contact'>Contact</a>
          </li>
          <li className='nav-item navLinks'>
            <a href='https://github.com/jay658'><BsGithub/></a>
          </li>
          <li className='nav-item navLinks'>
            <a href='https://www.linkedin.com/in/jiayu-zhang658'><BsLinkedin/></a>
          </li>
          <li className='nav-item navLinks'>
            <a href='https://drive.google.com/file/d/1nxz3uQ2U6kxwj6DKLu0-CwuNGH9YV7yz/view'>CV</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar