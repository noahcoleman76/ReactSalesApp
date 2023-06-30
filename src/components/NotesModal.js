import React, { useState } from "react";

export default function Modal({ prospect, prospectDataList, localStorageDataName }) {
    const [modal, setModal] = useState(false);
    const [text, setText] = useState(prospect.notes);

    const toggleModal = () => {
        setModal(!modal);
    };
    const updateNotes = () => {
        Object.keys(prospectDataList).forEach((item) => {
            if (prospectDataList[item].id === prospect.id){
                prospectDataList[item].notes = text
            }
        })
        localStorage.setItem(`${localStorageDataName}`, JSON.stringify(prospectDataList))
        toggleModal()
    }

    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Notes
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>{prospect.companyName}</h2>
                        <textarea type="text" placeholder="Enter Notes here" defaultValue={text} className="notes-input" onChange={(event => { setText(event.target.value) })} />
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                        <button onClick={updateNotes}>Update</button>
                    </div>

                </div>
            )}
        </>
    );
}