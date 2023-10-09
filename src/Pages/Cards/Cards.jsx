import { Link, useParams } from "react-router-dom";


const Cards = ({ event }) => {

    const {id, name, image, short_description, detail_description, price} = event;
    // const {id} = useParams();

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full h-[250px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold">{name}</h2>
                <p className="text-sm font-medium">{short_description}</p>
                <p className="text-sm font-medium">Price: {price} $</p>
                <div className="card-actions justify-start">
                    <Link to={`/details/${id}`}>
                    <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;