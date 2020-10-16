import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { ISheet } from './states/ISheet';
import { IState } from './states/IState';
import './AddItem.css'

const AddItem: React.FC = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [user, setUser] = useState(0)
    const { id, users, items } = useSelector<IState, ISheet>(a => a.sheet)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break
            case 'amount':
                const a = Number(e.target.value)
                if(!Number.isNaN(a)) setAmount(a)
                break
            case 'user':
                setUser(Number(e.target.value))
                break
            default:
                break;
        }
    }

    const addButtonClick = () => {
        // TODO: send data to server here
        setName('')
        setAmount(0)
        setUser(0)
    }

    return <div>
        <h1>追加</h1>
        <ul>
            <li>
                <label>項目</label>
                <input value={name} name="name" onChange={handleChange}></input>
            </li>
            <li>
                <label>金額</label>
                <input value={amount} name="amount" onChange={handleChange}></input>
            </li>
            <li>
                <label>建替者</label>
                <select value={user} name="user" onChange={handleChange}>
                    {users.map((u, i) => <option value={i}>{u}</option>)}
                </select>
            </li>
        </ul>

        <button onClick={addButtonClick}>追加</button>
        <button>キャンセル</button>
    </div>
}

export default AddItem
