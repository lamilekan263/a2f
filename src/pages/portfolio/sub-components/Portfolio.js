import React from 'react'
import SectionBox from '../components/SectionBox'
import SectionBoxTwo from '../components/SectionBoxTwo'

const Portfolio = () => {
    return (
        <div className="my-3">
            <div className="flex flex-col lg:flex-row gap-3">
            <SectionBox title="Total Balance" bagdeContent="Assets"/>
            <SectionBox title="Savings" bagdeContent="savings" />
            <SectionBox title="Liquidity Pool" bagdeContent="pools" />
            </div>
            <SectionBoxTwo title="WALLET" buttonTitle="BUY ASSETS" text="You don't have any assets yet. Do you want to buy one?" />
            <SectionBoxTwo title="SAVINGS" buttonTitle="MAKE A DEPOSIT" text="You don’t have any savings yet. Do you want to make one?" />
            <SectionBoxTwo title="LIQUIDITY" buttonTitle="CREATE LIQUIDITY" text="You don’t have liquidity yet. Do you want to make one?" />
        </div>
    )
}

export default Portfolio
