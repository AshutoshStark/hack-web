import styled from 'styled-components'
import TypeIt from 'typeit-react';

const Road = () => {
  return (
    <Container>
      <p className='heading_style'>Understanding Web3 and Blockchain:</p>
      
        <TypeIt
        options={{
            strings: [`Fundamentals: <br>Start by grasping core blockchain concepts like decentralization, consensus mechanisms (proof of work, proof of stake), and smart contracts. Resources like online articles, documentaries, or courses from platforms like Coursera or edX can be a good starting point.<br>
            Deep Dive: Explore specific blockchains like Ethereum, the leading platform for Web3 development. Learn about popular decentralized applications (dApps) built on Ethereum and how they function.<br>
            Stay Updated: The Web3 space is constantly evolving. Follow industry publications, attend online meetups, and engage with online communities to stay current on the latest trends and developments.<br><br>
            Becoming a Web3 Developer:
            <br>
            Blockchain Basics: Build a solid foundation in blockchain technology. This includes understanding distributed ledgers, cryptography, and different blockchain architectures.<br>
            Programming Languages: Learn languages like Solidity, the primary language for writing smart contracts on Ethereum. Familiarity with Javascript is also beneficial.<br>
            Web3 Frameworks: Explore frameworks like Truffle or Hardhat that streamline Web3 development.<br>
            Decentralized App Development: Learn how to build dApps. Start with tutorials and progress to building your own simple dApps to solidify your understanding.<br>
            Practice and Contribute: Practice is key! Contribute to open-source Web3 projects to gain real-world experience and build your developer portfolio.`],
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

export default Road
