import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Footer.module.scss';

const Footer = ({ siteName }) => (
  <footer className={classnames(styles.root)}>
    <div className={styles.inner}>
      <p>
        <small>&copy; {siteName} 2018</small>
      </p>
      <p>
        <small>
          <a href="https://twitter.com/JakartaJS" target="_blank" rel="noopener noreferrer">
            Follow us on Twitter
          </a>
        </small>
      </p>
    </div>
  </footer>
);

Footer.propTypes = {
  siteName: PropTypes.string.isRequired,
};

export default Footer;
