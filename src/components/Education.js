import React from 'react';

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <ul>
        <li className="education-item">
          <div className="education-title">
            <strong>Velagapudi RamaKrishna Siddhartha Engineering College</strong>
            <span className="duration">October 2022 - April 2026</span>
          </div>
          <div className="department-cgpa">
            <em>B.Tech in Computer Science and Engineering</em>
          </div>
          <span className="cgpa">CGPA: 9.37</span>
        </li>
        <li className="education-item">
          <div className="education-title">
            <strong>Sri Chaitanya Junior College</strong>
            <span className="duration">May 2020 - April 2022</span>
          </div>
          <div className="department-cgpa">
            <em>Intermediate in MPC</em>
          </div>
          <span className="cgpa">CGPA: 9.82</span>
        </li>
        <li className="education-item">
          <div className="education-title">
            <strong>Sri Chaitanya Techno School</strong>
            <span className="duration">May 2019 - March 2020</span>
          </div>
          <div className="department-cgpa">
            <em>SSC</em>
          </div>
          <span className="cgpa">CGPA: 9.5</span>
        </li>
      </ul>
    </section>
  );
};

export default Education;
