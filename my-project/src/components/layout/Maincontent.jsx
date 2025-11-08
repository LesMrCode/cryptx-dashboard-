import React from 'react';
import MetricCards from "./MetricCards";
import ChartVisual from "./ChartVisual";
import TransactionTable from './TransactionTable'; 

function Maincontent() {
    return(

<section className="space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <MetricCards />
            <ChartVisual />                
                </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <TransactionTable />
        </div>
		</section>


    )
}

export default Maincontent;