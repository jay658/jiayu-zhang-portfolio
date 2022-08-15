import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiPostgresql, SiMaterialui, SiSocketdotio } from 'react-icons/si'
import { BsGithub, BsLinkedin } from 'react-icons/bs' 

const About = ()=>{
  return(
    <div className='aboutContainer' id='me'>
      <div id='aboutImg'></div>
      <div id = 'abouttext'>
        <h1>About</h1>
        <p>I'm a Full Stack engineer that recently made a career change and graduated from Full Stack Academy. I love solving problems and learning new technologies. </p>
        <ul className = 'myLists'>
          <li >
            <a href='https://github.com/jay658'>Github <BsGithub/></a>
          </li>
          <li >
            <a href='https://www.linkedin.com/in/jiayu-zhang658'> LinkedIn <BsLinkedin/></a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1AgQmaK-2F2e_TsaRgXfV6cBY-9UCNLIk/view'>CV</a>
          </li>
        </ul>

        <ul className = 'myLists'>
          <p>Technologies I've used:</p>
          <br/>
          <li>NodeJs <FaNodeJs/></li>
          <li>JavaScript <SiJavascript/></li>
          <li>React <FaReact/></li>
          <li>Redux <SiRedux/></li>
          <li>HTML <FaHtml5/></li>
          <li>CSS <FaCss3Alt/></li>
          <li>PostgreSQL <SiPostgresql/></li>
          <li>MaterialUI <SiMaterialui/></li>
          <li>SocketIO <SiSocketdotio/></li>
          <li>GSAP</li>
          <li>Canvas API</li>
        </ul>
      </div>
    </div>
  )
}

export default About