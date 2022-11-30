import React from "react"
import App from "./ModalRender";
import DynaModal from "./component/DynaModal";

const Executor = () => {

    return (
        <div>
            <DynaModal text="Code send" />
            <App />
        </div>
    )
}

export default Executor;