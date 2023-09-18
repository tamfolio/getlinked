import "./App.css";
import Explain from "./components/Explain";
import Explain2 from "./components/Explain2";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-[100%] h-auto bg-blue">
      <Hero />
      <Explain
        img="./assets/idea.png"
        title="Introduction to getlinked"
        spanned="tech Hackathon 1.0"
        para="Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!"
      />
      <div className="w-[100%] h-[1px] bg-white opacity-[.18]"></div>
      <Explain2
        img="./assets/idea2.png"
        title="Rules and"
        spanned="Guidelines"
        para="Our tech hackathon is a melting pot of 
        visionaries, and its purpose is as clear as day:
        to shape the future. Whether you're a coding
        genius, a design maverick, or a concept 
        wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world 
        problems, pushing the boundaries of 
        technology, and creating solutions that can 
        change the world, that's what we're all about!"
      />
      <div className="w-[100%] h-[1px] bg-white opacity-[.18]"></div>
    </div>
  );
}

export default App;
