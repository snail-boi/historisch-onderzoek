function openFrame(option) {
    const frame = document.getElementById("frame");
    
    // Afhankelijk van de geklikte optie, voeg de juiste inhoud toe aan het frame
    switch(option) {
        case 'optie1':
            frame.innerHTML = "<h3>bronvermelding</h3><p>Land and Freedom(1995)</p><p>Regisseur: Ken Loach</p><p>Taal: Engels/Spaanse dialoog met ondertiteling</p>";
            break;
        case 'optie2':
            frame.innerHTML = "<h3>samenvatting</h3><p>De film begint in het hedendaagse Liverpool, waar de kleindochter van een overleden man, David Carr, zijn oude brieven en documenten vindt. Via deze documenten ontvouwt zich zijn verhaal: David was een jonge werkloze communist uit Engeland die in 1936 naar Spanje reisde om mee te vechten in de Spaanse Burgeroorlog, aan de kant van de Republikeinen tegen de fascistische troepen van generaal Francisco Franco.</p><p>David sluit zich aan bij de POUM (Partido Obrero de Unificación Marxista), een marxistische militie, en komt terecht aan het front in Catalonië. Hij raakt bevriend met strijders uit verschillende landen en wordt verliefd op Blanca, een Spaanse strijdster.</p><p>Na aanvankelijke overwinningen raakt David gedesillusioneerd. Niet alleen door het geweld, maar vooral door de groeiende interne conflicten tussen de linkse groepen: communisten (gesteund door de Sovjet-Unie), socialisten, anarchisten en trotskisten. De communisten proberen de macht naar zich toe te trekken en beschuldigen de POUM van verraad. David wordt geconfronteerd met het verraad van kameraden, arrestaties van linkse strijders door andere linksen, en het uiteenvallen van de republikeinse eenheid.</p><p>Teleurgesteld keert hij uiteindelijk terug naar Engeland, geknakt en verbitterd, zijn idealen beschadigd maar niet volledig verloren.</p>";
            break;
        case 'optie3':
            frame.innerHTML = "<h3>mijn opinie</h3><p><strong>Land and Freedom</strong> is een indrukwekkende en aangrijpende film die op krachtige wijze de idealen en teleurstellingen van de Spaanse Burgeroorlog tot leven brengt. Regisseur Ken Loach slaagt erin om de politieke complexiteit van het conflict invoelbaar te maken door het te tonen door de ogen van een gewone vrijwilliger.</p><p>De film weet zowel historisch als emotioneel te raken. De veldscènes zijn rauw en realistisch, maar het zijn vooral de dialogen – zoals het debat over het collectiviseren van landbouwgrond – die de diepere dilemma’s van de strijd tonen. In plaats van een simpele “goed versus kwaad”-vertelling, geeft de film ruimte aan nuance, twijfel en morele worsteling.</p><p>De keuze om archiefmateriaal te combineren met persoonlijke brieven en herinneringen maakt het verhaal extra menselijk. Acteerprestaties zijn oprecht en ingetogen, wat de authenticiteit versterkt. Bovendien is de film visueel sober maar effectief, met een documentaire-achtige stijl die perfect past bij het onderwerp.</p><p>Kortom, <em>Land and Freedom</em> is niet alleen een belangrijke historische film, maar ook een tijdloos pleidooi voor idealisme, solidariteit en kritisch denken – zelfs (of juist) binnen revolutionaire bewegingen.</p>";
            break;
        default:
            frame.innerHTML = "<p>Klik op een optie om inhoud te laden.</p>";
    }
}