import { useState } from "react";
import { Button, Loader, Modal } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function DynamicModal(props) {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState(0);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEnter = () => {
        setTimeout(() => setRows(10), 1000);
    };

    return (
        <center>
            <div>
                <div style={{ marginTop: 20, width: 400 }}>
                    <div className="modal-container">
                        <Button onClick={handleOpen} appearance="primary"
                                color="green">Open</Button>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            onEntered={handleEnter}
                            onExited={() => {
                                setRows(0);
                            }}
                        >
                            <Modal.Header> {/*Close modal*/} </Modal.Header>
                            <Modal.Body>
                                {rows ? (
                                    <div>
                                        <h3>Welcome to GeeksforGeeks portal!</h3>
                                    </div>
                                ) : (
                                    <div style={{ textAlign: "center" }}>
                                        <Loader size="lg" />
                                    </div>
                                )}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleClose} appearance="primary"
                                        color="green">
                                    Ok
                                </Button>
                                <Button onClick={handleClose} appearance="subtle">
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </center>
    );
}
