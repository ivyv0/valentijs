

$(document).ready(function(){
    $("#yes").click(function(){
        alert("Wil je mijn Valentijn zijn? ❤️");
        $(this).css("font-size", "24px");
        $("#gifContainer").show();
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