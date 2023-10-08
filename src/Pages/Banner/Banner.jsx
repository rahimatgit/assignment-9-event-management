
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/human-resources-people-networking-concept_31965-1706.jpg?w=1380)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
                    <p className="mb-5 font-bold">Welcome to our website dedicated to the exciting world of skills and careers! Your career journey is like a snow-covered mountain, and your skills are the skis that help you navigate the slopes. Whether you are a novice looking to learn the basics or an expert seeking to sharpen your talents, our platform is here to provide you with the knowledge and resources you need to excel in your career. Explore our offerings, and lets carve out a path to success together!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;