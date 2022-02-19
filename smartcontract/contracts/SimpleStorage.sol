//SPDX-License-Identifier:MIT

pragma solidity 0.8.4;
import "hardhat/console.sol";

// Store a single data point and allow fetching/updating of that datapoint
contract SimpleStorage {
    // data point
    string public storedData;

    event myEventTest(string eventOutput);

    function setData(string memory myText) public {
        storedData = myText;
        emit myEventTest(myText);
    }

    function getData() public view returns (string memory) {
        return storedData;
    }
}
