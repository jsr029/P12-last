export const HandleReachable = async (url) =>{
    const timeout = new Promise((resolve, reject) => {
        setTimeout(reject, 5000, 'Request timed out');
    });
    const request = fetch(url);
    try {
        const response = await Promise
            .race([timeout, request]);
            console.log(response)
        return true;
    }
    catch (error) {
        return alert('We are having some issue in connecting to EasySales server. Please check your internet connection');
    }
}
