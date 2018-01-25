import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from './Masthead.module.scss';
import { Icon } from '../assets/images';

const Masthead = ({ siteName, menuItems }) => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <div className={styles.mastheadIcon}>
        <Link href="/" to="/">
          <img src={Icon} alt={siteName} />
        </Link>
      </div>
      <nav className={styles.mastheadNav}>
        {menuItems.map(item => (
          <Link
            className={styles.mastheadNavLink}
            key={item.name}
            href={item.path}
            to={item.path}
            activeClassName={styles.mastheadNavLinkActive}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

Masthead.propTypes = {
  siteName: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
};

export default Masthead;
