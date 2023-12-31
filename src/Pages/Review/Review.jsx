

const Review = ({singleReview}) => {

    const {name, review, image} = singleReview;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-full h-[220px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{review}</p>

            </div>
        </div>
    );
};

export default Review;