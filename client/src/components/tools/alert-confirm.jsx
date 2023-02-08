import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../../styles/confirm-alert.scss'

const AlertConfirm = (method, cartId) => {

    const accept = (onClose) => {
        method(cartId)
        onClose()
    }

    confirmAlert({
        customUI: ({onClose}) => {
            return (
                <div className='confirm_alert'>
                    <h1 className='text-white text-lg text-center mb-3'>Are you sure?</h1>
                    <p className='text-sm font-medium color-auro_metal_saurus text-center mb-6'>You want to delete this
                        food?</p>
                    <div className="flex justify-between items-center">
                        <button className='btn_confirm accept_confirm' onClick={() => accept(onClose)}>Yes, Delete it!
                        </button>
                        <button className='btn_confirm cancel_confirm' onClick={onClose}>No</button>
                    </div>
                </div>
            );
        }
    })
}

export default AlertConfirm