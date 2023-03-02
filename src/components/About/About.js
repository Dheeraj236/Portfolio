import React from "react";
import "./About.css";
import { motion } from "framer-motion";
function About(props) {
  const myProfileDetails = props.details;

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6" style={{ padding: "20px" }}>
            <figure className="imgeffect">
              <motion.img
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
                src={myProfileDetails.profilephoto}
                alt="Profile"
                width="70%"
                height="80%"
                style={{ borderRadius: "50%" }}
              />
            </figure>
          </div>
          <motion.div
            className="col-12 col-sm-6"
            style={{
              padding: "25px",
            }}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.8, stiffness: 40 }}
          >
            <h2>About</h2>
            <br />
            <h5>{myProfileDetails.about_me.para1}</h5>
            <p>{myProfileDetails.about_me.para2}</p>
            <p>{myProfileDetails.about_me.para3}</p>
            <p>{myProfileDetails.about_me.para4}</p>
            <p>{myProfileDetails.about_me.para5}</p>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}

export default About;
