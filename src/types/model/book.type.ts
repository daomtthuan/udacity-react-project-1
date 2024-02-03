export type Book = {
  id: string;
  title: string;
  authors: string[];
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  shelf: string;
};
