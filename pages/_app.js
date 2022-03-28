import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Layouts from "../Components/Layouts";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const App = ({ Component, pageProps }) => {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )

};


export default App;