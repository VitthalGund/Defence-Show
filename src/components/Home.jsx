import "../css/main.css"
import ScrollVideo from './ScrollVideo';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    document.title = "Home | Defence Show";
    // const textArray = ["I'm A Youtuber", 2000,
    //     "Subcribe to Defence Shorts Channal", 3000,
    //     "For Lasted Defence Updates", 3000,
    //     "From Trusted and Authentic sources", 2000,
    //     "Undeerstand the Complex geopolitics in Simplied language", 4000,
    //     "Subcribe to Defence to get daily dose of Defence news", 5000
    // ];
    return (
        <>
            <main>
                <div className="content">
                    {/* <h2></h2> */}
                    <div className="container">
                        <p>Defence Show!</p>
                        <TypeAnimation
                            sequence={[
                                "Hey,My Self Aakash", 2000,
                                "I'm A Youtuber", 2000,
                                "Subcribe to Defence Shorts Channal", 3000,
                                "For Lasted Defence Updates", 3000,
                                "From the Most Trusted and Authenticed sources", 2000,
                                "Undeerstand the Complex geopolitics in Simplied language", 4000,
                                "Subcribe to Defence to get daily dose of Defence news", 5000
                            ]}
                            wrapper="div"
                            speed={50}
                            style={{ fontSize: '1.5rem', display: 'flex' }}
                            repeat={Infinity}
                        />
                    </div>
                    <ScrollVideo links="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=" />
                </div>
            </main >
        </>
    )
}