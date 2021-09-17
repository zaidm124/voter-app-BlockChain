import React from "react";
import Web3 from "web3";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./myComponents/NavBar";
import Voting from "./abis/Voting.json";
import User from "./myComponents/User";
import Main from "./myComponents/Main";
import AddCandidate from "./myComponents/AddCandidate";
import RegisterVoters from "./myComponents/RegisterVoters";
import DelCandidate from "./myComponents/DeleteCandidate";
import VoterRegistration from "./myComponents/VoterRegistration";
import VoteCandidate from "./myComponents/VoteCandidate";

function App() {
  const [accounts, setAccounts] = useState("");
  const [voting, setVoting] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [register, setRegister] = useState([]);
  const [split, setSplit] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWeb3();
    loadBlockChain();
  }, []);

  const loadBlockChain = async () => {
    const web3 = window.web3;

    const account = await web3.eth.getAccounts();
    setAccounts(account[0]);

    // Network ID
    const votingId = await web3.eth.getId();
    // console.log(networkId);

    // Address
    const votingData = Voting.networks[votingId];
    if (votingData) {
      console.log(votingData.address);
      const voting = await web3.eth.Contract(Voting.abi, votingData.address);
      setVoting(voting);
      console.log(voting);
      const totalCandidates = await voting.methods.totalCandidates().call();
      console.log(totalCandidates);
      for (let i = 1; i <= totalCandidates; i++) {
        const candidate = await voting.methods.candidates(i).call();
        const myCandidate = {
          id: candidate[0].toNumber(),
          name: candidate[1],
          voteCount: candidate[2].toNumber(),
        };
        if (myCandidate.id > 0) {
          setCandidates((candidates) => [...candidates, myCandidate]);
        }
      }

      const toRegisterCount = await voting.methods.toRegisterCount().call();
      console.log(toRegisterCount);
      for (let i = 1; i <= toRegisterCount; i++) {
        const voter = await voting.methods.toRegister(i).call();
        setRegister((register) => [...register, voter]);
      }
      setLoading(false);
    } else {
      window.alert("Voting Contract not deployed to detected voting");
    }
  };

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-ethereum browser detected. You should consider trying metamask"
      );
    }
  };

  const addCandidate = async (name) => {
    setLoading(true);
    console.log(voting);
    await voting.methods
      .addCandidate(name)
      .send({ from: "0x7FB2E828386F0450E82EA394c4934DcB266D89c6" })
      .on("confirmation", () => {
        window.location.reload();
      })
      .on("error", (error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const DeleteCandidate = async (id) => {
    setLoading(true);
    // if (window.confirm(id)) {
    await voting.methods
      .deleteCandidate(id)
      .send({ from: "0x7FB2E828386F0450E82EA394c4934DcB266D89c6" })
      .on("confirmation", () => {
        window.location.reload();
      })
      .on("error", (error) => {
        setLoading(false);
        console.log(error);
      });
    // }
  };

  const adminRegister = async (address) => {
    setLoading(true);
    window.alert(address);
    await voting.methods
      .allowedByAdmin(address)
      .send({ from: "0x7FB2E828386F0450E82EA394c4934DcB266D89c6" })
      .on("confirmation", () => {
        window.location.reload();
      })
      .on("error", (error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const voterRegister = async () => {
    console.log("working");
    setLoading(true);
    await voting.methods
      .registerVoter()
      .send({ from: accounts })
      .on("confirmation", () => {
        window.location.reload();
      })
      .on("error", (error) => {
        setLoading(false);
        console.log(error);
      });
  };
  const submitVote = async (id) => {
    setLoading(true);
    await voting.methods
      .voter(id)
      .send({ from: accounts })
      .on("confirmation", () => {
        window.location.reload();
      })
      .on("error", (error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            {!loading ? <Main /> : <div className="loading">loading...</div>}
          </Route>
          <Route exact path="/admin/addCandidate">
            {!loading ? (
              <AddCandidate addCandidate={addCandidate} voting={voting} />
            ) : (
              <div className="loading">loading...</div>
            )}
          </Route>
          <Route exact path="/admin/deleteCandidate">
            {!loading ? (
              <DelCandidate
                deleteCandidate={DeleteCandidate}
                candidate={candidates}
                voting={voting}
              />
            ) : (
              <div className="loading">loading...</div>
            )}
          </Route>
          <Route exact path="/admin/registerVoters">
            {!loading ? (
              <RegisterVoters
                register={register}
                voting={voting}
                adminRegister={adminRegister}
              />
            ) : (
              <div className="loading">loading...</div>
            )}
          </Route>
          <Route exact path="/user/voteCandidate">
            {!loading ? (
              <VoteCandidate
                account={accounts}
                voting={voting}
                candidate={candidates}
                submitVote={submitVote}
              />
            ) : (
              <div className="loading">loading...</div>
            )}
          </Route>
          <Route exact path="/user/voterRegistration">
            {!loading ? (
              <VoterRegistration
                account={accounts}
                voting={voting}
                voterRegister={voterRegister}
              />
            ) : (
              <div className="loading">loading...</div>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
