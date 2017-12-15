const createImportation = require('../../src/services/createImportation');

const Importation = require('../../src/models/importation');

describe('tests -> services -> createImportation', () => {
  it('It should save on dataBase', async () => {
    const object = {
      uuid: 'fb2c8e92-71d2-4101-848f-bddb14f8af5a',
      userId: '123',
      type: 'offers',
      fileLocation: '/home/arthur/Documents/git/express-project-skeleton/src/my-uploads/2017-12-13/fb2c8e92-71d2-4101-848f-bddb14f8af5a',
    };

    Importation.create = jest.fn(() => ({
      __v: 0,
      uuid: 'fb2c8e92-71d2-4101-848f-bddb14f8af5a',
      userId: '123',
      type: 'offers',
      location: '/home/arthur/Documents/git/express-project-skeleton/src/my-uploads/2017-12-13/fb2c8e92-71d2-4101-848f-bddb14f8af5a',
      _id: '5a30fe3d52b46f1a7ee4ab5c',
    }));

    const result = await createImportation(object);

    expect(Object.keys(result)).toEqual(expect.arrayContaining(['__v', 'uuid', 'userId', 'type', 'location', '_id']));
    expect(typeof result).toBe('object');
  });
});
