import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import freshFoodImg from '../../assets/images/portfolio/fresh-food.jpg';
import restoJap from '../../assets/images/portfolio/restaurant-japonais.jpg';
import bienEtre from '../../assets/images/portfolio/espace-bien-etre.jpg';
import seo from '../../assets/images/portfolio/seo.jpg';
import coder from '../../assets/images/portfolio/coder.jpg';
import ecran from '../../assets/images/portfolio/screens.jpg';
import "./PortfolioCards.css"

function PortfolioCards() {
    return (
        <div className='card-container-portfolio'>
            <Card>
                <Card.Img src={freshFoodImg} />
                <Card.Body className='projet'>
                    <Card.Title>Fresh Food</Card.Title>
                    <Card.Text>
                        Site de vente de produits frais en ligne
                    </Card.Text>
                    <Button className='btn-portfolio'>Voir le site</Button>
                </Card.Body>
                <Card.Footer className='footer-cards'>Site réalisé avec PHP et MySQL</Card.Footer>
            </Card>

            <Card>
                <Card.Img src={restoJap} />
                <Card.Body className='projet'>
                    <Card.Title>Restaurant Akira</Card.Title>
                    <Card.Text>
                        Site de vente de produits frais en ligne
                    </Card.Text>
                    <Button className='btn-portfolio' >Voir le site</Button>
                </Card.Body>
                <Card.Footer className='footer-cards'>Site réalisé avec WordPress</Card.Footer>
            </Card>

            <Card>
                <Card.Img src={bienEtre} />
                <Card.Body className='projet'>
                    <Card.Title>Espace bien-être</Card.Title>
                    <Card.Text>
                        Site de vente de produits frais en ligne.
                    </Card.Text>
                    <Button className='btn-portfolio' >Voir le site</Button>
                </Card.Body>
                <Card.Footer className='footer-cards'>Site réalisé avec LARAVEL</Card.Footer>
            </Card>

            <Card>
                <Card.Img src={seo} />
                <Card.Body className='projet'>
                    <Card.Title >SEO</Card.Title>
                    <Card.Text>
                        Amélioration du référencement d'un site e-commerce
                    </Card.Text>
                    <Button className='btn-portfolio' >Voir le site</Button>
                </Card.Body>
                <Card.Footer className='footer-cards'>Utilisation des outils SEO</Card.Footer>
            </Card>

            <Card>
                <Card.Img src={coder} />
                <Card.Body className='projet'>
                    <Card.Title>Création d'une API</Card.Title>
                    <Card.Text>
                        Création d'une API RESTFULL publique
                    </Card.Text>
                    <Button className='btn-portfolio' > Voir le site</Button>
                </Card.Body>
                <Card.Footer className='footer-cards'>PHP - SYMFONY</Card.Footer>
            </Card>

            <Card>
                <Card.Img src={ecran} />
                <Card.Body className='projet'>
                    <Card.Title>Maquette d'un site web</Card.Title>
                    <Card.Text>
                        Création du prototype d'un site
                    </Card.Text>
                    <Button className='btn-portfolio' >Voir le site</Button>
                </Card.Body>
                <Card.Footer className='footer-cards'>Réalisé avec FIGMA</Card.Footer>
            </Card>


        </div>

    );
}

export default PortfolioCards;