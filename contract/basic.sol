//  SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

//@dev This contract is used to test the functionality of the
contract myContract {
    // Simple storage variable
    string public status = "Not yet initialized";

    //setting the status to active
    function active() public returns (string memory) {
        status = "Active";
        return status;
    }

    //setting the status to inactive

    function inactive() public returns (string memory) {
        status = "Inactive";
        return status;
    }

    //returning the status
    function getStatus() public view returns (string memory) {
        return status;
    }
}
