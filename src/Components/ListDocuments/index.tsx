import React, { useCallback } from 'react';
import moment from 'moment';
import { debounce } from 'lodash';
import { Folders } from '../Folders';
import { Document, getDocumentTreeStructure } from '../shared/documentUtils';

import { Col, Drawer, Row, Button, Input, Table, Tooltip } from 'antd';
const { Search } = Input;

interface ListDocumentsProps {
  visible: boolean;
  onClose: () => void;
  documents: Array<Document>;
  onSearch: (q: string) => void;
  signedInUser: {Ad: string, zu: string};
  isLoading: boolean;
  onSignOut: () => void;
}

export const ListDocuments: React.FC<ListDocumentsProps> = ({ 
  visible, 
  onClose, 
  documents = [], 
  onSearch, 
  signedInUser, 
  onSignOut, 
  isLoading,
}) => {
  const search = (value: string) => {
    delayedQuery(`name contains '${value}'`);
  };

  const delayedQuery = useCallback(
    debounce((q) => onSearch(q), 500),
    []
  );

  //console.log(documents);
  //Need to make my own component instead of the table (or pass that into the table)
  //Parent looks to be the containing bit
  //Ugh the folders have the same parents
  //0AJKuWs-AESPrUk9PVA

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
      width={1000}
    >
      <Row gutter={16}>
        <Col span={10}>
          <div style={{ marginBottom: 20 }}>
            <p>Signed In as: {`${signedInUser?.Ad} (${signedInUser?.zu})`}</p>
            <Button type="primary" onClick={onSignOut}>
              Sign Out
            </Button>
          </div>
          <div className="table-card-actions-container">
            <div className="table-search-container">
              <Search
                placeholder="Search Google Drive"
                onChange={(e) => search(e.target.value)}
                onSearch={(value) => search(value)}
                className="table-search-input"
                size="large"
                enterButton
              />
            </div>
          </div>
          {documentTree.map((folder) => (
            <Folders folder={folder} key={folder.id} />
          ))}
        </Col>
      </Row>
    </Drawer>
  );
};


