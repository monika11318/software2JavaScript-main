
let number_of_candidates = +prompt("Enter the number of candidates participating in meeting")

let candidates = []
for (let i = 1; i <= number_of_candidates; i++) {
    let candidate_name = prompt(`Enter the Name for candidate ${i}`)
    candidates.push({ name: candidate_name, votes: 0 })
}
let number_of_voters = +prompt("Number of Voters?")

for (let i = 1; i <= number_of_voters; i++) {
    let voters_vote = prompt(`Who you will vote for? (as ${i} voter)`);
    if (voters_vote === "") {
        continue
    }
    let candidate = candidates.find((candidate) => candidate.name == voters_vote)
    if (candidate) { candidate.votes++ }
}


candidates.sort((a, b) => b.votes - a.votes);

console.log(
    `The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`
);

console.log("results:");

candidates.forEach(candidate => {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
});