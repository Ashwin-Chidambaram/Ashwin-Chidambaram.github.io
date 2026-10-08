
/* TENNIS LEGENDS DASHBOARD */
/* JavaScript - Dynamic Content */

// Information about each tennis player

const tennisData = {

    federer: {
        name: "ROGER FEDERER",
        subtitle: "THE SWISS MAESTRO",
        country: "Switzerland",
        grandSlams: 20,
        weeksNumberOne: 310,

        biography: "Roger Federer is a Swiss former professional tennis player known for his elegant playing style, incredible shot-making, and sportsmanship. He won 20 Grand Slam singles titles and became one of the most influential athletes in tennis history.",

        playingStyle: "Federer was famous for his one-handed backhand, accurate serving, smooth footwork, and aggressive all-court playing style. His ability to transition between offense and defense made him extremely difficult to defeat.",

        funFact: "Federer won eight Wimbledon men's singles titles, the most by any man in the tournament's history."
    },

    nadal: {
        name: "RAFAEL NADAL",
        subtitle: "THE KING OF CLAY",
        country: "Spain",
        grandSlams: 22,
        weeksNumberOne: 209,

        biography: "Rafael Nadal is a Spanish former professional tennis player known for his incredible determination, athleticism, and success on clay courts. He won 22 Grand Slam singles titles and became one of the greatest competitors in tennis history.",

        playingStyle: "Nadal was famous for his powerful left-handed forehand, heavy topspin, outstanding defense, and relentless movement. His physical endurance and mental toughness helped him dominate long rallies.",

        funFact: "Nadal won the French Open 14 times, an extraordinary record at a single Grand Slam tournament."
    },

    djokovic: {
        name: "NOVAK DJOKOVIC",
        subtitle: "THE MASTER OF CONSISTENCY",
        country: "Serbia",
        grandSlams: 24,
        weeksNumberOne: 428,

        biography: "Novak Djokovic is a Serbian professional tennis player and one of the most successful players in tennis history. He has won 24 Grand Slam singles titles and is known for his remarkable consistency and mental strength.",

        playingStyle: "Djokovic is famous for his exceptional return of serve, flexible movement, strong two-handed backhand, and incredible defensive abilities. He is especially effective at turning defensive situations into offensive opportunities.",

        funFact: "Djokovic holds the men's record for the most Grand Slam singles titles with 24 and has spent a record 428 weeks ranked world No. 1."
    },

    serena: {
        name: "SERENA WILLIAMS",
        subtitle: "THE QUEEN OF POWER",
        country: "United States",
        grandSlams: 23,
        weeksNumberOne: 319,

        biography: "Serena Williams is an American former professional tennis player widely regarded as one of the greatest athletes of all time. She won 23 Grand Slam singles titles and transformed women's tennis through her powerful playing style and competitive determination.",

        playingStyle: "Serena was known for her powerful serve, aggressive baseline shots, explosive movement, and ability to perform under pressure. Her serve was one of the most dominant weapons in tennis.",

        funFact: "Serena won 23 Grand Slam singles titles, the most by any woman in the Open Era."
    }

};


// Function to change the main content

function changeContent(player, clickedButton) {

    // Find the main content area
    const contentBox = document.getElementById("dynamic-content");

    // Get the selected player's information
    const selectedPlayer = tennisData[player];

    // Change the main content using JavaScript
    contentBox.innerHTML = `

        <p class="section-label">
            ${selectedPlayer.subtitle}
        </p>

        <h2>${selectedPlayer.name}</h2>

        <p class="intro-text">
            ${selectedPlayer.biography}
        </p>

        <div class="stats-container">

            <div class="stat-card">
                <div class="stat-number">
                    ${selectedPlayer.grandSlams}
                </div>
                <div class="stat-label">
                    Grand Slam Titles
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-number">
                    ${selectedPlayer.weeksNumberOne}
                </div>
                <div class="stat-label">
                    Weeks at World No. 1
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-number">
                    ${selectedPlayer.country}
                </div>
                <div class="stat-label">
                    Country
                </div>
            </div>

        </div>

        <div class="info-card">

            <h3>Playing Style</h3>

            <p>
                ${selectedPlayer.playingStyle}
            </p>

        </div>

        <div class="fun-fact">

            <h3>Did You Know?</h3>

            <p>
                ${selectedPlayer.funFact}
            </p>

        </div>
    `;

    // Remove the active style from all buttons
    const buttons = document.querySelectorAll(".sidebar button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Highlight the selected button
    clickedButton.classList.add("active");
}