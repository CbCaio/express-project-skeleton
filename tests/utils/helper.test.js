const helper = require('../../src/utils/helper');
const { env } = require('../../src/config');

describe('tests -> utils -> helper', () => {
  it('It should return path of file for aws service', () => {
    const type = 'aws';
    const folderName = 'my-dowloads';
    const location = helper.getNewfolder(folderName, type);
    const [folderAws] = location.split('/');
    expect(typeof location).toBe('string');
    expect(folderAws).toBe(env.uploadBucket);
  });

  it('It should return path of file for local machine', () => {
    const type = 'local';
    const folderName = 'my-dowloads';
    const location = helper.getNewfolder(folderName, type);
    const folderhome = location.split('/');
    expect(typeof location).toBe('string');
    expect(folderhome[1]).toBe('home');
  });
});
