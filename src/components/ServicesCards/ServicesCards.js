import Card from 'react-bootstrap/Card';
import { BsBrush, BsCodeSlash, BsSearch } from 'react-icons/bs';
import "./ServicesCards.css"


function ServicesCards() {
    return (
        <div className="cards-container-services">
            <Card className='my-card'>
                <Card.Body>
                    <BsBrush class />
                    <Card.Title>UX Design</Card.Title>
                    <Card.Text className='card-text'>
                        L'UX design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, ect.)
                        en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fuis et agréable possible
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='my-card'>
                <Card.Body>
                    <BsCodeSlash />
                    <Card.Title>Développement web</Card.Title>
                    <Card.Text className='card-text'>
                        Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation ( HTML, CSS, JavaScript, PHP, etc.)
                        et des frameworkds (Bootstrap, React, Angular, etc.).
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='my-card'>
                <Card.Body>
                    <BsSearch />
                    <Card.Title>Référencement</Card.Title>
                    <Card.Text className='card-text'>
                        Le référencement natural (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats
                        des moteurs de recherche (Google, Bing, Yahoo, etc.) . L'objectif est d'attirer un maximum de visiteurs qualifié sur le site.
                    </Card.Text >
                </Card.Body>

            </Card>
        </div>
    );
}

export default ServicesCards;
