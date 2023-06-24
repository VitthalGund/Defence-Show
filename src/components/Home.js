import React from 'react'
import "../css/main.css"
import ScrollVideo from './ScrollVideo';

export default function MainPage() {
    document.title = "Home | Defence Shorts"
    return (
        <>
            <main>
                <div className="content">
                    {/* <h2></h2> */}
                    <p style={{ margin: "40px" }}>
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
                    <ScrollVideo links="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=" />
                </div>
            </main >
        </>
    )
}