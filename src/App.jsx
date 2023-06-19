import {
  // import components from ionic/react
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";

import Header from "./components/Header/Header.component"; // import Header component
import Social from "./components/Social/Social.component"; // import Social component
import Footer from "./components/Footer/Footer.component"; // import Footer component
import Project from "./components/Project/Project"; // import Project component
import About from "./components/About/About.component"; // import About component
import Portfolio from "./components/Portfolio/Portfolio.component";
import Contact from "./components/Contact/Contact.component";
import Resume from "./components/Resume/Resume.component";

import "./App.css"; // import App.css stylesheet

function App() {
  return (
    <IonPage>
      <IonContent class="ion-padding" color="light">
        <IonCard className="content">
          <Header />
          <IonCardContent color="light">
            <IonGrid>
              <IonRow>
                <div className="side-bar">
                  <Social />
                </div>
                <IonCol className="main" color="light">
                  <Project id="about-me">
                    <About />
                  </Project>
                  <Project id="portfolio">
                    <Portfolio />
                  </Project>
                  <Project id="contact">
                    <Contact />
                  </Project>
                  <Project id="my-resume">
                    <Resume />
                  </Project>
                </IonCol>
              </IonRow>
            </IonGrid>
            <Footer />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default App;
