import React, { useState } from 'react';
import { Folder } from '../shared/documentUtils';
import { Videos } from '../Video';
import { Col, Row, Button, Input, Table, Tooltip } from 'antd';

interface FoldersProps {
  folder: Folder;
}

export const Folders: React.FC<FoldersProps> = ({ folder }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  // console.log(documents);
  //Need to make my own component instead of the table (or pass that into the table)
  //Parent looks to be the containing bit
  //Ugh the folders have the same parents
  //0AJKuWs-AESPrUk9PVA

  //console.log(folders);
  const folderName = folder.folder;
  const videos = folder.videos;
  return (
    <Row key={folderName.id}>
      <Col> Category: {folderName.name} </Col>
      <Col> Trailer Count: {videos.length} </Col>
      { videos.length > 0 && 
        <Button onClick={() => setExpanded(!expanded)}> 
          View Trailers 
        </Button>
      }
      {expanded && <Videos videos={videos} />}
    </Row>
  );
};

/*<Row gutter={16}>
        <Col span={24}>
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
          <Table
            className="table-striped-rows"
            columns={columns}
            dataSource={documents}
            pagination={{ simple: true }}
            loading={isLoading}
          />
        </Col>
      </Row>*/