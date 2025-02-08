

$(document).ready(function(){
    // Actie voor de "JA"-knop
    $("#yes").click(function(){
        // Toon de melding in plaats van een alert
        $("#messageBox").fadeIn(); // Toon de melding met een fade-in effect

        // Verander de font-size van de "JA"-knop
        $(this).css("font-size", "24px");

        // Toon de gif container
        $("#gifContainer").show();
    });

    // Actie voor de "NEE"-knop
    $("#no").click(function(){
        // Hier kun je een andere actie toevoegen voor de "NEE"-knop
        alert("Oh nee, jammer!");
    });
    
    $("#no").hover(function(){
        $(this).css({
            position: "absolute", 
            top: Math.random() * window.innerHeight + "px", 
            left: Math.random() * window.innerWidth + "px"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const savedText = localStorage.getItem('savedText');
    const savedTextDisplay = document.getElementById('savedTextDisplay');
    if (savedText) {
        savedTextDisplay.textContent = savedText;
    } else {
        savedTextDisplay.textContent = 'Er is geen opgeslagen tekst.';
    }
});

// Sla de tekst op wanneer de gebruiker op de "Bewaar voor later"-knop klikt
document.getElementById('save').addEventListener('click', function() {
    const loveLetterText = document.getElementById('loveLetter').value;
    if (loveLetterText) {
        localStorage.setItem('savedText', loveLetterText);
        alert('Je tekst is bewaard!');
    } else {
        alert('Er is geen tekst om op te slaan!');
    }
});

document.getElementById('reload').addEventListener('click', function() {
    // Herlaad de pagina
    location.reload();
});