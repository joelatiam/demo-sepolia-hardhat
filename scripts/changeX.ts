import 'dotenv/config';
import hre from 'hardhat';

const CONTRACT_ADDR = process.env.CONTRACT_ADDR as string;


async function main(){
    
    const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);
    

    const oldValue = parseInt((await contract.x()).toString());
    console.log('Old Value : ', oldValue);

    const tx = await contract.changeX(oldValue+1);
    await tx.wait();

    const newValue = parseInt((await contract.x()).toString());

    console.log('New Value : ', newValue);
}

main().catch((error)=> {
    console.error(error);
    process.exit(1);
})


