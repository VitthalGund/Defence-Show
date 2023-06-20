import React from 'react'
import "../CSS/main.css"
import BackVideo from './BackVideo';
import ScrollVideo from './ScrollVideo';

function MainPage() {

    return (
        <>
            <BackVideo />
            <main>
                <div className="content">
                    {/* <h2></h2> */}
                    <p style={{ margin: "30px" }}>
                        नमस्ते, मे Defence Show पर आपका स्वागत करता हुँ मे इस Youtube Channel पर Defence
                        से जुडी 2-3 Videos
                        Upload करता हूँ
                        पहेली वीडियो का समय सुबह 9:10 बाजे दूसरी वीडियो का समय दोपहर 2:10 बजे तीसरी वीडियो का समय शाम 7:10
                        बजे होता है तीनो ही
                        वीडियो बहुत Simple भाषा मे होती है अगर आपको Defence Short Channel का यह प्रयास पसंद आये तो आप
                        Channel को Subscribe करके
                        Bell Icon को दबाए और Defence Short को Support करके Defence Short Family का Part बने
                        धन्यवाद आपका दिन सुभ हो|
                    </p>
                    <ScrollVideo />
                </div>
            </main >
        </>
    )
}

export default MainPage;
