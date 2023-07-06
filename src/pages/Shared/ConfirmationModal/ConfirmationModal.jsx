
const ConfirmationModal = ({ title, message, closeModal, successAction, modalData, successButton }) => {
    return (
        <div>
            <input type="checkbox" id="open-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="open-modal"
                            className="btn btn-primary">{successButton}</label>
                        <button onClick={closeModal} className="btn btn-outline">cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;