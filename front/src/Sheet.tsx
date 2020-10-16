import React, { useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeSheetAction } from './actions/SheetAction'
import { IState } from './states/IState'
import { ISheet } from './states/ISheet'
import { store } from './Store'
import AddItem from './AddItem'

const Sheet: React.FC<{}&RouteComponentProps<{id: string}>> = (p) => {
    const { id, users, items } = useSelector<IState, ISheet>(a => a.sheet)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchInfo(p.match.params.id)
    }, [])

    const data = items.map(item => {
        const v = item.amount / users.length
        return users.map((_, i) => i===item.user?item.amount-v:-v)
    })

    const tbody = items.map((item, i) => {
        return <tr>
            <td>{item.name}</td>
            {data[i].map(v => <td>{Math.floor(v)}</td>)}
        </tr>
    })

    return (
        <div>
            <div><Link to={`/sheet/${p.match.params.id}/add`}>追加</Link><button>支払</button></div>
            <div>
                <table>
                    <tr><th>項目</th>{users.map(u => <th>{u}</th>)}</tr>
                    {tbody}
                </table>
            </div>

            <AddItem />
        </div>
    )
}

const fetchInfo = (sid: string) => {
    const { id, users, items } = store.getState().sheet
    const dispatch = store.dispatch

    // TODO: fetch information from sever here

    dispatch(changeSheetAction({
        id: sid,
        users: ['hoge', 'fuga', 'piyo'],
        items: [{
            name: '高速代',
            user: 0,
            amount: 5000
          }, {
            name: '夕飯',
            user: 2,
            amount: 4000
          }]
    }))
}

export default Sheet
