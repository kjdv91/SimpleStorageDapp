
const hre = require("hardhat");

async function main() {

  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const simple = await SimpleStorage.deploy();

  await simple.deployed();

  console.log("Simple Storage deployed to:", simple.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
