import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-content">
          <h1>Lokeswari Pindi</h1>
          <p>FFE-AFE Scholar | NSF Scholar</p>
          <div className="contact-info">
            <p>Email: <a href="mailto:pindilokeswari@gmail.com">pindilokeswari@gmail.com</a></p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/lokeswaripindi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://leetcode.com/u/Lokeswari_Pindi/" target="_blank" rel="noopener noreferrer">LeetCode</a>
              <a href="https://github.com/lokeswaripindi" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <img src="/Loku-profile.jpg" alt="Lokeswari Pindi" className="profile-photo" />
      </div>
    </header>
  );
};

export default Header;
