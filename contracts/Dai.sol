// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dai is ERC20 {
    address admin;

    constructor() ERC20("Dai Token", "DAI") {
        admin = msg.sender;
        _mint(msg.sender, 3 * 10**18);
    }
}
