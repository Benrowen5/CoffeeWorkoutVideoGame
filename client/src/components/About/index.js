import React from 'react';
import Title from "../Title/Title";
import styles from './About.module.css';

function About() {
  return (
    <section>
        <Title title={'About Vapor'}/>
        <p className={styles.aboutDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
            condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
            mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
            Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
            justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
            dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
            Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
    </section>
  );
}

export default About;
