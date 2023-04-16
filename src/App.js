import EditStory from "./component/EditStory/EditStory";
import Header from "./component/Header/Header";
import CreateStory from "./component/createStory/CreateStory";
import ViewStory from "./component/viewStory/viewStory";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<ViewStory/>}/>
      <Route path="/CreatStory" element={<CreateStory/>}/>
      <Route path="/editStory" element={<EditStory/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
