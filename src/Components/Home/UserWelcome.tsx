import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const UserWelcome = () => {

  return (
    <Container>

<p className='heading_style'>Blockchain and Web-3</p>
        <TypeIt
        options={{
            strings: [`Blockchain and Web 3 are intertwined concepts shaping the future of the internet. Here's a quick breakdown:
            <br><br>
            Blockchain: Imagine a public ledger everyone can see but no one can tamper with. That's a blockchain in essence. It's a secure distributed database that stores information in "blocks" chained together chronologically. Cryptocurrencies like Bitcoin use blockchain to track ownership transparently.
            <br><br>
            Web 3:  The current internet (Web 2.0) is dominated by large companies controlling your data. Web 3 aims to be more decentralized, giving users more control. Blockchain plays a key role here. Imagine owning your online identity and data, and interacting with applications directly, without a middleman.
            <br><br>
            Here's how they connect:
            <br><br>
            Decentralization: Blockchain facilitates a peer-to-peer web, where users interact directly, cutting out centralized control.
            Ownership: Web 3 leverages blockchain to give users ownership of their data and digital assets.
            Security: Blockchain's tamper-proof nature enhances security and trust in Web 3 applications.
            Think of it this way: Web 2.0 is like renting an apartment from a landlord. Web 3 is like owning your own home, with blockchain acting as the secure deed.
            <br><br>
            It's early days: Web 3 is still under development, but it has the potential to revolutionize how we interact online.  Think secure online marketplaces, censorship-resistant communication, and a more democratic internet.`],
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

export default UserWelcome
