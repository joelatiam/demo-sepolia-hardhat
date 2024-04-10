import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Contract", (m) => {
  const contract = m.contract("Contract", []);

  m.call(contract, "changeX", [3]);
  m.call(contract, "x", []);

  return { contract };
});
