export interface Document {
  name: string;
  id: string;
  mimeType: string;
  parents: Array<string>;
}

export interface Folder {
  folder: Document;
  videos: Array<Document>;
}

const FOLDER_MIME_TYPE = 'application/vnd.google-apps.folder';

export const getDocumentTreeStructure = (documents: Array<Document>) => {
  const documentTree: Array<Folder> = [];
  documents.filter((document) => document.mimeType === FOLDER_MIME_TYPE).forEach((folder) => {
    documentTree.push({ folder: folder, videos: documents.filter((document) => document.parents.includes(folder.id)) });
  });
  return documentTree;
}