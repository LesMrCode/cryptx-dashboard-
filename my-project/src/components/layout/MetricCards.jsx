import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Bitcoin from "../../assets/Bitcoin.png"; 
import Ethereum from "../../assets/Ethereum.png";
import Cardano from "../../assets/Cardano.png";
import Litecoin from "../../assets/Litecoin.png";

const priceData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$40,291",
    change: "+0.25%",
    isPositive: true,
    bgColor: "bg-yellow-400",
    image: Bitcoin, 
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$18,291",
    change: "+0.25%",
    isPositive: true,
    bgColor: "bg-blue-500",
    image: Ethereum,
  },
  {
    id: 3,
    name: "Litecoin",
    symbol: "LTC",
    price: "$8,291",
    change: "+0.25%",
    isPositive: true,
    bgColor: "bg-blue-600",
    image: Litecoin,
  },
  {
    id: 4,
    name: "Cardano",
    symbol: "ADA",
    price: "$3,291",
    change: "-2.05%",
    isPositive: false,
    bgColor: "bg-green-500",
    image: Cardano,
  },
]


function MetricCards() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {priceData.map((card) => (
        <div key={card.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`${card.bgColor} w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold`}
            >
              {card.symbol[0]}
            </div>
            <div
              className={`flex items-center gap-1 text-xs font-medium ${
                card.isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {card.isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              {card.change}
            </div>
          </div>
          <div className="mb-2">
            <div className="text-2xl font-bold">{card.price}</div>
          </div>
          <div className="text-xs text-muted-foreground">
            {card.name} · {card.symbol}
          </div>
        </div>
      ))}
    </div> 
    )
}

export default MetricCards;