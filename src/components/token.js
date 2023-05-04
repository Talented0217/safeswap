const Token = (props) => {
    const { token = "USDT" } = props;
    const { imageURI = "https://etherscan.io/token/images/tethernew_32.png" } = props;
    const { balance = 50 } = props;
    const { saleBalance = 50 } = props;
    const { isSale = false } = props;
    return (
        <>
            <div className="bg-rose-100 flex flex-row justify-between items-center text-black p-2 rounded-xl">
                <div className="w-9 h-9 p-2 flex flex-row items-center"> <img src={imageURI} /><div> {token}</div></div>
                {isSale == true ? <div> {saleBalance}</div> : ''}
                <div> {balance}</div>
            </div>
        </>);
}

export default Token;