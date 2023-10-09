import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {

    const allData = useLoaderData();
    const { id } = useParams();
    const matchId = parseInt(id);

    const detail = allData.find(data => data.id === matchId);
    console.log(detail);

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={detail.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{detail.name}</h1>
                    <p className="py-6">{detail.detail_description}</p>
                    
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;