import client from './_client';
import { BookApiListResponse } from './book.type';

const bookApi = {
  list: async () => {
    const { data } = await client.get<BookApiListResponse>(`books`);
    return data.books;
  },

  get: async (id: string) => {
    const { data } = await client.get(`books/${id}`);
    return data;
  },
};

export default bookApi;
