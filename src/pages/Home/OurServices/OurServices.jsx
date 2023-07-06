import Fluoride from '../../../assets/images/cavity.png'
import Cavity from '../../../assets/images/cavity.png'
import Whitening from '../../../assets/images/whitening.png'
import OurService from './OurService';

const OurServices = () => {
    const ourServiceData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: Fluoride,
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: Cavity,
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: Whitening,

        },
    ]
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <p className="  font-bold text-success">OUR SERVICES</p>
                <h2 className="text-3xl ">Services We Provide</h2>
            </div>
            <div className='grid mt-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    ourServiceData.map(service => <OurService
                        key={service.id}
                        service={service}
                    ></OurService>)
                }
            </div>
        </div>
    );
};

export default OurServices;