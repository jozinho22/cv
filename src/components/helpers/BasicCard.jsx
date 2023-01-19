import { Card } from "react-bootstrap";

const BasicCard = ({img, title}) => {

    return <Card className="BasicCard">
                {/* <Card.Img variant="top" src={imgSrc} /> */}
                {img}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

}

export default BasicCard;