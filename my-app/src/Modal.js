import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
   const { show, close, database } = props;
   const navigate = useNavigate();
   const [password,setPassword] = useState('');

   const handleOnSubmit = (event) => {
    // console.log(inputRef.current.value);
    if (password === database.Password){
        navigate("/AddCart");
    } else  {
        alert ("valid password is required")
    }
     }

     const handleOnChange = (event) => {
        setPassword(event.target.value)
     }

   
    return (
        <>
            {
                show ?
                    <div className="modalContainer">
                        <div className="modal">
                            <h2 className="modal_header">Go To Admin Page</h2>
                            <main className="main-modal">
                                <label className="modal_header-label">Password</label>
                                <br />
                                <input type="password" name = "password" value={password} id="password"
                             onChange={handleOnChange}
                                 />
                                
                            </main>
                            <footer className="modal-footer">
                                <button className="modal-close" onClick={close}>
                                    cancel
                                </button>
                                <button className="submit" onClick = {()=>handleOnSubmit()}>
                                    submit
                                </button>
                            </footer>
                        </div>

                    </div> : null
            }

        </>
    )
}

export default Modal;




