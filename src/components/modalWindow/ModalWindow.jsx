import '../modalWindow/ModalWindow.css';

export const ModalWindow = ({call, onDestroy, onRemoveItem}) => {
    if(!call) {
        return null;
    }

    return(
        <div className='myModal'>
            <div className="myModal-content" >
                <i className='close' onClick={onDestroy}>X</i>
                <h2>Delite?</h2>
                <div className="myBtns">
                    <button className='myAccept'onClick={onRemoveItem}>Delite</button>
                    <button className='myReject' onClick={onDestroy}>Close</button>
                </div>
            </div>
        </div>
    )
}