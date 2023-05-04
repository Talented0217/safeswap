export const getAddress8 = (address) => {
    let len = address.length;
    if (address == null)
        return address;
    else
        return address.substring(0, 4) + "..." + address[len - 2] + address[len - 1];
}