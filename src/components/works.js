import { AiFillGithub } from 'react-icons/ai'
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiPostgresql, SiMaterialui, SiSocketdotio } from 'react-icons/si'

export const PokemonGame = ()=>{
  return(
    <div id='pokemonContainer'>
      <h1>Pokemon Game</h1>
      <p>Pokemon demo game. Explore the map and battle wild Pokemon.</p>
      <ul>
        <h2>Technologies used:</h2>
        <li>JavaScript <SiJavascript/></li> 
        <li>HTML <FaHtml5/></li>
        <li>CSS <FaCss3Alt/></li>
        <li>GSAP</li>
        <li>Canvas API</li>
      </ul>
      <div className='links'>
        <a href='https://github.com/jay658/Pokemon-game'>Github <AiFillGithub/></a>
        <a href='https://jiayu-pokemon-app.herokuapp.com/'>Demo</a>
      </div>
    </div>
  )
}

export const DajaView = () =>{
  return (
    <div id='dajaviewContainer'>
      <h1>DAJA View</h1>
      <p>Rotten Tomatoes meets Facebook. Rate, review, and share media you've seen with friends.</p>
      <ul>
        <h2>Technologies used:</h2>
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
      </ul>
      <div className='links'>
        <a href='https://github.com/jay658/DAJA-VIEW'>Github <AiFillGithub/></a>
        <a href='https://capstone-movie-social-app.herokuapp.com/'>Demo</a>
      </div>
    </div>
  )
}

export const SyntacticallySugar = ()=>{
  return (
    <div id='syntacticallysugarContainer'>
      <h1>Syntactically Sugar</h1>
      <p>Shop for all of your sugary needs! An ecommerce app for buying cakes and cupcakes.</p>
      <ul>
        <h2>Technologies used:</h2>
        <br/>
        <li>NodeJs <FaNodeJs/></li>
        <li>JavaScript <SiJavascript/></li>
        <li>React <FaReact/></li>
        <li>Redux <SiRedux/></li>
        <li>HTML <FaHtml5/></li>
        <li>CSS <FaCss3Alt/></li>
        <li>PostgreSQL <SiPostgresql/></li>
        <li>MaterialUI <SiMaterialui/></li>
      </ul>
      <div className='links'>
        <a href='https://github.com/jay658/Syntactically-Sugar'>Github <AiFillGithub/></a>
        <a href='https://syntactically-sugar-app.herokuapp.com/'>Demo</a>
      </div>
    </div>
  )
}