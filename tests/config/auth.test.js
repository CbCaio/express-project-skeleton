const auth = require('../../src/config/auth');
const moment = require('moment');
const sinon = require('sinon');

describe('tests -> config -> auth', () => {
  const token = auth.encodeToken('some word');
  describe('when signing a token', () => {
    it('should be syntactically valid', () => {
      expect(token.split('.')).toHaveLength(3);
    });

    it('should be able to validate token', () => {
      expect.assertions(1);
      return auth.verifyToken(token).then((decoded) => {
        expect(decoded.sub).toBe('some word');
      });
    });
  });

  describe('expired token', () => {
    let clock;
    afterEach(() => {
      try { clock.restore(); } catch (e) {}
    });
    it('should error on expired token', () => {
      expect.assertions(1);
      clock = sinon.useFakeTimers(moment().add(3, 'days').valueOf());
      return auth.verifyToken(token).catch((err) => {
        expect(err.name).toBe('TokenExpiredError');
      });
    });
  });
});
