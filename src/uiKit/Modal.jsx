import React from 'react'

const Modal = ({isModalOpen,handleOk,handleCancel}) => {
  return (
     <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
         
      </Modal>
  )
}

export default Modal
