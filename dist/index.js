"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "20202020202", "", "hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLetestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previosBlock = getLetestBlock();
    const NewIndex = previosBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(NewIndex, previosBlock.hash, newTimestamp, data);
    const NewBlock = new Block(NewIndex, newHash, previosBlock.hash, data, newTimestamp);
    return NewBlock;
};
console.log(createNewBlock("Hello"), createNewBlock("bye bye"));
//# sourceMappingURL=index.js.map