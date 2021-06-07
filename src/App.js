import React, { useState } from 'react';
import './App.css';
import { SelectSource } from './Components/SelectSource/';
import { Scorecard } from './Scorecard';

function App() {
  const [listDocumentsVisible, setListDocumentsVisibility] = useState(false);
  const [signedInUser, setSignedInUser] = useState();
  const [documents, setDocuments] = useState([]);

  return (
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
  );
}

export default App;
