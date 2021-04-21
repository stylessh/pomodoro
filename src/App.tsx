import { Route } from "wouter";
import { ThemeProvider } from "styled-components";

// components
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

// context
import { TimerProvider } from "./context/timerContext";

// styles
import GlobalStyles from "./global/styles";
import theme from "./global/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TimerProvider>
        <GlobalStyles />
        <Navbar />

        <Route path="/">
          <Timer />
        </Route>

        <Route path="/short">short time</Route>
        <Route path="/long">long time</Route>
      </TimerProvider>
    </ThemeProvider>
  );
};

export default App;
