// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Collateral is ERC20 {
    address admin;

    IERC20 public dai;

    constructor(address _dai) ERC20("Collateral Token", "COL") {
        admin = msg.sender;
        dai = IERC20(_dai);
    }

    function providerLiquidity(uint256 _amount) external {
        require(
            dai.balanceOf(msg.sender) >= _amount,
            "You don't have anough Dais"
        );
        //first approve this contract on script
        dai.transferFrom(msg.sender, address(this), _amount);
        _mint(msg.sender, _amount);
    }
}
