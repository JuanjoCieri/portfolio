import WindowMock from "../../../components/WindowMock";
import nobgapp from "../../../assets/projectsImage/nobgapp.jpeg"

export default function Main() {
  return (
    <>
      <WindowMock
        projectName="Cierusic"
        projectDesc="Cirusic is a music player web application based on React and Redux. It allows users to browse and play playlists, like songs, add songs to custom playlists, and leave comments. It offers an intuitive and attractive interface with features such as continuous playback, playback control and playlist search. It provides an interactive and enjoyable experience for music lovers."
        projectImage={nobgapp}
        projectStack={["React", "TailwindCSS", "NodeJS", "Firebase", "Express", "Redux"]}
        projectDate="Jun 2023"
      />
    </>
  );
}
