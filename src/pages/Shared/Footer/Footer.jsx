import bgFooter from '../../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer className="p-10">
            <div
                style={{
                    background: `url(${bgFooter})`,
                    backgroundSize: 'cover'
                }}
                className="footer ">
                < div >
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div >
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div >
            <div className="text-center mt-24">
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer >
    );
};

export default Footer;