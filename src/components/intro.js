import TypedReact from './typewriter';

const Intro = ()=>{
  return(
    <div className='introContainer'>
      <div id='meContainer'>
        <img src='/../images/me.jpeg' alt='It me'/>
      </div>
      <h1>Jiayu Zhang</h1>
      <h2><TypedReact strings={['I\'m a Software Engineer', 'I\'m a Problem Solver', 'I\'m a Power Lifter', 'I\'m always learning']}/></h2>
    </div>
  )
}

export default Intro