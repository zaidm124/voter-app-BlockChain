const { assert } = require("chai");

const Voting = artifacts.require("./Voting.sol");

contract("Voting", ([, deployer, voter, candidate]) => {
  let voting;
  before(async () => {
    voting = await Voting.deployed();
  });
  describe("Deployement", async () => {
    it("Deployed Successfulyy", async () => {
      const address = await voting.address;
      assert.notEqual(address, null);
      assert.notEqual(address, "");
      assert.notEqual(address, 0x0);
      assert.notEqual(address, undefined);
    });
    it("it has a name", async () => {
      const name = await voting.name();
      assert.equal(name, "Voting webApp");
    });
  });

  describe("Add a candidate", async () => {
    let result, totalCandidates;
    before(async () => {
      result = await voting.addCandidate("Zaid Bhimala");
      result = await voting.addCandidate("Nabil Bhimala");
      totalCandidates = await voting.totalCandidates();
    });
    it("Credentials of candidate", async () => {
      assert.equal(totalCandidates, 2);
      let candidate = await voting.candidates(1);
      assert.equal(candidate.name, "Zaid Bhimala");
      assert.equal(candidate.id.toNumber(), 1);
      assert.equal(candidate.voteCount.toNumber(), 0);
      candidate = await voting.candidates(2);
      assert.equal(candidate.name, "Nabil Bhimala");
      assert.equal(candidate.id.toNumber(), 2);
      assert.equal(candidate.voteCount.toNumber(), 0);
      //   console.log(result.logs[0].args);
    });
  });

  describe("Vote a candidate", async () => {
    let result;
    before(async () => {
      result = await voting.voter(1, { from: voter });
      result = await voting.voter(2, { from: candidate });
    });
    it("Check the updated", async () => {
      let candidate = await voting.candidates(1);
      assert.equal(candidate.name, "Zaid Bhimala");
      assert.equal(candidate.id.toNumber(), 1);
      assert.equal(candidate.voteCount.toNumber(), 1);
      candidate = await voting.candidates(2);
      assert.equal(candidate.name, "Nabil Bhimala");
      assert.equal(candidate.id.toNumber(), 2);
      assert.equal(candidate.voteCount.toNumber(), 1);
    });
    it("Total number of voters", async () => {
      const voters = await voting.totalVoters();
      assert.equal(voters.toNumber(), 2);
    });
  });
});
