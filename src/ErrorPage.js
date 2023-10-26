import NavBar from "./NavBar";
import "./ErrorPage.css"

function ErrorPage() {
  
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Your in the wrong part of town buster</h1>
        <h1>Turn back before things get messy...</h1>
      </main>
    </main>
  );
}

export default ErrorPage;