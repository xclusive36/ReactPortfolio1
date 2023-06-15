import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonThumbnail,
} from "@ionic/react";
import { logoGithub, logoLinkedin, logoTwitter } from "ionicons/icons";
import portfolioPhoto from "./assets/images/photo.jpeg";
import "./App.css";
import HeaderComponent from "./components/Header/Header.component";

function App() {
  return (
    <IonPage>
      <IonContent color="light" class="ion-padding">
        <IonCard className="content">
          <HeaderComponent />
          <IonCardContent>
            <IonGrid>
              <IonRow>
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
                <IonCol className="main">
                  <IonCard>
                    <IonCardHeader>
                      <IonThumbnail>
                        <IonImg src={portfolioPhoto}></IonImg>
                      </IonThumbnail>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default App;
