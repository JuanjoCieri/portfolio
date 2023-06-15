import WindowMock from "../../../components/WindowMock";
import projectImage from "../../../assets/projectsImage/happytails.jpeg";

export default function Main() {
  return (
    <>
      <WindowMock
        projectName="HappyTails"
        projectDesc="HappyTails is a Social Network with the aim of facilitating the adoption of animals. It has online chat, marketplace, notifications, mailing, payment gateway, among many others.
        This project was done as a final test to pass Henry's bootcamp."
        projectImage={projectImage}
        projectStack={["React", "Express", "NodeJS", "Socket.io", "MongoDB"]}
        projectDate="Sept 2022"
        projectRepo="https://github.com/Final-Proyect-PETS/PROYECTO-FINAL-PETS"
        projectDeploy="https://happytails.vercel.app/"
      />
    </>
  );
}
