function openFrame(option) {
    const frame = document.getElementById("frame");
    
    // Afhankelijk van de geklikte optie, voeg de juiste inhoud toe aan het frame
    switch(option) {
        case 'optie1':
            frame.innerHTML = "<h3>verslag</h3><p>ik heb geen museeum gevonden</p>";
            break;
        case 'optie2':
            frame.innerHTML = "<h3>Onderzoeksvraag 1:</h3><p>Wat waren de belangrijkste oorzaken van de Spaanse Burgeroorlog (1936-1939)?</p><br><h3>Onderzoeksvraag 2:</h3><p>Hoe wist Francisco Franco aan de macht te blijven na de Spaanse Burgeroorlog tot zijn dood in 1975?</p>";
            break;
        case 'optie3':
            frame.innerHTML = "<h3>Onderzoeksantwoord 1:</h3><p>De Spaanse Burgeroorlog werd veroorzaakt door diepe politieke, sociale en economische tegenstellingen binnen Spanje. Belangrijke oorzaken waren:</p><ol><li>Politieke instabiliteit: De Spaanse monarchie werd in 1931 vervangen door een republiek (de Tweede Republiek), wat leidde tot politieke verdeeldheid tussen republikeinen, monarchisten, socialisten, communisten en conservatieven.</li><li>Sociale ongelijkheid: Er was grote kloof tussen arm en rijk, vooral op het platteland, waar veel boeren leefden onder slechte omstandigheden terwijl grootgrondbezitters veel macht hadden.</li><li>Antiklerikalisme vs. Katholicisme: De secularisering van de staat leidde tot spanningen met de katholieke kerk, wat religieuze conflicten aanwakkerde.</li><li>Militaire onvrede: Het leger voelde zich bedreigd door hervormingen van de republikeinse regering en speelde een sleutelrol bij de staatsgreep van Franco.</li><li>Radicalisering: Zowel linkse als rechtse extremisten werden actiever, met geweld, stakingen en politieke moorden als gevolg.</li></ol><h3>Onderzoeksantwoord 2:</h3><p>Francisco Franco bleef bijna 40 jaar aan de macht door een combinatie van autoritair bestuur, onderdrukking en slim politiek manoeuvreren:</p><ol><li>Militaire overwinning: Na zijn overwinning in de burgeroorlog vestigde hij een dictatuur waarin hij de enige leider was (Caudillo).</li><li>Onderdrukking van tegenstanders: Franco gebruikte geheime politie, censuur en concentratiekampen om politieke tegenstanders uit te schakelen.</li><li>Nationalistische propaganda: Hij promootte een eenheidsstaat rond Spaans nationalisme, katholicisme en traditionele waarden.</li><li>Internationale politiek: Tijdens de Tweede Wereldoorlog bleef hij neutraal, wat hem hielp om na de oorlog steun of tolerantie te krijgen van Westerse landen tijdens de Koude Oorlog.</li><li>Economische groei (1950-1970): In de jaren 50 en 60 ontwikkelde Spanje zich economisch, wat zijn regime enige legitimiteit gaf bij de bevolking.</li></ol>";
            break;
        default:
            frame.innerHTML = "<p>Klik op een optie om inhoud te laden.</p>";
    }
}