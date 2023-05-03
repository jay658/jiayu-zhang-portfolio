import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Intro from './intro'
import About from './about'
import { PokemonGame, DajaView, SyntacticallySugar } from './works';
import Contact from './contact'

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'STKRJ-O53CH-IA10H-NHJU6-IUPWL'}
    scrollingSpeed = {1000}
    anchors={['intro', 'about', 'work', 'contact']}

    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" id='introSection'>
            <Intro/>
          </div>
          <div className="section" id='aboutSection'>
            <About/>
          </div>
          <div className="section" id='slideContainer'>
            <div className="slide">
              <DajaView/>
            </div>
            <div className="slide">
              <SyntacticallySugar/>
            </div>
            <div className="slide"> 
              <PokemonGame/>
            </div>
          </div>
          <div className="section" id='contactSection'>
            <Contact/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage