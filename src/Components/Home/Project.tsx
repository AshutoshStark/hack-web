import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Project= () => {

    return (
        <Container>
          <p className='heading_style'>Projects</p>
            <TypeIt
            options={{
                strings: [`here's a basic example of how you can create a simple React project:<br/>

                First, make sure you have Node.js installed on your machine.<br/>
                
                1. <br/>Create a new React app:<br/>
                
                Open your terminal or command prompt and run the following commands:<br/>
                
                bash<br/>
                npx create-react-app my-react-app<br/>
                cd my-react-app<br/>
                
                This will create a new React app called my-react-app and navigate into its directory.<br/>
                
                2. <br/>Start the development server:<br/>
                
                Once inside your project directory, run:<br/>
                
                bash<br/>
                npm start<br/>
                
                This will start a development server and open your default web browser to show your React app.<br/>
                
                3. <br/>Modify the App component:<br/>
                
                Open 'src/App.js' in your code editor and modify it to look something like this:<br/>
                
                jsx<br/>
                import React from 'react';<br/>
                import './App.css';<br/>
                
                function App() {<br/>
                  return (<br/>
                    <div className="App"><br/>
                      <header className="App-header"><br/>
                        <h1>Welcome to My React App</h1><br/>
                        <p>This is a basic React project.</p><br/>
                      </header><br/>
                    </div><br/>
                  );<br/>
                }<br/>
                <br/>
                export default App;<br/>
                <br/>
                4. <br/>Create a CSS file for styling:<br/>
                <br/>
                Create a file named App.css in the src directory and add some basic styling:<br/>
                <br/>
                css<br/>
                .App {<br/>
                  text-align: center;<br/>
                }<br/>
                <br/>
                .App-header {<br/>
                  background-color: #282c34;<br/>
                  min-height: 100vh;<br/>
                  display: flex;<br/>
                  flex-direction: column;<br/>
                  align-items: center;<br/>
                  justify-content: center;<br/>
                  font-size: calc(10px + 2vmin);<br/>
                  color: white;<br/>
                }<br/>
                <br/>
                5. <br/>Run your React app:<br/><br/>
                <br/>
                Your React app should now be running on 'http://localhost:3000 by default. You should see your welcome message displayed in the browser.'<br/>
                <br/>
                `],
                speed: 1,
                waitUntilVisible: true,
            }}
            />
          
        </Container>
      )
    }
    
    const Container = styled.div`
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
export default Project
