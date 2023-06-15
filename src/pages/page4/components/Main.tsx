import WindowMock from "../../../components/WindowMock";
import nobgapp from "../../../assets/projectsImage/nobgapp.jpeg"

export default function Main() {
  return (
    <>
      <WindowMock
        projectName="NoBgApp"
        projectDesc="The Application is a sample project that uses Cloudinary's artificial intelligence to automatically erase the background of images in seconds and with the best quality. Highlight the important, eliminate the unnecessary."
        projectImage={nobgapp}
        projectStack={["React", "TailwindCSS", "Axios", "Cloudinary API"]}
        projectDate="Apr 2023"
        projectRepo="https://github.com/JuanjoCieri/no-bg-app"
        projectDeploy="https://no-bg-app.vercel.app/"
      />
    </>
  );
}
