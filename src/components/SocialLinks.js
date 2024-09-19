import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import github_logo from 'src/img/github-mark.svg'
import linkedin_logo from 'src/img/LI-In-Bug.png'
import envelope_icon from 'src/img/envelope.svg'
function SocialLinks(){
    return(
    <ButtonGroup aria-label="social links">
        <Button variant="outline-info" href='https://github.com/arkrp'>
            <img
                src={github_logo}
                width="25"
                height="25"
                className="d-inline-block align-top"
                alt="Github"
            />
        </Button>
        <Button variant="outline-info" href='https://www.linkedin.com/in/hannah-nelson-a54ba71a2/'>
            <img
                src={linkedin_logo}
                width="30"
                height="25"
                className="d-inline-block align-top"
                alt="LinkedIn"
            />
        </Button>
        <Button variant="outline-info" href='#contact'>
            <img
                src={envelope_icon}
                width="26"
                height="25"
                className="d-inline-block align-top"
                alt="Contact"
            />
        </Button>
    </ButtonGroup>
    );
}
export default SocialLinks;
