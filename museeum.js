function openFrame(option) {
    const frame = document.getElementById("frame");
    
    // Afhankelijk van de geklikte optie, voeg de juiste inhoud toe aan het frame
    switch(option) {
        case 'optie1':
            frame.innerHTML = "<h3>verslag</h3><p>Dit is de inhoud die verschijnt bij het kiezen van Optie 1.</p>";
            break;
        case 'optie2':
            frame.innerHTML = "<h3>onderzoeksvragen</h3><p>Dit is de inhoud die verschijnt bij het kiezen van Optie 2.</p>";
            break;
        case 'optie3':
            frame.innerHTML = "<h3>onderzoeksantwoorden</h3><p>Dit is de inhoud die verschijnt bij het kiezen van Optie 3.</p>";
            break;
        default:
            frame.innerHTML = "<p>Klik op een optie om inhoud te laden.</p>";
    }
}