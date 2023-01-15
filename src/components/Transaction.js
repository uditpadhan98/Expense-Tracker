import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
const sign=transaction.amount <0?'-':'+';

const {deleteTransaction}=useContext(GlobalContext);

  return (
    <div className='list'>
        <li className={transaction.amount<0?'minus':'plus'}>
            {transaction.text} <span>{sign}Rs.{Math.abs(transaction.amount)}</span>
            <button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>X</button>
        </li>
    </div>
  )
}
