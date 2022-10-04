import Header from "../components/Header";
import Code from "../components/Code";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={"container"}>
      <main className={"main"}>
        <Header />
        <Code />
        <Footer />
      </main>
    </div>
  );
}
