const Order = (props) => {
    const { type = "Sale" } = props;
    const { number = 1 } = props;
    return (<>
        <div className="bg-lime-900 rounded-xl px-10 py-2 text-white">
            Sale Order #{number}

        </div>
    </>);
};
export default Order;