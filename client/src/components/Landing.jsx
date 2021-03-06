import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Card, message } from 'antd';
import withAnalytics from './analytics/withAnalytics';
import CandidateForm from '../components/candidates/CandidateForm';
import config from '../utils/config';
import cv from '../assets/undraw_online_cv_qy9w.svg';
import logo from '../assets/logo-light.png';
import curve from '../assets/curve2.svg';
import eye from '../assets/eye-open.svg';
import mission from '../assets/mission.svg';
import value from '../assets/value.svg';
import layer1 from '../assets/Layer 2.svg';
import layer2 from '../assets/Layer 2-1.svg';
import layer3 from '../assets/Layer 2-2.svg';
import layer4 from '../assets/Layer 2-3.svg';
import dubai from '../assets/Group 4423.svg';
import damam from '../assets/Group 4424.svg';
import cairo from '../assets/Group 4425.svg';
import boohoo from '../assets/boohoo-light.png';
import oud from '../assets/Group 5148.svg';
import ghawali from '../assets/ghawali-logo.png';
import loccitane from '../assets/loccitane.png';
import matic from '../assets/matic.png';
import mikyajy from '../assets/mikyajy.png';
import mumzworld from '../assets/mumzworld-l.png';
import nisnass from '../assets/nisnass.png';
import ounass from '../assets/ounass.svg';
import tajawal from '../assets/tajawal-en.svg';
import logoColor from '../assets/logo.png';
import fb from '../assets/iconmonstr-facebook-1.svg';
import instagram from '../assets/iconmonstr-instagram-11.svg';
import linkedin from '../assets/iconmonstr-linkedin-1.svg';
import twitter from '../assets/iconmonstr-twitter-1.svg';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  createCandidate = async data => {
    const res = await axios.post(`${config.API_URL}/api/candidates`, data);
    console.log(res);
    if (res.status === 200) {
      this.props.logEvent({
        category: 'Candidate',
        action: 'Create',
        label: 'Created a candidate',
        value: res.data._id
      });
      message.success('Submitted Successfully');
      return true;
    }
    return false;
  };

  render() {
    return (
      <div class="pg-container-landing">
        <Link className="btn-link-ghost" to="/dashboard">
          Dashboard
        </Link>
        <div className="bg">
          <Row>
            <Col className="col-vector" sm={24} md={24} lg={12}>
              <div className="vector-container">
                <img className="curve" src={curve} alt="" />
                {/* <img className="logo" src={logo} alt="" /> */}
                <img className="cv-background" src={cv} alt="" />
              </div>
            </Col>
            <Col sm={24} lg={12}>
              <div className="landing-form">
                <div className="form-title" type="secondary">
                  Connect with us to get started
                </div>
                <CandidateForm createCandidate={this.createCandidate} />
              </div>
            </Col>
          </Row>
        </div>
        <div className="margin-container">
          <div className="grid-container">
            <Row gutter={8}>
              <div className="sub-title">
                <p>who we are</p>
                <hr />
              </div>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Col sm={24} md={8} lg={8}>
                <Card className="card">
                  <img src={eye} alt="" srcset="" />
                  <div className="card-title">Vision</div>
                  <p className="card-description">
                    Lorem ipsum dolor sit amet, consectetur, sed do
                  </p>
                </Card>
              </Col>
              <Col sm={24} md={8} lg={8}>
                <Card className="card">
                  <img src={mission} alt="" srcset="" />
                  <div className="card-title">Mission</div>
                  <p className="card-description">
                    Lorem ipsum dolor sit amet, consectetur, sed do
                  </p>
                </Card>
              </Col>
              <Col sm={24} md={8} lg={8}>
                <Card className="card">
                  <img src={value} alt="" srcset="" />
                  <div className="card-title">Value</div>
                  <p className="card-description">
                    Lorem ipsum dolor sit amet, consectetur, sed do
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
          <Row>
            <div className="sub-title">
              <p>what we are?</p>
              <hr />
            </div>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <Col sm={24} md={12} lg={6}>
              <Card className="borderless-card" style={{ width: 300 }}>
                <img src={layer1} alt="" srcset="" />
                <div className="card-title">App Installs</div>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </Card>
            </Col>
            <Col sm={24} md={12} lg={6}>
              <Card className="borderless-card" style={{ width: 300 }}>
                <img src={layer2} alt="" srcset="" />
                <div className="card-title">Brand Awareness</div>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </Card>
            </Col>
            <Col sm={24} md={12} lg={6}>
              <Card className="borderless-card" style={{ width: 300 }}>
                <img src={layer3} alt="" srcset="" />
                <div className="card-title">Customer Acquisition</div>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </Card>
            </Col>
            <Col sm={24} md={12} lg={6}>
              <Card className="borderless-card" style={{ width: 300 }}>
                <img src={layer4} alt="" srcset="" />
                <div className="card-title">Revenue Generation</div>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </Card>
            </Col>
          </Row>
          <div className="grid-container">
            <Row className="locations">
              <div className="sub-title">
                <p>OUR locations</p>
                <hr />
              </div>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Col sm={24} md={8} lg={8}>
                <img src={dubai} alt="" srcset="" />
              </Col>
              <Col sm={24} md={8} lg={8}>
                <img src={damam} alt="" srcset="" />
              </Col>
              <Col sm={24} md={8} lg={8}>
                <img src={cairo} alt="" srcset="" />
              </Col>
            </Row>
          </div>
          <Row>
            <div className="sub-title">
              <p>our clients</p>
              <hr />
            </div>
            <section className="our-clients">
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
              <div className="client-circle">
                <img src={loccitane} alt="" srcset="" />
              </div>
            </section>
          </Row>
          <Row>
            <Col sm={24} md={12} lg={8} />
            <Col sm={24} md={12} lg={8} />
            <Col sm={24} md={12} lg={8} />
          </Row>
          <footer className="footer">
            {/* <img className="footer-logo" src={logoColor} alt="" srcset="" /> */}
            <div className="social-icons">
              <img src={fb} alt="" srcset="" />
              <img src={twitter} alt="" srcset="" />
              <img src={linkedin} alt="" srcset="" />
              <img src={instagram} alt="" srcset="" />
            </div>
            <div className="copyright-text">© Copyright 2019</div>
          </footer>
        </div>
      </div>
    );
  }
}

export default withAnalytics(Landing);
