import React,{useEffect} from 'react';
import Flex from './Styles/styledComponent/Flex';
import darkTheme from './Styles/theme/darkTheme';
import { theme } from './Styles/@stitches.config';
import globalStyle from './Styles/globalCss';
import Welcome from './components/WelcomeSection/Welcome';
import Main from './components/Main/Main';
import { useStore } from './store/store';


function App() {

  const currentMainPage = useStore(state=>state.currentMainCom)
  const setDb = useStore(state=>state.setDb)
  const currentTheme = useStore(state=>state.currentTheme)
  const setDisplayContextMenu = useStore(state=>state.setDisplayContextMenu)
  globalStyle()

  useEffect(()=>{
    setDb()
  },[])

  return (
    <Flex data-test='app' onContextMenu={(e)=>{e.preventDefault()}} onClick={()=>{setDisplayContextMenu("none")}} id='wrapper' className={currentTheme === "light" ?theme:darkTheme} data-testid="app" css={{position:"relative",}}>
      {currentMainPage === "WelcomePage"  && <Welcome/>}
      {currentMainPage === "MainPage"  && <Main/>}
    </Flex>
  );
}

export default App;
