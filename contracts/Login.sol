// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
contract Login{

    //Each bytes32 var would occupy one slot
    //Because bytes32 var has 256 bits which is the size of one Slot.
    
    //Slot-0
    bytes32 private username;
    
    //Slot-1
    bytes32 private password;

   constructor(bytes32 _username, bytes32 _password){
    username = _username;
    password = _password;
   }
}