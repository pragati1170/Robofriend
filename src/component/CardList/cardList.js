import React from 'react';
import Card from '../card/card.js';
import './cardList.css';
export const CardList=({users})=>{
	return (
		  <div className="list">
	      {users.map(users=><Card key={users.id} name={users.name} email={users.email} id={users.id}/>)}
	      </div>
	 );
		
}
export default CardList;
