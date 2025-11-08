import React from "react";
import Live from "../../assets/Live Market.png";
import Transaction from "../../assets/Transaction.png";

 function TransactionTable() {
	return (
		<div className="p-4">
		<img src={Live} alt="Live Market" className="w-full h-auto object-contain group-hover:scale-110 transition-all"/>
        
        <img src={Transaction} alt="Transaction" className="w-full h-auto object-contain group-hover:scale-110 transition-all"/>
		</div>

       
	)
}

export default TransactionTable; 