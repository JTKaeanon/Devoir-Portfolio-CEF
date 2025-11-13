import { useState, useEffect } from 'react'; //Webhook
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modals.css";
import { BsPerson, BsGeoAlt, BsCardText, BsBox, BsPeople } from 'react-icons/bs'; //SVG bootstrap

function ModalHome() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // API GitHub
    fetch("https://api.github.com/users/github-john-doe")
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors du chargement :", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Button onClick={handleShow} className='button-modal'>
        En savoir plus
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body className="profile-container">
          {loading ? (
            <p>Chargement...</p> // if loading
          ) : user ? ( // found user
            <>
              <img
                src={user.avatar_url}
                alt={user.login}
                className="profile-avatar"
              />

              <div className="profile">
                <p className='profile-line'> <BsPerson /> <a href={user.html_url} target="_blank" rel="noreferrer">{user.name || user.login} </a></p>
                <p className='profile-line'> <BsGeoAlt /> {user.location || ""}</p>
                <p className='profile-line'> <BsCardText /> {user.bio || "Aucune bio disponible."}</p>
                <p className='profile-line'> <BsBox /> Repositories : <strong>{user.public_repos}</strong></p>
                <p className='profile-line'> <BsPeople /> Followers : <strong>{user.followers}</strong></p>
                <p className='profile-line'> <BsPeople /> Following : <strong>{user.following}</strong></p>
              </div>

            </>
          ) : (
            <p>Erreur de chargement du profil.</p> // if error
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className='button-close'>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalHome;