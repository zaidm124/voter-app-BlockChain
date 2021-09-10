pragma solidity ^0.5.0;

contract Voting {
    string public name = "Voting webApp";
    uint256 public totalCandidates = 0;
    uint public totalVoters=0;

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    

    event CandidateAdded(uint256 id, string name, uint256 voteCount);

    mapping(uint256 => Candidate) public candidates;
    mapping(address=>bool) public voters;

    function addCandidate(string memory _name) public {
        // Increment the count of total candidates
        totalCandidates++;
        candidates[totalCandidates] = Candidate(totalCandidates, _name, 0);

        // trigger an event
        emit CandidateAdded(totalCandidates, _name, 0);
    }

    function voter(uint _id)public{
        // Check if the voter has already voted
        require(!voters[msg.sender]);

        // Store the record of the voter in map
        voters[msg.sender]=true;

        // Call the vote function
        voteCandidate(_id);
    }

    function voteCandidate(uint _id) public{
        // Increment total number of votes
        totalVoters++;
        // Increment Vote Count
        candidates[_id].voteCount=candidates[_id].voteCount + 1;
                
        // Create a local structure of Candidate
        Candidate memory _candidate=Candidate(_id,candidates[_id].name,candidates[_id].voteCount);

        // Update
        candidates[_id]=_candidate;
    }
}
