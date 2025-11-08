import React from "react"
import LiveMarketImg from "../../assets/Live Market.png"
import TransactionImg from "../../assets/Transaction.png"

function TransactionTable() {

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* images for the transaction section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        <img
          src={LiveMarketImg}
          alt="Live Market"
          className="w-full h-[300px] object-contain rounded-lg shadow-sm hover:scale-[1.02] transition-all"
        />

        <img
          src={TransactionImg}
          alt="Transaction"
          className="w-full h-[300px] object-contain rounded-lg shadow-sm hover:scale-[1.02] transition-all"
        />
      </div>
    </div>
  )
}

export default TransactionTable
