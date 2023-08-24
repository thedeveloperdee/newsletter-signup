import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/CardHeader";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import cardImage from "../signup-img.svg";

const SignupCard = () => {
  return (
    <Card>
      <div>
        <CardHeader>Stay updated!</CardHeader>
        <Card.Text>
          Join 60,000+ product managers receiving monthly updates on:
          <ListGroup>
            <ListGroup.Item>
              Product discovery and building what matters
            </ListGroup.Item>
            <ListGroup.Item>
              Measuring to ensure updates are a success
            </ListGroup.Item>
            <ListGroup.Item>And much more!</ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@company.com"
            ></Form.Control>
          </Form.Group>
          <Button>Subscribe to monthly newsletter</Button>
        </Form>
      </div>
      <div>
        <Image src={cardImage} alt="signup" />
      </div>
    </Card>
  );
};

export default SignupCard;
