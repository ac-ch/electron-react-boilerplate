import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            Copyright &#169; {year} Electron React Boilerplate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
