import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import Text from './Styles/styledComponent/Text';
import globalStyle from './Styles/globalCss';
function App() {
  globalStyle()
  return (
    <div id='wrapper' data-testid="app">
      <Flex dir={"row"}>
        <Text css={{headline1:"900",logo:"700" }}>Hello TS world</Text>
      </Flex>
    </div>
  );
}

export default App;
