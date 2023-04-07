const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article II...',
      content: 'Main content of the article II',
      publishedDate: new Date('12-12-2022'),
      author: 'Mark Twain',
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article III...',
      content: 'Main content of the article III',
      publishedDate: new Date('07-16-2001'),
      author: 'Elly McLane',
    },
    {
      id: '4',
      title: 'Article title IV',
      shortDescription: 'Short description of the article IV...',
      content: 'Main content of the article IV',
      publishedDate: new Date('09-20-2010'),
      author: 'John Wick',
    },
  ],
};

export default initialState;
