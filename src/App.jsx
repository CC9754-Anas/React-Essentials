import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    // We can wrap the 'Header' and 'main' tags either within a 'div' tag, a
    // 'Fragment' tag or an empty tag i.e. '<>...</>'
    // <div>
    // {/* This tag will create an extra unnecessary 'div' tag in the DOM of the application. */}
    // <Fragment>
    // {/* This tag is provided by 'React' and does not create any unnecessary tag in the 
    //   DOM of the application. */}
    <> 
    {/* This tag is even better as we don't have to import any extra tags such as 'Fragment' tag
    to avoid creation of any unnecessary tag in the DOM of the application.*/}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
    // </Fragment>
    // </div>
  );
}

export default App;
