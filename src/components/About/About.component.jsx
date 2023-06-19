import {
  // import components from @ionic/react
  IonCardContent,
  IonItem,
  IonThumbnail,
  IonCardTitle,
  IonImg,
  IonLabel,
} from "@ionic/react";
import portfolioPhoto from "../../assets/images/photo.jpeg"; // import photo of me

const About = () => {
  return (
    <IonCardContent className="about">
      <IonThumbnail>
        <IonImg src={portfolioPhoto}></IonImg>
      </IonThumbnail>
      <div>
        <IonCardTitle className="ion-padding-bottom">About Me</IonCardTitle>
        <p>
          Hello, I'm Joshua Cavell I'm a full-stack web developer with a
          background in Sales, Customer Service, and a passion for learning. I'm
          currently enrolled in Michigan State University's Full-Stack Web
          Development Bootcamp. I'm looking for opportunities to apply my skills
          and grow as a developer.
        </p>
        <p>
          I began my journey as a web developer as a teenager. I am very much a
          self taught coder. I've done freelance remote work, and collaborated
          with talented people. I'm a team player, I enjoy working with others,
          and I'm always looking for ways to improve my skills. I am top of my
          class in the MSU Bootcamp, and am attending to learn the latest
          technologies and best practices.
        </p>
        <p>
          I am good at problem solving, and I enjoy the process. I am looking
          for a position where I can apply my skills and grow as a developer.
        </p>
      </div>
    </IonCardContent>
  );
};

export default About;
