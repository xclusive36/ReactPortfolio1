import { IonCard } from "@ionic/react";

const Project = ({ children, id }) => {
  return (
    <section id={id}>
      <>{children}</>
    </section>
  );
};

export default Project;
