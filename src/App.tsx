import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import Text from './Styles/styledComponent/Text';
import globalStyle from './Styles/globalCss';
import Welcome from './components/WelcomeSection/Welcome';
import Main from './components/Main/Main';
function App() {
  globalStyle()
  return (
    <Flex id='wrapper' data-testid="app" css={{position:"relative",}}>
      {/* <Welcome/> */}
      <Main/>
    </Flex>
  );
}

export default App;
