import styled from 'styled-components'
import TypeIt from 'typeit-react';
import { PiEarBold, PiSpeakerHighBold } from "react-icons/pi"; 
import { useState } from 'react';

const UserWelcome = () => {

  const text = "Blockchain and Web 3 are intertwined concepts shaping the future of the internet. Here's a quick breakdown: Blockchain: Imagine a public ledger everyone can see but no one can tamper with. That's a blockchain in essence. It's a secure distributed database that stores information in 'blocks' chained together chronologically. Cryptocurrencies like Bitcoin use blockchain to track ownership transparently. Web 3:  The current internet (Web 2.0) is dominated by large companies controlling your data. Web 3 aims to be more decentralized, giving users more control. Blockchain plays a key role here. Imagine owning your online identity and data, and interacting with applications directly, without a middleman. Here's how they connect: Decentralization: Blockchain facilitates a peer-to-peer web, where users interact directly, cutting out centralized control. Ownership: Web 3 leverages blockchain to give users ownership of their data and digital assets. Security: Blockchain's tamper-proof nature enhances security and trust in Web 3 applications. Think of it this way: Web 2.0 is like renting an apartment from a landlord. Web 3 is like owning your own home, with blockchain acting as the secure deed. It's early days: Web 3 is still under development, but it has the potential to revolutionize how we interact online.  Think secure online marketplaces, censorship-resistant communication, and a more democratic internet."

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false); // Track if currently speaking
  const [speechSynthesis, setSpeechSynthesis] = useState<any>(null); // Hold the SpeechSynthesisUtterance

  // Function to start speech synthesis
  const handlePlay = () => {
    if (!text) return; // Return if there's no text to speak

    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.onend = () => {
      setIsSpeaking(false); // Reset speaking state when done
    };

    window.speechSynthesis.speak(utterance);
    setSpeechSynthesis(utterance); // Save the utterance instance
    setIsSpeaking(true);
  };

  // Function to pause speech synthesis
  const handlePause = () => {
    if (isSpeaking && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
    }
  };

  // Function to resume speech synthesis
  const handleResume = () => {
    if (isSpeaking && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  };

  const textToSpeechHindi = () => {
    const textHi = "ब्लॉकचैन और वेब 3 आपस में जुड़ी हुई अवधारणाएं हैं जो इंटरनेट के भविष्य को आकार दे रही हैं। यहां एक त्वरित विवरण दिया गया है: ब्लॉकचेन: एक सार्वजनिक बहीखाता की कल्पना करें जिसे हर कोई देख सकता है लेकिन कोई भी उसके साथ छेड़छाड़ नहीं कर सकता है। यह मूल रूप से एक ब्लॉकचेन है। यह एक सुरक्षित वितरित डेटाबेस है जो जानकारी संग्रहीत करता है 'ब्लॉक' में कालानुक्रमिक रूप से एक साथ श्रृंखलाबद्ध है। बिटकॉइन जैसी क्रिप्टोकरेंसी स्वामित्व को पारदर्शी रूप से ट्रैक करने के लिए ब्लॉकचेन का उपयोग करती है। वेब 3: वर्तमान इंटरनेट (वेब ​​2.0) पर आपके डेटा को नियंत्रित करने वाली बड़ी कंपनियों का वर्चस्व है, वेब 3 का लक्ष्य उपयोगकर्ताओं को अधिक नियंत्रण प्रदान करना है। ब्लॉकचेन यहां एक महत्वपूर्ण भूमिका निभाता है। कल्पना कीजिए कि आपकी ऑनलाइन पहचान और डेटा का स्वामित्व है, और वे बिना किसी बिचौलिए के सीधे अनुप्रयोगों के साथ बातचीत करते हैं: विकेंद्रीकरण: ब्लॉकचेन एक पीयर-टू-पीयर वेब की सुविधा देता है, जहां उपयोगकर्ता केंद्रीकृत को छोड़कर सीधे बातचीत करते हैं। नियंत्रण: वेब 3 उपयोगकर्ताओं को उनके डेटा और डिजिटल संपत्तियों का स्वामित्व देने के लिए ब्लॉकचेन का लाभ उठाता है। सुरक्षा: ब्लॉकचेन की छेड़छाड़-रोधी प्रकृति वेब 3 अनुप्रयोगों में सुरक्षा और विश्वास को बढ़ाती है। इसे इस तरह से सोचें: वेब 2.0 एक मकान मालिक से एक अपार्टमेंट किराए पर लेने जैसा है। वेब 3 अपने खुद के घर के मालिक होने जैसा है, जिसमें ब्लॉकचेन सुरक्षित कार्य के रूप में कार्य करता है। अभी शुरुआती दिन हैं: वेब 3 अभी भी विकासाधीन है, लेकिन इसमें हमारे ऑनलाइन इंटरैक्ट करने के तरीके में क्रांतिकारी बदलाव लाने की क्षमता है।  सुरक्षित ऑनलाइन बाज़ार, सेंसरशिप-प्रतिरोधी संचार और अधिक लोकतांत्रिक इंटरनेट के बारे में सोचें।";
    
    const synth = window.speechSynthesis;
  
    // Cancel any ongoing speech to avoid interruptions
    synth.cancel();
  
    const value = new SpeechSynthesisUtterance(textHi);
    value.lang = 'hi-IN';
  
    // Check if the Hindi voice is available
    const voices = synth.getVoices();
    const hindiVoice = voices.find(voice => voice.lang === 'hi-IN');
    if (hindiVoice) {
      value.voice = hindiVoice;
    } else {
      console.error("Hindi voice is not available.");
    }
  }
  
  const handleEnglish =()=>{
    if(speechSynthesis === null){
      handlePlay()
    }
    else{
        handlePause()
        handleResume()
    }
  }

  return (
    <Container>
<div className='speech'>
  <p>English</p>
  <button onClick={()=>handleEnglish()}><PiSpeakerHighBold /></button>
  <button onClick={()=>textToSpeechHindi()}><PiSpeakerHighBold /></button>
</div>
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

export default UserWelcome
