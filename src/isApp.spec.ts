import { si } from './isApp';

describe('typeScript test suite', () => {
  it('should return Cpu if exists or not"', () => {
    expect.assertions(1);
    expect(si).toHaveProperty('cpu');
  });
});