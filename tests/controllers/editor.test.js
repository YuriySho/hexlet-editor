/* global get */

test('/build', async () => {
  const response = await get('/editor/build');
  expect(response).toMatchObject({ statusCode: 200 });
});
