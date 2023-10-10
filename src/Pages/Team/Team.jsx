

const Team = ({ member }) => {

    const { name, designation, image } = member;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            {/* <div className="avatar flex justify-center">
                <div className="w-40 rounded-full">
                    <img src={image} />
                </div>
            </div> */}
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-[250px] w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default Team;