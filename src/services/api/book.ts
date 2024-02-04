import client from './_client';
import { BookApiGetResponse, BookApiListResponse, BookApiSearchResponse, BookApiUpdateRequest, BookApiUpdateResponse } from './book.type';

const bookApi = {
  list: async () => {
    const { data } = await client.request<BookApiListResponse>({
      method: 'get',
      url: 'books',
    });

    return data.books;
  },

  get: async (id: string) => {
    const { data } = await client.request<BookApiGetResponse>({
      method: 'get',
      url: `books/${id}`,
    });

    return data.book;
  },

  update: async ({ id, ...updatedData }: BookApiUpdateRequest) => {
    const { data } = await client.request<BookApiUpdateResponse>({
      method: 'put',
      url: `books/${id}`,
      data: updatedData,
    });

    return data;
  },

  search: async (query: string) => {
    const { data } = await client.request<BookApiSearchResponse>({
      method: 'post',
      url: 'search',
      data: {
        query,
        maxResults: 20,
      },
    });

    if ('error' in data.books) {
      return undefined;
    }

    return data.books;
  },
};

export default bookApi;
