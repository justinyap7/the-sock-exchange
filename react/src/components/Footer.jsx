import React from 'react';

const Footer = ({ environment }) => {
    // Set the appropriate class based on the environment value from props
    const footerClass = environment === 'DEVELOPMENT' ? 'bg-yellow' : 'bg-green';
    console.log(environment)

    return (
      <footer className={`${footerClass} text-center font-bold p-4`}>
        {environment === 'DEVELOPMENT' ? 'DEVELOPMENT' : 'PRODUCTION'}
      </footer>
    );
  };

export default Footer;