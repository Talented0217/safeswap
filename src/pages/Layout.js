import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import { connectToWallet } from "../utils/api";

import { getAddress8 } from "../utils/address";

import {
    connectWallet, disconnectWallet
} from "../store/reducers/accountSlice";
import { useState } from "react";




const Layout = () => {

    const account = useSelector((state) => state.account);
    const dispatch = useDispatch()

    const [currentTab, setTab] = useState(0);

    const connectToMetamask = async () => {
        if (account.address == null) {
            const addr = await connectToWallet();
            dispatch(connectWallet(addr));
        }
        else {
            dispatch(disconnectWallet());
        }
    }

    return (
        <>
            <div className="h-[60px] py-2 bg-gray-900 px-10">
                <div className="flex flex-row text-white mt-5 float-right space-x-4 px-4 text-center">
                    <div className="w-40 hover:cursor-pointer hover:underline hover:text-lg" onClick={connectToMetamask}>
                        {account.address == null ? "Connect Wallet" : getAddress8(account.address)}</div>
                </div>
                <div className="flex flex-row text-white mt-5 float-right space-x-4 px-4 mr-10 text-center">
                    <div onClick={() => { setTab(0) }} className={`w-20 hover:cursor-pointer hover:underline hover:text-lg ${currentTab == 0 ? 'text-lg' : ''}`}>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                    <div onClick={() => { setTab(1) }} className={`w-20 hover:cursor-pointer hover:underline hover:text-lg ${currentTab == 1 ? 'text-lg' : ''}`}>
                        <Link to="/sell">Sell Items</Link>
                    </div>
                    <div onClick={() => { setTab(2) }} className={`w-20 hover:cursor-pointer hover:underline hover:text-lg ${currentTab == 2 ? 'text-lg' : ''}`}>
                        <Link to="/buy">Buy Items</Link>
                    </div>
                    <div onClick={() => { setTab(3) }} className={`w-20 hover:cursor-pointer hover:underline hover:text-lg ${currentTab == 3 ? 'text-lg' : ''}`}>
                        <Link to="/create">Create Order</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Layout;