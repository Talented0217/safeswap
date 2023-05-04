import { useEffect, useState } from "react";

const BuyDialog = (props) => {

    const toggleDialog = () => {
        props.toggleDialog();
    }

    if (props.visible === false) return <></>
    return (<>
        <div className="absolute w-full h-screen bg-gray-300/50 top-0 flex justify-center items-center z-10">
            <div className="relative m-auto bg-black text-white p-10">
                <button className="absolute top-0 right-2 text-white text-lg" onClick={toggleDialog}>X</button>
                <div className="text-2xl text-center">Exchange Your Assets
                </div>

                <div className="space-y-5 my-10">
                    <div className="bg-green-600 px-5 py-2 text-lg rounded-md">Checking if you have assets the seller wants to buy</div>

                    <div className="bg-green-700 px-5 py-2 text-lg rounded-md">Confirming Transaction</div>

                    <div className="bg-green-700 px-5 py-2 text-lg rounded-md">Confirmed! Exchange Suceeded</div>
                </div>

                <button className="m-auto bg-orange-600 px-5 py-2 text-lg rounded-md w-full">Cancle Buy Order</button>
            </div>
        </div>
    </>)
}

export default BuyDialog;