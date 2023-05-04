import Card from "../components/card";
import Order from "../components/order";
import Token from "../components/token";
const Dashboard = () => {
    return (<>
        <div className="p-5 flex flex-row justify-evenly w-full">
            <div className="space-y-5">
                <div className="text-3xl text-center py-5">Assets </div>
                <div className="grid grid-cols-4 gap-5 place-items-center">
                    <Card />
                    <Card />
                    <Card state="selling" />
                    <Card />
                    <Card state="selling" />
                    <Card />
                    <Card />
                    <Card />
                    <Card state="selling" />
                    <Card />
                    <Card state="selling" />
                    <Card />
                    <Card />
                    <Card />
                    <Card state="selling" />
                    <Card />
                    <Card state="selling" />
                    <Card />
                </div>
                <div className="px-10 space-y-5">
                    <Token />
                    <Token />
                    <Token />
                </div>
            </div>
            <div className="space-y-5">
                <div className="text-3xl text-center py-5">Current Sale Lists </div>
                <div className="px-10 space-y-5">
                    <Order number={2} />
                    <Order number={3} />
                    <Order number={122} />
                </div>
            </div>
            <div className="space-y-5">
                <div className="text-3xl text-center py-5">Sale History </div>
                <div className="px-10 space-y-5">
                    <Order number={1} />
                    <Order number={4} />

                </div>
            </div>
        </div>
    </>)
}
export default Dashboard;