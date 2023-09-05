import { LoaderSymbol } from "./LoaderSymbol";
// import { LoaderText } from "./LoaderText";
import "./styles.scss";

export function LoadingScreen({ lifeState }) {
  let shownClass = lifeState != "hide" ? "" : "hide";
  let activeClass = lifeState == "active" ? "active" : "";

  return (
    <>
      <section className={`loading-container ${shownClass}`}>
        <LoaderSymbol className={activeClass} />
        {/* <LoaderText className={activeClass} /> */}
      </section>
    </>
  );
}
