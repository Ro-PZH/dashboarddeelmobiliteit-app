export interface Organisatie {
  naam: string;
  /** File in /images/gebruikers/; without a logo the name is shown as a tile */
  logo?: string;
}

/** Governments that use the dashboard (participants and trial users, autumn 2026). */
export const organisaties: Organisatie[] = [
  { naam: 'Alphen aan den Rijn', logo: 'alphen-aan-den-rijn.png' },
  { naam: 'Amersfoort', logo: 'amersfoort.png' },
  { naam: 'Amstelveen', logo: 'amstelveen.png' },
  { naam: 'Amsterdam', logo: 'amsterdam.svg' },
  { naam: 'Apeldoorn', logo: 'apeldoorn.svg' },
  { naam: 'Barendrecht', logo: 'barendrecht.png' },
  { naam: 'Borne', logo: 'borne.png' },
  { naam: 'Breda', logo: 'breda.svg' },
  { naam: 'Capelle aan den IJssel', logo: 'capelle-aan-den-ijssel.png' },
  { naam: 'Delft', logo: 'delft.svg' },
  { naam: 'Den Haag', logo: 'den-haag.jpg' },
  { naam: 'Diemen', logo: 'diemen.png' },
  { naam: 'Dordrecht', logo: 'dordrecht.png' },
  { naam: 'Ede', logo: 'ede.png' },
  { naam: 'Enschede', logo: 'enschede.svg' },
  { naam: 'Gouda', logo: 'gouda.svg' },
  { naam: 'Groningen', logo: 'groningen.svg' },
  { naam: 'Haarlem', logo: 'haarlem.svg' },
  { naam: 'Hardinxveld-Giessendam', logo: 'hardinxveld-giessendam.png' },
  { naam: 'Hendrik-Ido-Ambacht', logo: 'hendrik-ido-ambacht.png' },
  { naam: 'Hengelo', logo: 'hengelo.svg' },
  { naam: 'Hilversum', logo: 'hilversum.svg' },
  { naam: 'Lansingerland', logo: 'lansingerland.svg' },
  { naam: 'Leeuwarden', logo: 'leeuwarden.svg' },
  { naam: 'Molenlanden', logo: 'molenlanden.svg' },
  { naam: 'Nieuwegein', logo: 'nieuwegein.svg' },
  { naam: 'Nijmegen', logo: 'nijmegen.svg' },
  { naam: 'Provincie Noord-Holland', logo: 'noord-holland.svg' },
  { naam: 'Rijswijk', logo: 'rijswijk.png' },
  { naam: 'Rotterdam', logo: 'rotterdam.svg' },
  { naam: "'s-Hertogenbosch", logo: 's-hertogenbosch.png' },
  { naam: 'Schiedam', logo: 'schiedam.svg' },
  { naam: 'Tilburg', logo: 'tilburg.svg' },
  { naam: 'Wageningen', logo: 'wageningen.png' },
  { naam: 'Zeist', logo: 'zeist.svg' },
  { naam: 'Provincie Zuid-Holland', logo: 'zuid-holland.svg' },
  { naam: 'Zwolle', logo: 'zwolle.svg' },
];
