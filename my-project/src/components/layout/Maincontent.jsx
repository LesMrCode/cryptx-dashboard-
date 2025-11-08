import React from 'react';
import MetricCards from "./MetricCards";
import ChartVisual from "./ChartVisual";
import TransactionTable from './TransactionTable'; 

function Maincontent() {
    return (
        <section className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
                <MetricCards />
                <ChartVisual />
            </div>
            <div className="w-full">
                <TransactionTable />
            </div>
        </section>


    )
}

export default Maincontent;