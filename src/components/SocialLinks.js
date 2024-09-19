import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import github_logo from 'src/img/github-mark.svg'
import linkedin_logo from 'src/img/LI-In-Bug.png'
function SocialLinks(){
    return(
    <ButtonGroup aria-label="social links">
        <Button variant="outline-info">
            <img
                src={github_logo}
                width="25"
                height="25"
                className="d-inline-block align-top"
                href="https://github.com/arkrp"
                alt="Github"
            />
        </Button>
        <Button variant="outline-info">
            <img
                src={linkedin_logo}
                width="30"
                height="25"
                className="d-inline-block align-top"
                href="https://www.linkedin.com/in/hannah-nelson-a54ba71a2/"
                alt="LinkedIn"
            />
        </Button>
    </ButtonGroup>
    );
}
export default SocialLinks;
