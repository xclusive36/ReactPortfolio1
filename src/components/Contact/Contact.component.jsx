import {
  useIonToast,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonItem,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/react";

const Contact = () => {
  const [present] = useIonToast(); // useIonToast hook to present toast message to user

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
    <IonCard>
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
          <IonButton type="submit">Contact Me</IonButton>
        </form>
      </IonCardContent>
    </IonCard>
  );
};

export default Contact;
