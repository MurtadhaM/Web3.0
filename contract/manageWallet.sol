// SPDX-License-: MIT
pragma solidity  ^0.8.10;


contract Wallet{
    
    address[]   wallet;






    constructor (address  _walletAddress )  {

        wallet.push(_walletAddress);

        
        
    }


    function addAddress(address _walletAddress, address _address) public {

        wallet.push(_walletAddress);

    }



    }




    function SendTransaction(address payable _from , address   _to, uint _value) public  {
            
           _from.send(_to, _value);;
           
    



     
     ;

    }





}