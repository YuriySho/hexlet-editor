import faker from 'faker';
import Editor from '../entities/Editor';

export const build = async (request, response) => {
  const languages = ['javascript', 'php', 'python'];
  response.render({ languages });
};

export const show = async (request, response, { db }) => {
  const editor = await db.connection
    .getRepository(Editor)
    .findOne({ name: request.params.id });
  if (!editor) {
    response.head(404);
    return;
  }

  response.render({ gon: { language: editor.language } });
};


export const create = async (request, response, { router, db }) => {
  const editor = new Editor({ ...request.body.editor, name: faker.random.uuid() });
  if (editor instanceof Object) {
    await db.connection
      .manager
      .save(editor);
    response.redirectTo(router.routePath('editor', editor.name));
    return;
  }

  response.render();
};
