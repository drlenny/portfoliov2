import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Designed and maintained by me ⓒ {year} Daniel Lenihan</p>
    </footer>
  );
}

export default Footer;
