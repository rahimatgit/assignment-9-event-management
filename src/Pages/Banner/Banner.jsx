
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/human-resources-people-networking-concept_31965-1706.jpg?w=1380)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div data-aos="fade-down" data-aos-duration="3000" className="">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to</h1>
                    <h1 className="mb-5 text-6xl font-bold">EdeVentsPro!</h1>
                    <p className="mb-5 font-bold">Welcome to EduVentsPro, where educational excellence meets event innovation. We specialize in crafting unforgettable educational events that inspire, educate, and transform. Whether you're planning a conference, seminar, workshop, or any educational gathering, we're here to turn your vision into reality. With a passion for education and a commitment to excellence, we're your trusted partner in creating remarkable experiences. Explore our services, meet our team, and embark on a journey of educational event success with EduVentsPro.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;