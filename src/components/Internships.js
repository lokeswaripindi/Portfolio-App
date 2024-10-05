import React from 'react';

const Internships = () => {
  return (
    <section className="internships">
      <h2>Internships</h2>
      <ul>
        <li className="internship-item">
          <div className="internship-title">
            <strong>AI-ML Virtual Internship</strong>
            <span className="internship-date">April - June 2024</span>
          </div>
          <em>Supported by India Edu Program Google for Developers</em><br />
          Technologies used: <span>Python, TensorFlow, Keras, Scikit-learn, NLP</span>.
        </li>
        <li className="internship-item">
          <div className="internship-title">
            <strong>Android Developer Virtual Internship</strong>
            <span className="internship-date">September - November 2023</span>
          </div>
          <em>Supported by Edu Program Google for Developers</em><br />
          Technologies used: <span>Android Studio, Java, Kotlin, XML, Firebase, Git, Android SDK</span>.
        </li>
      </ul>
    </section>
  );
};

export default Internships;
