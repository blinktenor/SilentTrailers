import React, { useState } from 'react';
import './App.css';
import { SelectSource } from './Components/SelectSource/';
import { Scorecard } from './Scorecard';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  const [listDocumentsVisible, setListDocumentsVisibility] = useState(false);
  const [signedInUser, setSignedInUser] = useState();
  const [documents, setDocuments] = useState([]);

  return (
    <Provider store={store}>
      <div className="App">
        <Scorecard 
          setListDocumentsVisibility={setListDocumentsVisibility}
        />
        <SelectSource 
          documents={documents}
          listDocumentsVisible={listDocumentsVisible} 
          setDocuments={setDocuments}
          setListDocumentsVisibility={setListDocumentsVisibility} 
          setSignedInUser={setSignedInUser}
          signedInUser={signedInUser}
        />
      </div>
    </Provider>
  );
}

export default App;
