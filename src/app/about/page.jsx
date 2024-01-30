import Image from 'next/image';
import React from 'react';
import styles from './about.module.css'

const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}></div>
      <Image src="/about.png" alt='' fill />
    </div>
  );
};

export default About;
