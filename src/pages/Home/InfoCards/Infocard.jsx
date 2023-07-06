const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;


    return (
        <div className={`card px-6  text-white md:card-side   shadow-xl ${bgClass}`}>
            <figure className="my-5"><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;