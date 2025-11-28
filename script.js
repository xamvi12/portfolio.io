const girlInput = document.getElementById('girl');
const countryInput = document.getElementById('country');
const poemTitle = document.getElementById('poemTitle');
const poemText= document.getElementById('poemtext');
const makeBtn = document.getElementById('makeBtn');
const resetBtn = document.getElementById('resetBtn');

function makePoem(){
    const girl = girlInput.value.trim();
    const country = countryInput.value.trim();

    if (girl === ""|| country === "") {
        poemTitle.textContent="";
        poemText.textContent= "";
        alert("please enter a girl's name and a country before making a poem!");
        return;
    }
    poemTitle.textContent = `The ${girl} and the ${country}`;

const poems= [
`The ${girl} and the ${country} are like sea and sky each farther apart with no limits or destinations.`,
`The ${girl} and the ${country} could the next fire and water; one heats up situations te other cams it down.`,
`The ${girl} and the ${country} have a lovehate relationship.`
];

const randomPoem = poems[Math.floor(Math.random() * poems.length)];
poemText.innerHTML = randomPoem;

}


function resetPoem() {
    girlInput.value = "";
    countryInput.value = "";
    
    poemTitle.value ="";
    poemText.value = "";
    
}

makeBtn.addEventListener('click', makePoem);
resetBtn.addEventListener('click', resetPoem);
