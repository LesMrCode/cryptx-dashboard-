import React from 'react';
import MetricCards from "./MetricCards";
import ChartVisual from "./ChartVisual";
import TransactionTable from './TransactionTable'; 

//* Structure of the layout for the main content of the dashboard 

function Maincontent() {
    return (
        <section className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="w-full">
                    <MetricCards />
                </div>
                <div className="w-full">
                    <ChartVisual />
                </div>
            </div>
            <div className="w-full">
                <TransactionTable />
            </div>
        </section>


    )
}

export default Maincontent;