import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */

        
        //this is working locally(showing 19:54:21, but not working in cloud)
        // body: new Date("2021-11-14 18:54:21 GMT+0000").toLocaleString('no-NO')       

        //this is working all the time
        //winter time
        // body: new Date("2021-11-14 18:54:21 GMT+0000").toLocaleString('no-NO', { timeZone: 'Europe/Amsterdam' })     //'14.11.2021, 19:54:21'
        //summer time
        body: new Date("2021-09-14 18:54:21 GMT+0000").toLocaleString('no-NO', { timeZone: 'Europe/Amsterdam' })     //'14.9.2021, 20:54:21'
    };

};

export default httpTrigger;