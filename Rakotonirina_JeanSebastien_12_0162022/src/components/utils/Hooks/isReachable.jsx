import HandleMockedData from "../HandleMockedData";

export const isReachable = async () =>{
    const timeout = new Promise((resolve, reject) => {
        setTimeout(reject, 5000, 'Request timed out');
    });
    const request = fetch('http://localhost:5000/user/12');
    try {
        const response = await Promise
            .race([timeout, request]);
        return true;
    }
    catch (err) {
        return HandleMockedData(12)
    }
}
