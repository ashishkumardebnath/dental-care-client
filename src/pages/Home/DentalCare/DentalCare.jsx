import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero mt-24 ">
            <div className="hero-content flex-col lg:flex-row ">
                <img src={treatment} className=" lg:w-1/3 lg:ml-32  rounded-lg shadow-2xl" />
                <div className='lg:ms-16'>
                    <h1 className="text-5xl font-bold">Exceptional Dental <br />
                        Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point <br />
                        of using Lorem Ipsumis that it has a more-or-less normal <br />
                        distribution of letters,as opposed to using Content here, content <br />
                        here, making it look like readable English. Many desktop <br />
                        publishing packages and web page</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default DentalCare;