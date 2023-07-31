import '../src/App.css'
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Academic } from './components/Academic/Academic';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/Skills';
import { Interest } from './components/Interest/Interest';
import { Languages } from './components/Languages/Languages';


function App() {

  return (
    <div className='App'>
      <Header />
      <Profile />
      <Experience />
      <div className="container-Academic-Skills">
        <Academic />
        <Skills />
      </div>
      <div className="container-Interest-languages">
        <Interest />
        <Languages />
      </div>
    </div>
  )
}

export default App