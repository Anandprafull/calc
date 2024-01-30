import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import CalculatorContract from './CalculatorContract.json';

function Calculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const init = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const network = await provider.getNetwork();
      const contractAddress = CalculatorContract.networks[network.chainId].address;
      const contractABI = CalculatorContract.abi;
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const result = await contract.add(1, 2);
      setResult(result.toString());
    };
    init();
  }, []);

  const handleAddition = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const network = await provider.getNetwork();
    const contractAddress = CalculatorContract.networks[network.chainId].address;
    const contractABI = CalculatorContract.abi;
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const value1 = ethers.utils.parseEther(input1);
    const value2 = ethers.utils.parseEther(input2);
    const result = await contract.add(value1, value2);
    setResult(result.toString());
  };

  const handleSubtraction = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const network = await provider.getNetwork();
    const contractAddress = CalculatorContract.networks[network.chainId].address;
    const contractABI = CalculatorContract.abi;
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const value1 = ethers.utils.parseEther(input1);
    const value2 = ethers.utils.parseEther(input2);
    const result = await contract.subtract(value1, value2);
    setResult(result.toString());
  };

  const handleMultiplication = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const network = await provider.getNetwork();
    const contractAddress = CalculatorContract.networks[network.chainId].address;
    const contractABI = CalculatorContract.abi;
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const value1 = ethers.utils.parseEther(input1);
    const value2 = ethers.utils.parseEther(input2);
    const result = await contract.multiply(value1, value2);
    setResult(result.toString());
  };

  const handleDivision = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const network = await provider.getNetwork();
    const contractAddress = CalculatorContract.networks[network.chainId].address;
    const contractABI = CalculatorContract.abi;
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const value1 = ethers.utils.parseEther(input1);
    const value2 = ethers.utils.parseEther(input2);
    const result = await contract.divide(value1, value2);
    setResult(result.toString());
  };

  return (
    <div>
      <form>
        <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
        <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        <button onClick={handleAddition}>
          +
        </button>
        <button onClick={handleSubtraction}>
          -
        </button>
        <button onClick={handleMultiplication}>
          *
        </button>
        <button onClick={handleDivision}>
          /
        </button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;