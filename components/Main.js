import { Row, Col, Container } from "react-bootstrap";
import LeftSection from './LeftSection'
import RightSection from "./RightSection";
import ProductFloater from "./ProductFloater";
import Rsection from "./Rsection";
import styles from "../styles/Main.module.css"
import Image from "next/image"


export default function Main() {
  return (
    <>
      <Container fluid className="">
        <Row>
          <Col className="padding-0 sm-12" fluid>
            <div className={styles.lsect}><LeftSection/></div>
          </Col>
          <Col className="padding-0 sm-12">
            <div className={styles.container}>
              <Rsection/>
            </div>
          </Col>
        </Row>
        <Row className="padding-0 bg-sucess">
          <div><ProductFloater/></div>
        </Row>
      </Container>
    </>
  );
}
