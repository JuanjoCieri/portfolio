import WindowMock from "../../../components/WindowMock";
import recursosweb from "../../../assets/projectsImage/recursosweb.jpeg";

export default function Main() {
  return (
    <>
      <WindowMock
        projectName="RecursosWeb"
        projectDesc="Web Resources is an application in which there are more than 500 free resources for web development. It is mostly focused on the front end since it has an icon library, color palettes, fonts, etc. It has a simple but effective design, well organized and optimized."
        projectImage={recursosweb}
        projectStack={[
          "React",
          "TailwindCSS",
          "Typescript",
        ]}
        projectDate="Jun 2023"
        projectRepo="https://github.com/JuanjoCieri/recursos-web"
        projectDeploy="https://recursos-web-ten.vercel.app/"
      />
    </>
  );
}
