import React from 'react';
import { Folders } from '../Folders';
import { Document, getDocumentTreeStructure } from '../shared/documentUtils';

import { Drawer, Button } from 'antd';

interface ListDocumentsProps {
  visible: boolean;
  onClose: () => void;
  documents: Array<Document>;
  signedInUser: {Ad: string, zu: string};
  isLoading: boolean;
  onSignOut: () => void;
}

export const ListDocuments: React.FC<ListDocumentsProps> = ({ 
  visible, 
  onClose, 
  documents = [], 
  signedInUser, 
  onSignOut, 
  isLoading,
}) => {

  if(documents.length === 0) {
    return (<></>);
  }

  const documentTree = getDocumentTreeStructure(documents);

  return (
    <Drawer
      title="Select Google Drive Document"
      placement="right"
      closable
      onClose={onClose}
      visible={visible}
      width={600}
    >
      <div style={{ marginBottom: 20 }}>
        <p>Signed In as: {`${signedInUser?.Ad} (${signedInUser?.zu})`}</p>
        <Button type="primary" onClick={onSignOut}>
          Sign Out
        </Button>
      </div>
      {documentTree.map((folder) => (
        <Folders folder={folder} key={folder.id} />
      ))}
    </Drawer>
  );
};


