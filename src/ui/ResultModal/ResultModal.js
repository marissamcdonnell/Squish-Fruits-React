import React, { useState } from 'react'
import Modal from 'react-modal'
import { Redirect } from 'react-router-dom'

import alertImg from '../../images/alertFruit.png'
import styles from './ResultModal.module.scss'

Modal.setAppElement('#root')

const ResultModal = ({ modalToggle, setModalToggle, result }) => {
  const [reset, setReset] = useState(false)

  const alert = {
    content: {
      background: `url(${alertImg}) no-repeat transparent`,
      borderRadius: 'none',
      border: 'none',
      height: '620px',
      width: '1000px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
  }

  const handleCloseModal = () => {
    setReset((s) => !s)
  }

  return (
    <>
      {!reset ? (
        <Modal
          isOpen={modalToggle}
          onRequestClose={() => setModalToggle((s) => !s)}
          style={alert}
          contentLabel="Result Modal"
        >
          <div className={styles.container}>
            <h3>Your squished fruit tastes like {result}!</h3>
            <button className="button" onClick={handleCloseModal}>
              Squish Again!
            </button>
          </div>
        </Modal>
      ) : (
        <Redirect
          to={{
            pathname: '/fruits',
            state: { error: 'need fruit' },
          }}
        />
      )}
    </>
  )
}

export default ResultModal
