
import { useState } from "react";
import { ModalWindow } from '../components/modalWindow/ModalWindow'

function Item({title, id, status, tasks, setTasks, taskTime}) {
    const [checked, setChecked] = useState(status);
    const [isEdit, setIsEdit] = useState(false);
    const [taskEdit, setTaskEdit] = useState(title);
    const [modalState, setModalState] = useState(false);

    const classes = ['todo'];
    if (checked) {
        classes.push('status');
    }

    const onUpdateStatus = () => {
        setChecked(!checked);
        tasks.map(item => {
            if(item.id === id) {
                item.status = !checked;
            }
            return true;
        });
        setTasks([...tasks]);
    };

    const formatDateTime = (taskTime) => {
        const time = new Date(taskTime);
        return isNaN(time) ? 'Invalid !' : time.toLocaleDateString() + ' ' + time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    };

    const onRemoveItem = () => {
        setTasks([...tasks.filter(item => item.id !== id)]);
    };

    const onSaveTime = () => {
        const modifiTasks = tasks.map((item) => {
            if(item.id === id) {
                return {...item, title: taskEdit};
            }
            return item;
        });
        setTasks(modifiTasks);

        setIsEdit(false);
    };

    const onEditItem = (e) => {
        setTaskEdit(e.target.value);
    };

    if(isEdit) {
        return(
            <li className={classes.join(' ')}>
                <div>
                <label>
                    <input type='text' value={taskEdit} onChange={onEditItem}/>
                </label>
                <button onClick={onSaveTime}>Save</button>
                <i className="material-icons red-text" onClick={onRemoveItem}>X</i>
                </div>
                  
            </li>
        )
    } else {
        return(
            <li className={classes.join(' ')}>
                <div>
                <label>
                    <input type="checkbox" checked={checked} onChange={onUpdateStatus}/>
                    <span>{title}</span>
                    <small>{formatDateTime(taskTime)}</small>
                </label>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <i className="material-icons red-text" onClick={() => setModalState(true)}>X</i>
                </div>
                <ModalWindow call={modalState} onDestroy={() => setModalState(false)} onRemoveItem={onRemoveItem}/>
            </li>
        )
    }

    
}

export default Item;