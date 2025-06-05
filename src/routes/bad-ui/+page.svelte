<script>
    import { onMount } from "svelte";

    // Bokstäver som ska visas på skärmen
    let lettersString = "ABCDEFGHIJKLMNOPQRSTVWXYZ<".split("");
    /**
	 * @type {any[]}
	 */
    let letters = [];
    let username = "";

    // Max procentuella gränser för bokstävernas placering
    let maxWidth = 95;
    let maxHeight = 90;

    // Funktion för att slumpmässigt placera en bokstav utan att kollidera med andra
    /**
	 * @param {string} letter
	 */
    function randomizeLetter(letter) {
        let tempLeft;
        /**
		 * @type {number}
		 */
        let tempTop;
        let leftRad;
        let topRad;
        let i = 0;

        // Slumpmässigt vänsterposition (max 95% av bredden)
        tempLeft = maxWidth * Math.random();

        // Filtrera bokstäver som är inom 10% radie horisontellt
        leftRad = letters.filter((value) => Math.abs(value.left - tempLeft) < 10);

        // Försök max 10 gånger att hitta en unik position
        do {
            i++;
            tempTop = maxHeight * Math.random();
            // Filtrera bokstäver från leftRad som även är inom 5% radie vertikalt
            topRad = leftRad.filter((value) => Math.abs(value.top - tempTop) < 5);
        } while (topRad.length > 0 && i < 10);

        return { letter: letter, top: tempTop, left: tempLeft, ani: false };
    }

    // Slumpmässig placering av alla bokstäver
    function randomizeLetters() {
        letters = [];
        for (let letter of lettersString) {
            letters.push(randomizeLetter(letter));
        }
    }

    // När sidan laddats: Slumpa bokstäver och starta en intervall för att uppdatera deras positioner
    onMount(() => {
        randomizeLetters();
        console.log(letters);
        
        // Uppdatera alla positioner var tredje sekund
        setInterval(() => {
            randomizeLetters();
        }, 3000);
    });

    // Funktion för att lägga till en bokstav till användarnamnet
    /**
	 * @param {string} letter
	 * @param {number} i
	 */
    function addLetter(letter, i) {
        // Ta bort sista bokstaven om "<" klickas
        if (letter === "<") {
            username = username.substring(0, username.length - 1);
            return;
        }
        username += letter;

        // Slumpa ny position för bokstaven som just klickades
        letters[i] = randomizeLetter(letter);

        // Starta animation för bokstavens rörelse
        letters[i].ani = true;
        letters = letters;

        // Återställ animationen efter 1 sekund
        setTimeout(() => { letters[i].ani = false }, 1000);
    }
</script>

<!-- Knapp för att logga in -->
<button class="login" on:click={() => { alert(username !== "" ? "logged in as " + username : "Enter username!") }}>
    Logga in som {username}
</button>

<!-- Visa alla bokstäver som knappar -->
<div class="container">
    {#each letters as {letter, top, left, ani}, i}
        <button class:ani={ani} on:click={() => addLetter(letter, i)} 
                style="top:{top}%; left:{left}%; position: absolute;">
            {letter}
        </button>
    {/each}
</div>

<style>
    /* Stilar för knappen */
    .login {
        background-color: red;
        color: rgb(13, 8, 8);
        padding: 5px 10px;
    }

    /* Stil för containern som håller bokstäverna */
    .container {
        border: 2px solid rgb(26, 16, 2);
        width: 700px;
        height: 500px;
        margin: auto;
        position: relative;
    }

    /* Grundstil för alla knappar */
    button {
        background-color: rgb(251, 251, 3);
        border: 1px solid rgb(10, 7, 7);
        border-radius: 5px;
        padding: 1px 2px;
    }

    /* Keyframe-animation för bokstavsförflyttning */
    @keyframes fader {
        0% { opacity: 30%; transform: scale(0.25); }
        50% { opacity: 70%; transform: scale(0.75); }
        100% { opacity: 100%; transform: scale(1); }
    }

    /* Klass för animation */
    .ani {
        animation: fader 500ms linear;
        animation-iteration-count: initial;
    }
</style>
