import React, {useState} from 'react'
import {marked} from 'marked'
import { useNavigate } from "react-router-dom";

import LogoCrow from '../LogoCrow.jsx';
import { IconButtonClose } from '../IconButtons.jsx';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="
    ">
      <div className="mx-auto pb-8">
        <div
          dangerouslySetInnerHTML={{ __html: marked.parse(`
Het Dashboard is een mooi voorbeeld van een open source ontwikkeling door en voor overheden. Onder regie van <a href="https://www.crow.nl/" target="_blank" rel="noopener noreferrer">CROW</a> hebben overheden (veelal gemeenten) samen dit dashboard gerealiseerd. Zij zijn ook een belangrijke groep gebruikers ervan. De bedoeling is dat het beheer van het dashboard overgaat naar <a href="https://dova.nu/" target="_blank" rel="noopener noreferrer">DOVA</a>.

## Voordelen voor gemeenten

- sneller toegang tot data
- minder uitvragen naar aanbieders nodig (1 bron met alle data)
- geen conversie meer nodig: data van elke aanbieder heeft precies hetzelfde dataformaat
- ontwikkeling in overleg met de aangesloten gemeentes
- indien gewenst uit te breiden door gemeentes zelf (open source software)

## Voordelen aanbieders

- minder aanvragen vanuit gemeentes
- geen nieuwe dataformaten nodig i.v.m. gebruik internationale datastandaarden
- gemeentes hebben beter inzicht in de stand van zaken
- aanbieders hebben beter inzicht

## Tot slot

Wil je contact opnemen met het team achter het Dashboard Deelmobiliteit, neem dan contact op met <a href="mailto:info@dashboarddeelmobiliteit.nl?Subject=Hallo">info@dashboarddeelmobiliteit.nl</a>
          `)}}
        />
      </div>
    </div>
  )

}

export default About;