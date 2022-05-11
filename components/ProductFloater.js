import floaterStyles from "../styles/ProductFloater.module.css";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

export default function ProductFloater() {
  return (
    <>
      <Row fluid>
        <Col className="padding-0">
          <div className={floaterStyles.img_container}>
            <Image
              className={floaterStyles.floater_img}
              src={"/moon.svg"}
              width={1400}
              height={700}
            />
          </div>
        </Col>
        <Col>
          <p>
            <span>Create Killer Product</span>
            <br />
            <hr />
            With our eye on design, technology, and creativity, we can help turn
            your idea into an amazing product that not only works well and look
            great but also feels magical.
          </p>
        </Col>
      </Row>
    </>
  );
}
