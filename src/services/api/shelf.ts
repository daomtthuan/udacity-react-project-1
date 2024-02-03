import { Shelf } from '~types/model/shelf.type';

const shelfApi = {
  list: () => {
    const shelves: Shelf[] = [
      {
        id: 'currentlyReading',
        displayName: 'Currently Reading',
      },
      {
        id: 'wantToRead',
        displayName: 'Want to Read',
      },
      {
        id: 'read',
        displayName: 'Read',
      },
    ];

    return shelves;
  },
};

export default shelfApi;
