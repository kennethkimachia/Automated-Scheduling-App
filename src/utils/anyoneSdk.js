import { Anon } from "@anyone-protocol/anyone-client";
import { AnonControlClient } from "@anyone-protocol/anyone-client";


async function anonCircuit() {
   const anon = new Anon();
   
    try {
        await anon.start();
        await new Promise(resolve => setTimeout(resolve, 12000));

        const anonControlClient = new AnonControlClient(); 
        await anonControlClient.authenticate() 

        const circuits = await anonControlClient.circuitStatus();
        console.log(JSON.stringify(circuits, null, 2));

       
        anonControlClient.end()

         
        
        
    } catch(error) {
        console.log(error)
    } finally {
        
        await anon.stop()
    }
}

anonCircuit()