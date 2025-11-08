import React from "react";
import Live from "../../assets/Live Market.png";
import Transaction from "../../assets/Transaction.png";

function TransactionTable() {
	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-200">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
				<img 
					src={Live} 
					alt="Live Market" 
					className="w-full h-[400px] object-cover rounded-lg shadow-sm hover:scale-[1.02] transition-all"
				/>
				
				<img 
					src={Transaction} 
					alt="Transaction" 
					className="w-full h-[400px] object-cover rounded-lg shadow-sm hover:scale-[1.02] transition-all"
				/>
			</div>
		</div>
	);
}

export default TransactionTable;