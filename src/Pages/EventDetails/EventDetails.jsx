import { useLoaderData, useParams } from "react-router-dom";
import Cart from "../../Routes/Cart/Cart";


const EventDetails = () => {

    const allData = useLoaderData();
    const { id } = useParams();
    const matchId = parseInt(id);

    const detail = allData.find(data => data.id === matchId);
   

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={detail.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{detail.name}</h1>
                    <p className="py-6">{detail.detail_description}</p>                  
                    <button onClick={() => <Cart key={detail.id} matchId={matchId}></Cart>} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;