import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";

import {
  logoIonic,
  logoHtml5,
  logoCss3,
  logoSass,
  logoJavascript,
  logoAngular,
  logoReact,
  logoCapacitor,
  logoNodejs,
  logoFirebase,
  logoNpm,
} from "ionicons/icons";

import express from "../../assets/images/express.svg";
import mongodb from "../../assets/images/mongodb.svg";
import postgresql from "../../assets/images/postgresql.svg";
import mongoosejs from "../../assets/images/mongoosejs.svg";
import typescript from "../../assets/images/typescript.svg";
import vite from "../../assets/images/vite.svg";

const Resume = () => {
  return (
    <>
      <IonCardHeader>
        <IonCardTitle>Resume</IonCardTitle>
      </IonCardHeader>
      <IonCard>
        <IonCardContent>
          <IonCardSubtitle>
            These are some of the software I've used for building client-side
            applications
          </IonCardSubtitle>
          <div className="skills">
            <IonButton
              href="https://ionicframework.com/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={logoIonic} />
            </IonButton>
            <IonButton
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={logoHtml5} />
            </IonButton>
            <IonButton
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={logoCss3} />
            </IonButton>
            <IonButton
              href="https://sass-lang.com/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={logoSass} />
            </IonButton>
            <IonButton
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={logoJavascript} />
            </IonButton>
            <IonButton href="https://angular.io/" target="blank" fill="clear">
              <IonIcon className="skill" icon={logoAngular} />
            </IonButton>
            <IonButton href="https://react.dev/" target="blank" fill="clear">
              <IonIcon className="skill" icon={logoReact} />
            </IonButton>
            <IonButton
              href="https://capacitorjs.com/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={logoCapacitor} />
            </IonButton>
          </div>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <IonCardSubtitle>
            These are some of the software I've used for building backend
            applications
          </IonCardSubtitle>
          <div className="skills">
            <IonButton href="https://nodejs.org/en" target="blank" fill="clear">
              <IonIcon className="skill" icon={logoNodejs} />
            </IonButton>
            <IonButton
              href="https://firebase.google.com/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={logoFirebase} />
            </IonButton>
            <IonButton
              href="https://www.npmjs.com/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={logoNpm} />
            </IonButton>
            <IonButton
              href="https://expressjs.com/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={express} />
            </IonButton>
            <IonButton
              href="https://www.mongodb.com/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={mongodb} />
            </IonButton>
            <IonButton
              href="https://www.postgresql.org/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={postgresql} />
            </IonButton>
            <IonButton
              href="https://mongoosejs.com/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={mongoosejs} />
            </IonButton>
            <IonButton
              href="https://www.typescriptlang.org/"
              target="blank"
              fill="clear"
            >
              <IonIcon className="skill" icon={typescript} />
            </IonButton>
            <IonButton href="https://vitejs.dev/" target="blank" fill="clear">
              <IonIcon className="skill" icon={vite} />
            </IonButton>
          </div>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <IonCardSubtitle>and more...</IonCardSubtitle>
        </IonCardContent>
      </IonCard>
      <IonCardContent>
        <IonButton href="https://docs.google.com/document/d/1FK4ZEE4y5uncnMBkkQiMXauSAyuyL8Ss1nR0I6m6I9Y/edit?usp=sharing">
          Download My Resume
        </IonButton>
      </IonCardContent>
    </>
  );
};

export default Resume;
