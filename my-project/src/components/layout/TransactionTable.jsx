import React from "react";
import Live from "../../assets/Live Market.png";
import Transaction from "../../assets/Transaction.png";

function TransactionTable() {
	return (
		<div className="p-4">
			{/* Container uses flex: on small screens stack vertically, on sm+ show row */}
			<div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
				<img
					src={Live}
					alt="Live Market"
					className="w-full sm:w-1/2 h-auto object-contain transform group-hover:scale-110 transition-all"
				/>

				<img
					src={Transaction}
					alt="Transaction"
					className="w-full sm:w-1/2 h-auto object-contain transform group-hover:scale-110 transition-all"
				/>
			</div>
		</div>
	);
}

export default TransactionTable;