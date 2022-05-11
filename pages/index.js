import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Main from '../components/Main'
import Footer from '../components/Footer'
// import {Navbar} from 'react-bootstrap'
import NavBar from '../components/Navbar'
import { Row, Col, Container } from "react-bootstrap";

export default function Home() {
  return (
    <div className={styles.bg_color}>
    <NavBar/>
    <Main/>

    </div>
  )
}
