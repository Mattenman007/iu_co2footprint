import React from 'react';
import team from '../images/team.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding border-top">
      <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <div className="section-title">
                    <h1 className="display-4 fw-semibold">Über uns</h1>
                    <div className="line"></div>
                    <p>Wir beschäftigen uns mit dem Klimawandel. Unser Ziel ist es, mehr Transparenz darüber zu schaffen, welche Unternehmen und Länder wie viel CO2 jährlich emittieren.</p>
                </div>
            </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <img src={team} alt="Team"/>
          </div>
          <div className="col-lg-5">
            <h1>Wer wir sind</h1>
            <p className="mt-3 mb-4">Wir sind ein interdisziplinäres Team einer Non-Profit-Organisation, das sich mit dem Klimawandel beschäftigt.</p>
            <div className="d-flex pt-4 mb-3">
                <div className="iconbox me-4">
                    <i className="ri-mail-line"></i>
                </div>
                <div>
                    <h5>Du willst mit uns in Kontakt treten?</h5>
                    <p>Dann schreibe uns einfach eine Nachricht.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
