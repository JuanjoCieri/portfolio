import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import reactsvg from "./assets/react.svg";
import tailwindcss from "./assets/tailwind.svg";
import typescript from "./assets/typescript.svg";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";
import Page5 from "./pages/page5/Page5";
import planet1 from "./assets/planet1.png"
import moon from "./assets/moon.png"
import WindowMockMin from "./components/WindowMockMin";
import Footer from "./components/Footer";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function App() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={6}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#AA8F24" }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: "#ABCDAB" }}
        />
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{ backgroundColor: "#AASDAB" }}
        />
        <ParallaxLayer
          offset={5}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0.3}
          style={{ pointerEvents: "none", opacity: 0.7 }}
        >
          <img
            src={planet1}
            style={{ width: "25%", marginLeft: "10%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={-0.3}
          style={{ pointerEvents: "none", opacity: 0.7 }}
        >
          <img
            src={moon}
            style={{ width: "25%", marginLeft: "85%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.4 }}>
          <img
            src={reactsvg}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={typescript}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={tailwindcss}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "45%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.8} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4.5} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={url("earth")} style={{ width: "60%" }} />
        </ParallaxLayer>

        {/* HAPPY TAILS PROJECT */}

        <ParallaxLayer offset={2.3} speed={-0.3} style={{}}>
          <WindowMockMin
            projectName="HappyTails"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Page1 />
          {/* <img src={url('server')} style={{ width: '20%' }} /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Page2 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          // onClick={() => parallax.current.scrollTo(0)}
        >
          <Page3 />
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={0.5} style={{ opacity: 0.6 }}>
          <img
            src="tu-imagen-url"
            style={{ display: "block", width: "30%", marginLeft: "35%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Page4 />
        </ParallaxLayer>

        <ParallaxLayer offset={4.5} speed={0.5} style={{ opacity: 0.6 }}>
          <img
            src="tu-imagen-url"
            style={{ display: "block", width: "30%", marginLeft: "35%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Page5 />
        </ParallaxLayer>

        <ParallaxLayer offset={5.5} speed={0.5} style={{ opacity: 0.6 }}>
         
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
<Footer />
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}
