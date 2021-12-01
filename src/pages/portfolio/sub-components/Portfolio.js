import React from 'react'
import SectionBox from '../components/SectionBox'
import SectionBoxTwo from '../components/SectionBoxTwo'

const Portfolio = ({allErcBalance}) => {
    return (
        <div className="my-3">
            <div className="flex flex-col lg:flex-row gap-3">
            <SectionBox title="Total Balance" bagdeContent="Assets" totalErc20={allErcBalance}/>
            {/* <SectionBox title="Savings" bagdeContent="savings" /> */}

            </div>
            <SectionBoxTwo title="WALLET" buttonTitle="SEE ASSETS" text="You don't have any assets yet. Do you want to buy one?" />
            <SectionBoxTwo title="SAVINGS" buttonTitle="Coming Soon" text="You don’t have any savings yet. Do you want to make one?" />
            {/* <SectionBoxTwo title="LIQUIDITY" buttonTitle="CREATE LIQUIDITY" text="You don’t have liquidity yet. Do you want to make one?" /> */}
        </div>
    )
}

export default Portfolio
