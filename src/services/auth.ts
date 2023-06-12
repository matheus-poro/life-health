
const payload: any = { 
    grant_type: 'Client_Credentials',
    client_id: 'ad623adc-8fed-4706-b4ce-0fb382ba896e',
    client_secret: '41C8Q~WVRYbpxpzxOvH9nKPXwfPlSyZeQT6dvaj~',
    resource: 'api://myhealthease'
}

export const Authentication = async (payload: any) => {
    try {
        const response = await fetch('https://login.microsoftonline.com/b8afe944-9d87-4b56-8a8d-0ee761167cbf/oauth2/token', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
            },
            body: payload
        })
        .then((response) => {
            console.log(response);
            return response.json();
        }, err => {
            console.log(err);
        })
        console.log(response, "new");
        return response;
    } catch(err) {
        console.log(err);
    }
}
