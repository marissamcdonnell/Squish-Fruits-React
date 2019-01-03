import React from 'react'
import Modal from 'react-modal'
import { withAppContext } from './AppContext'
import { Redirect } from 'react-router-dom'

const ModalResult = ({appContext}) => {
    const alert = {
        content: {
            background: 'url("https://marissamcdonnellportfolio.files.wordpress.com/2018/04/alertfruit.png") no-repeat transparent',
            borderRadius: 'none',
            border: 'none',
            height: '620px',
            width: '1000px',
            top: '50%',
            bottom: 'unset',
            left: '50%',
            right: 'unset',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        }
    }

    return (
        <Modal
        isOpen={appContext.showModal}
        onRequestClose={appContext.closeModal}
        style={alert}
        contentLabel="Example Modal"
        >
        <div className="alert-box">
            <h3>Your squished fruit tastes like {appContext.taste}!</h3>
            <button className="button" onClick={appContext.closeModal}>Squish Again!</button>
        </div>
        {appContext.redirect == true ? <Redirect to="fruits" /> : ''}
        </Modal>
    )
}

export default withAppContext(ModalResult)
