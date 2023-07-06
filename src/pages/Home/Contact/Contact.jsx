import bg from '../../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div className='items-center' style={{ background: `url(${bg})` }}>
            <div className='text-center my-14 pt-14'>
                <p className='text-xl text-primary'>Contact Us</p>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className="flex flex-col items-center">
                <input type="text" placeholder="Email Address" className="input   input-bordered input-xs w-[280px] lg:w-[450px] " />
                <input type="text" placeholder="Subject" className="input mt-1 input-bordered input-xs w-[280px] lg:w-[450px]" />
                <textarea className="textarea mt-3 textarea-bordered w-[280px] lg:w-[450px]" placeholder="Your message"></textarea>
            </div>
            <div className='text-center mt-7 pb-12'>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default Contact;