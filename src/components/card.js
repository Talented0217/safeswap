const Card = (props) => {
    const { width = 150 } = props;
    const { height = 175 } = props;
    const { state = "noselling" } = props;
    const { imageURI = "https://ipfs.io/ipfs/QmRNqd4g9qUHrqSM6xmqaXBASvt9hi3RnEfduCodRFxWiJ" } = props;
    const { cnt = 1 } = props;
    return (<>
        <div className={`w-[${width}px] h-[${height}px] relative`}>
            {
                state == "selling" ?
                    <div className="absolute w-full text-center py-0.5 align-middle text-white bg-green-600">{state}</div> : ''
            }
            <div className="w-full h-full">
                <img src={imageURI} className="w-full h-full" />
            </div>
            <div className="absolute bottom-0 bg-red-800 text-white rounded-sm px-2">
                {cnt}
            </div>
        </div>
    </>);
};
export default Card;