import { useState } from "react";
import { IonCardHeader, IonCardTitle, IonIcon, IonButton } from "@ionic/react";
import {
  mailOutline,
  informationCircleOutline,
  briefcaseOutline,
  bookOutline,
  menuOutline,
} from "ionicons/icons";
import "./Header.styles.css";

const Header = () => {
  const [selectedButton, setSelectedButton] = useState("about-me");

  return (
    <IonCardHeader color="light" className="header">
      <IonCardTitle className="name">Joshua Cavell</IonCardTitle>
      <div className="header-buttons">
        <IonButton
          className="header-button"
          fill={selectedButton === "about-me" ? "solid" : "clear"}
          color={selectedButton === "about-me" ? "primary" : "dark"}
          onClick={() => setSelectedButton("about-me")}
          href="#about-me"
        >
          <IonIcon icon={informationCircleOutline} slot="start" />
          About Me
        </IonButton>
        <IonButton
          className="header-button"
          fill={selectedButton === "portfolio" ? "solid" : "clear"}
          color={selectedButton === "portfolio" ? "primary" : "dark"}
          onClick={() => setSelectedButton("portfolio")}
          href="#portfolio"
        >
          <IonIcon icon={briefcaseOutline} slot="start" />
          Portfolio
        </IonButton>
        <IonButton
          className="header-button"
          fill={selectedButton === "contact" ? "solid" : "clear"}
          color={selectedButton === "contact" ? "primary" : "dark"}
          onClick={() => setSelectedButton("contact")}
          href="#contact"
        >
          <IonIcon icon={mailOutline} slot="start" />
          Contact
        </IonButton>
        <IonButton
          className="header-button"
          fill={selectedButton === "my-resume" ? "solid" : "clear"}
          color={selectedButton === "my-resume" ? "primary" : "dark"}
          onClick={() => setSelectedButton("my-resume")}
          href="#my-resume"
        >
          <IonIcon icon={bookOutline} slot="start" />
          My Resume
        </IonButton>
      </div>
      <IonButton className="hamburger" fill="clear" color="dark">
        <IonIcon icon={menuOutline} />
      </IonButton>
    </IonCardHeader>
  );
};

export default Header;
