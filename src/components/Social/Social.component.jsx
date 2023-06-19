import { IonButton, IonCol, IonIcon } from "@ionic/react";
import {logoLinkedin, logoGithub, logoTwitter} from 'ionicons/icons';

import "./Social.styles.css";

const Social = () => {
  return (
    <IonCol id="social-buttons">
      <IonButton
        color="dark"
        fill="clear"
        href="https://www.linkedin.com/in/joshua-cavell-796964164/"
        target="_blank"
      >
        <IonIcon icon={logoLinkedin} slot="icon-only" />
      </IonButton>
      <IonButton
        color="dark"
        fill="clear"
        href="https://github.com/xclusive36/"
        target="_blank"
      >
        <IonIcon icon={logoGithub} slot="icon-only" />
      </IonButton>
      <IonButton
        color="dark"
        fill="clear"
        href="https://twitter.com/xclusive36"
        target="_blank"
      >
        <IonIcon icon={logoTwitter} slot="icon-only" />
      </IonButton>
    </IonCol>
  );
};

export default Social;
