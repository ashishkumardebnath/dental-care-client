
const Review = ({ review }) => {
    const { name, description, img, location } = review;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar me-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;