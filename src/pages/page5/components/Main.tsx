import WindowMock from "../../../components/WindowMock";
import cierusic from "../../../assets/projectsImage/cierusic.jpeg";

export default function Main() {
  return (
    <>
      <WindowMock
        projectName="Cierusic"
        projectDesc="Cirusic is a music player web application based on React and Redux. It allows users to browse and play playlists, like songs, add songs to custom playlists, and leave comments. It provides an interactive and enjoyable experience for music lovers."
        projectImage={cierusic}
        projectStack={[
          "React",
          "TailwindCSS",
          "NodeJS",
          "Firebase",
          "Express",
          "Redux",
        ]}
        projectDate="Jun 2023"
        projectRepo="https://github.com/cierusic"
        projectDeploy="https://github.com/JuanjoCieri"
      />
    </>
  );
}
