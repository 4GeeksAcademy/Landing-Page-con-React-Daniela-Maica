import ACard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Card = (props) => {
    console.log(props)
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-0 d-flex justify-content-center">
            <ACard className="p-0 my-3 mx-3" style={{ width: '200%' }} >
                <ACard.Img src="../src/img/image.png" className="card-img-top" alt="imagen 500x325 gris" />
                <ACard.Body className="text-center">
                    <ACard.Title>Card Title</ACard.Title>
                    <ACard.Text> {props.text} </ACard.Text>
                </ACard.Body>
                <ACard.Footer className="text-center">
                    <Button variant="primary">Find Out More!</Button>
                </ACard.Footer>
            </ACard>
        </div>
    );
};

export default Card;