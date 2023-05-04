import Card from "../components/card";
import Order from "../components/order";
import Token from "../components/token";
import BuyDialog from "../components/buyDialog";
import { useState } from "react";
const ViewOrder = () => {
    const [dialogVisible, setDialog] = useState(false);
    const toggleDialog = () => {
        setDialog((flag) => { return !flag });
    }
    return (<>
        <div className="p-5 flex flex-row justify-evenly  w-full">
            <div className="space-y-5">
                <div className="text-3xl text-center py-5">Current Sale Lists </div>
                <div className="px-10 space-y-5">
                    <Order number={2} />
                    <Order number={3} />
                    <Order number={7} />
                    <Order number={10} />
                    <Order number={99} />
                    <Order number={126} />

                </div>
                <div className="bg-black text-white px-5 py-5 rounded-sm">
                    details:
                    <pre>
                        Order number: 1<br />
                        Created at: 02/01/2023….<br />
                        Due to: 03/03/2023…..<br />
                        Total:6 NFTs and 3120USD<br />
                    </pre>

                    <div className="w-full flex justify-center">
                        <button className="bg-green-600 p-2 rounded-lg w-full" onClick={() => {
                            setDialog(true);
                        }}>Buy Order</button>
                    </div>

                </div>
            </div>
            <div className="space-y-5">
                <div className="text-3xl text-center py-5">Assets In Sale</div>
                <div className="grid grid-cols-4 gap-5 place-items-center">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="px-10 space-y-5">
                    <Token token="USDC" />
                    <Token />
                    <Token />
                    <Token token="ETH" balance="20" />
                </div>

            </div>

            <div className="space-y-5">
                <div className="text-3xl text-center py-5">Assets Want</div>
                <div className="grid grid-cols-4 gap-5 place-items-center">
                    <Card />
                    <Card />
                    <Card cnt="2" />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="px-10 space-y-5">
                    <Token token="USDC" balance="100" />
                </div>

            </div>

        </div>
        <BuyDialog visible={dialogVisible} toggleDialog={toggleDialog} />
    </>)
}
export default ViewOrder;