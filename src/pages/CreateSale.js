import Card from "../components/card";
import Order from "../components/order";
import Token from "../components/token";
const CreateSale = () => {
    return (<>
        <div className="p-5 flex flex-row justify-evenly  w-full">
            <div className="space-y-5">
                <div className="text-3xl text-center py-5">Assets Not In Sale </div>
                <div className="grid grid-cols-4 gap-5 place-items-center">
                    <Card />
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
                    <Token />
                    <Token />
                    <Token />
                </div>
            </div>
            <div className="space-y-5">
                <div className="text-3xl text-center py-5">Assets Want </div>
                <div className="">
                    <div className="px-5 py-2 space-x-2">
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" placeholder="token address"></input>
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" placeholder="token id"></input>
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" placeholder="token amount"></input>
                    </div>
                    <div className="px-5 py-2 space-x-2">
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" placeholder="token address"></input>
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" placeholder="token id"></input>
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" placeholder="token amount"></input>
                    </div>
                    <div className="px-5 py-2 space-x-2">
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" placeholder="token address"></input>
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" placeholder="token id"></input>
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" placeholder="token amount"></input>
                    </div>
                </div>
                <div className="px-10 space-y-5">
                    <Token />
                    <Token />
                    <Token />
                </div>
            </div>
            <div className="space-y-5">
                <div className="text-3xl text-center py-5">Details </div>
                <div className="px-10 space-y-5">
                    <div className="bg-black text-white px-5 py-5 rounded-sm">
                        details:
                        <pre>
                            Order number: 1<br />
                            Created at: 02/01/2023….<br />
                            Due to: 03/03/2023…..<br />
                            Total:6 NFTs and 3120USD<br />
                        </pre>
                        <button className="bg-green-600 p-2 rounded-lg">Create Order</button>
                        <button className="bg-orange-600 p-2 rounded-lg">Cancle Order</button>

                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default CreateSale;