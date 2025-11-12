import { Accordion } from 'react-bootstrap';
import { BsMap, BsGeoAlt, BsPhone, BsEnvelopeAt, BsGlobe} from 'react-icons/bs';
import "./Accordion.css";


// Main component
function Mentions() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Editeur du site</Accordion.Header>
                <Accordion.Body>
                    <p className='name'>John Doe</p>
                    <section className='infos'> {/* Infos block*/}
                    <p><BsMap style={{ marginRight: "3px" }} />40 rue Laure Diebold</p>
                    <p><BsGeoAlt style={{ marginRight: "3px" }} />69009 Lyon, France</p>
                    <p><BsPhone style={{ marginRight: "3px" }} />10 20 30 40 50</p>
                    <p><BsEnvelopeAt style={{ marginRight: "3px" }} />john.doe@gmail.com</p>
                    </section>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Hébergeur</Accordion.Header>
                <Accordion.Body> {/* hosting block*/}
                    <h2>alwaysdata</h2>
                    <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                    <BsGlobe style={{ marginRight: "3px" }} /><a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Crédits</Accordion.Header>
                <Accordion.Body> {/* Sources block*/}
                    <h2>Crédits</h2>
                    <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.</p>
                    <p><em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/">Pixabay</a></em></p>
                    <p><em>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John doe Icons erstellt von Freepik - Flaticon</a></em></p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Mentions;