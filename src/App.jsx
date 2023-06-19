import {
  // import components from ionic/react
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonThumbnail,
  IonInput,
  IonTextarea,
  IonButton,
  useIonToast,
} from "@ionic/react";
import portfolioPhoto from "./assets/images/photo.jpeg"; // import photo of me
import MetaInsight from "./assets/images/meta-insight.png"; // import image of meta-insight
import VolunteerFinder from "./assets/images/vf.png"; // import image of volunteer finder
import MisfitGirl from "./assets/images/misfitgirl.png"; // import image of misfitgirl.com
import LiteStep from "./assets/images/litestep.webp"; // import image of litestep
import Minesweeper from "./assets/images/minesweeper.png"; // import image of minesweeper
import BlackJack from "./assets/images/blackjack.png"; // import image of blackjack

import Header from "./components/Header/Header.component"; // import Header component
import Social from "./components/Social/Social.component"; // import Social component
import Footer from "./components/Footer/Footer.component"; // import Footer component

import "./App.css";
import Project from "./components/Project/Project";

function App() {
  const [present] = useIonToast(); // useIonToast hook to present toast message to user
  const projects = [
    // array of projects to map over
    {
      title: "Meta-Insight",
      alt: "Meta-Insight",
      image: MetaInsight,
      link: "https://github.com/erin-m-keller/meta-insight/",
    },
    {
      title: "Volunteer Finder",
      alt: "Volunteer Finder",
      image: VolunteerFinder,
      link: "https://github.com/erin-m-keller/volunteer-finder",
    },
    {
      title: "Misfitgirl.com",
      alt: "MisfitGirl.com Wax melts",
      image: MisfitGirl,
      link: "https://misfitgirl.com",
    },
    {
      title: "Minesweeper Web App",
      alt: "React Minesweeper Game",
      image: Minesweeper,
      link: "https://stirring-parfait-06fd3c.netlify.app/",
    },
    {
      title: "LiteStep iOS App",
      alt: "LiteStep Picklist App",
      image: LiteStep,
      link: "https://apps.apple.com/us/app/litestep/id1490896776",
    },
    {
      title: "Black Jack",
      alt: "Black Jack Game",
      image: BlackJack,
      link: "https://github.com/xclusive36/BlackJack",
    },
  ];

  const presentToast = (position, color, message) => {
    // function to present toast message to user
    present({
      // present toast from useIonToast hook
      message: message, // set message as message from passed variable
      duration: 1500, // set duration to 1.5 seconds
      position: position, // set position from passed variable (bottom)
      color: color, // set color from passed variable (danger)
    });
  };

  const sendEmail = (event) => {
    // function to send email
    // references:
    // https://stackoverflow.com/a/31664656
    // https://stackoverflow.com/a/7381162

    event.preventDefault(); // prevent default form submission
    const name = event.target[0].value.trim(); // get name from form input and trim whitespace
    const email = event.target[1].value.trim(); // get email from form input and trim whitespace
    const message = event.target[2].value.trim(); // get message from form input and trim whitespace
    const pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; // regex pattern for email validation
    if (!name) {
      // if name is empty
      presentToast("bottom", "danger", "Please enter your name."); // present toast
      return; // return
    }
    if (!name || !pattern.test(email)) {
      // if email is empty or does not match pattern
      presentToast("bottom", "danger", "Please enter a valid email address."); // present toast
      return; // return
    }
    if (!message) {
      // if message is empty
      presentToast("bottom", "danger", "Please enter a message."); // present toast
      return; // return
    }

    let obj, body; // declare variables

    obj = {
      // create object
      name: name, // set name
      email: email, // set email
      message: message, // set message
    };

    body = "Name: " + obj.name; // set body with name from object
    body += "\nEmail: " + obj.email; // append body with email from object
    body += "\nMessage: " + obj.message; // append body with message from object

    const subject = "Profile Contact Form"; // set subject of email

    window.open(
      // open mailto link
      String(
        // convert to string to replace ^ with @
        "mailto:joshua.cavell^gmail.com?body=" + // mailto link
          encodeURIComponent(body) + // encode body of email with encodeURIComponent to format as entended
          "&subject=" + // add subject to mailto link
          encodeURIComponent(subject) // encode subject of email with encodeURIComponent to format as entended
      ).replace("^", "@") // replace ^ with @ in mailto link to send email to trick spam bots
    );
  };

  return (
    <IonPage>
      <IonContent class="ion-padding" color="light">
        <IonCard className="content">
          <Header />
          <IonCardContent color="light">
            <IonGrid>
              <IonRow>
                <Social />
                <IonCol className="main" color="light">
                  <Project id="about-me">
                    <IonCardContent className="about">
                      <IonItem>
                        <IonThumbnail slot="start">
                          <IonImg src={portfolioPhoto}></IonImg>
                        </IonThumbnail>
                        <IonLabel className="ion-text-wrap">
                          <IonCardTitle className="ion-padding-bottom">
                            About Me
                          </IonCardTitle>
                          <p>
                            Hello, I'm Joshua Cavell I'm a full-stack web
                            developer with a background in Sales, Customer
                            Service, and a passion for learning. I'm currently
                            enrolled in Michigan State University's Full-Stack
                            Web Development Bootcamp. I'm looking for
                            opportunities to apply my skills and grow as a
                            developer.
                          </p>
                          <p>
                            I began my journey as a web developer as a teenager.
                            I am very much a self taught coder. I've done
                            freelance remote work, and collaborated with
                            talented people. I'm a team player, I enjoy working
                            with others, and I'm always looking for ways to
                            improve my skills. I am top of my class in the MSU
                            Bootcamp, and am attending to learn the latest
                            technologies and best practices.
                          </p>
                          <p>
                            I am good at problem solving, and I enjoy the
                            process. I am looking for a position where I can
                            apply my skills and grow as a developer.
                          </p>
                        </IonLabel>
                      </IonItem>
                    </IonCardContent>
                  </Project>
                  <Project id="portfolio">
                    <IonCardHeader>
                      <IonCardTitle>Portfolio</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent color="primary">
                      <h2>
                        Here are a few past projects I've worked on. Want to see
                        more? Visit{" "}
                        <a href="https://github.com/xclusive36/">Github</a>.
                      </h2>
                      <IonGrid>
                        <IonRow>
                          {projects.map((project, index) => (
                            <IonCol size={index === 0 ? "12" : "4"} key={index}>
                              <IonCard className="card-container">
                                <IonCardHeader>
                                  <a href={project.link} target="blank">
                                    <IonImg
                                      src={project.image}
                                      alt={project.alt}
                                    ></IonImg>
                                  </a>
                                </IonCardHeader>
                                <IonCardContent className="ion-text-center">
                                  <a href={project.link}>{project.title}</a>
                                </IonCardContent>
                              </IonCard>
                            </IonCol>
                          ))}
                        </IonRow>
                      </IonGrid>
                    </IonCardContent>
                  </Project>
                  <Project id="contact">
                    <IonCardHeader>
                      <IonCardTitle>Contact</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <form onSubmit={(event) => sendEmail(event)}>
                        <IonItem>
                          <IonInput label="Name" required></IonInput>
                        </IonItem>
                        <IonItem>
                          <IonInput label="Email" required></IonInput>
                        </IonItem>
                        <IonItem>
                          <IonTextarea label="Message" required></IonTextarea>
                        </IonItem>
                        <IonButton type="submit">Submit</IonButton>
                      </form>
                    </IonCardContent>
                  </Project>
                  <Project id="my-resume">
                    <IonCardHeader>
                      <IonCardTitle>Resume</IonCardTitle>
                    </IonCardHeader>
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
