import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import headerStyles from "../styles/Header.module.css";

//${headerStyles.navLinks}

export default function NavBar() {
  return (
    <Container fluid className="padding-0">
      <Row fluid className="padding-0 margin-0">
        <Col md="3" className="padding-0 sm-12" fluid>
          <div className={headerStyles.theme1}>
            <Image src={"/logo.svg"} height="20px" width="70px" layout="fill" />
          </div>
        </Col>
        <Col md="5" className="padding-0" fluid>
          <div className={headerStyles.theme1}></div>
        </Col>
        <Col md="4" className="padding-0" fluid>
          <div className={headerStyles.search_bar}>
            <input type="text" placeholder="Contact Us" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
