import React from 'react';
import { Card } from 'react-bootstrap';
import { InformationModel } from '../models/InformationModel';
import img3 from '../images/img3.png';

export const informationCards = [
  new InformationModel(
    'Die Verunstaltung',
    'Die Verunstaltung ist eine Veranstaltungsreihe, die im Zürcher El Lokal stattfindet. Bei den Verunstaltern \
            wird zusammen gehört, was nur so halb zusammengehört. Ziel ist es, das Publikum mit neuen Künstlern bekannt \
            zu machen, die wir Saite an Saite mit vertrauten Musikern präsentieren. Dabei gilt: Wieso in die Ferne \
            schweifen, wenn es so viele lokale talentierte Künstler gibt. Von Purismus halten wir uns aber rein. Das \
            einzige Klischee, das wir dabei bedienen ist, dass wir keine Klischees zu bedienen behaupten. Die Reihe ist \
            nicht ganz neu, sie ist bloss kürzlich erst erwachsen geworden: Noch unter dem Namen Seich’n’Delic wurde vor \
            rund vier Jahren eine Konzertreihe ins Leben gerufen, mit deren Erfolg auch das Bedürfnis nach einem breiter \
            gefächerten Programm und grösserer stilistischer Freiheit wuchs. Ein Namenswechsel war notwendig und die \
            Verunstaltung war geboren.',
    [img3],
  ),
  new InformationModel(
    'Die Veruntwortlichen',
    'Eure Verunstaltungsmacher, Siro Mancuso & Hans Frauchiger, das sind zwei Maturanden, die sich im Müssiggang \
        auf der schuleigenen Finnenbahn kennengelernt haben. Gegenwärtig geistern sie im relativen Raum des \
        Zwischenjahres herum, mit der Hoffnung, diese Herumfreigeisterei bringe möglichst viele brauchbare \
        Hirngespinster hervor. Die Verunstaltung ist eines der Hirngespinster, die derzeit in Erprobung sind. \
        Ehemals in Albisrieden geplant, wo die Umsetzung leider, leider kläglich an einem "Arschloch" gescheitert \
        ist, wird die Verunstaltung nun im renommierten El Lokal stattfinden.',
    [],
  ),
];

export const InformationsComponent: React.FC = () => (
  <>
    {informationCards.map((informationCard, index) => (
      <Card key={index} className="mt-4">
        <Card.Body>
          <Card.Title>{informationCard.title}</Card.Title>
          <Card.Text>{informationCard.text}</Card.Text>
          {informationCard.pics.map((pic, key) => (
            <Card.Img key={key} className="mt-3" variant="top" src={pic} />
          ))}
        </Card.Body>
      </Card>
    ))}
  </>
);
