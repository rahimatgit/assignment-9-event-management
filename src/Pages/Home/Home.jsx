import { useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";


const Home = () => {

    const [events, setEvents] = useState([]);

    fetch('events.json')
        .then(res => res.json())
        .then(data => setEvents(data));

    return (
        <div>
            <Banner></Banner>
            <div className="w-[80%] mx-auto my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    events.map(event => <Cards key={event.id} event={event}></Cards>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;