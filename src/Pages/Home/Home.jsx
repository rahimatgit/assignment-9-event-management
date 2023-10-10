import { useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Accordion from "../Accordion/Accordion";
import Reviews from "../Reviews/Reviews";


const Home = () => {

    const [events, setEvents] = useState([]);

    fetch('events.json')
        .then(res => res.json())
        .then(data => setEvents(data));

    return (
        <div>
            <Banner></Banner>
            <div data-aos="zoom-out-up" data-aos-duration="3000" className="w-[80%] mx-auto">
                <h1 className="mt-12 mb-6 text-5xl text-center font-semibold">Our Services</h1>
                <p>At EduVentsPro, we offer a comprehensive suite of services to elevate your educational events. Our expertise includes event planning and strategy, venue selection and booking, speaker and trainer sourcing, and targeted marketing and promotion to ensure your event aligns with your goals and attracts the right audience.

                    We excel in sponsorship and partnership management, securing support to enhance your event's impact. Our commitment to knowledge-sharing is evident in our content creation and documentation services, preserving valuable insights for attendees and future endeavors. We take feedback seriously, analyzing it for continuous improvement.

                    Additionally, we offer customized event mobile apps, providing attendees with seamless access to event resources. With [Your Company Name], you have a dedicated partner passionate about education, ready to make your educational events exceptional.</p>
            </div>
            <div className="w-[80%] mx-auto my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    events.map(event => <Cards key={event.id} event={event}></Cards>)
                }
            </div>
            <Reviews></Reviews>
            <Accordion></Accordion>
            <Footer></Footer>
        </div>
    );
};

export default Home;