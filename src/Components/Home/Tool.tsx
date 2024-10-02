import { useWavesurfer } from '@wavesurfer/react';
import { useRef, useState } from 'react';
import styled from 'styled-components'
import TypeIt from 'typeit-react';

const Tool = () => {

  const [toggle,setToggle]=useState<boolean>(true)

  const containerRef1 = useRef(null)

  const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
    container: containerRef1,
    url: toggle ? 'assets/tools.mp3' : '',
    waveColor: 'red',
    height: 0,
  })

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause()
  }
  
  return (
    <Container>
      <div className='speech'>
  <button onClick={()=>setToggle(!toggle)}>
        {toggle ? 'English' : 'Hindi'}
      </button>
  <button onClick={onPlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
</div>
      <p className='heading_style'>Tools</p>

        <TypeIt
        options={{
            strings: [`<br/>Web development tools, often shortened to "dev tools", are a collection of software that assist developers in building and maintaining websites. They differ from website builders and IDEs (Integrated Development Environments) because they focus on inspecting and modifying existing websites, rather than directly creating them from scratch.

            Here's a breakdown of the different categories of web development tools:
            
            <br/>Code Editors & Text Editors:<br/>These are essentially your workspace for writing code. Popular options include Visual Studio Code, Sublime Text, and Atom. Each editor offers features like syntax highlighting, auto-completion, and debugging capabilities to streamline the coding process.<br/>
            
            <br/>Browser Developer Tools:<br/>Every major web browser like Chrome, Firefox, Safari, and Edge has built-in dev tools. These provide functionalities like inspecting website elements, debugging JavaScript, and monitoring network performance.<br/>
            
            <br/>Front-End Frameworks:<br/>These are pre-written libraries that provide a foundation for building user interfaces (UI) faster and easier. Bootstrap and Tailwind CSS are popular frameworks that offer pre-built UI components and styling options.<br/>
            
            <br/>Back-End Frameworks:<br/> These frameworks provide a structure for developing the server-side functionality of web applications. Popular options include Django (Python), Ruby on Rails (Ruby), Laravel (PHP), and Express.js (JavaScript).<br/>
            
            <br/>Git & Version Control Systems:<br/> These tools help manage code changes and collaborate with other developers. Git is the most widely used version control system, with GitHub being a popular hosting platform for Git repositories.<br/>
            
            <br/>Web Design & Prototyping Tools:<br/> These tools allow you to visually design website layouts and user flows before diving into the code. Figma, Adobe XD, and Sketch are some popular options in this category.<br/>
            
            <br/>API & Testing Tools:<br/> Web applications often rely on APIs (Application Programming Interfaces) to communicate with other services. Tools like Postman help test and debug API calls. Additionally, testing tools ensure websites function as expected across different browsers and devices.<br/>
            
            I hope this gives you a comprehensive overview of the various tools web developers use to build and maintain websites!`],
            speed: 1,
            waitUntilVisible: true,
        }}
        />
    </Container>
  )
}

const Container = styled.div`

.speech{
  width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  
  button{
    color:white;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

}

p{
    height: 80%;
    color: #ffffff;
}
font-size: 1rem;
padding: 1rem;
width: 65vw;
color: #ffffff;
height: 65vh;
margin: 5px;
/* background: rgba( 144, 19, 254, 0.6 ); */
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 10px );
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;

.heading_style{
  text-align: center;
  justify-content: center;
  font-size: 35px;
  font-weight: 700;
  margin: 10px 0;
  color: #ffffff;
}
`

export default Tool
