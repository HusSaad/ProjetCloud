import { si } from './isApp';

describe('typeScript test suite', () => {
  it('should return Cpu if exists or not"', () => {
    expect.assertions(1);

    expect(si).toHaveProperty('cpu');
  });
});

// import { request } from 'http';
// //import { server } from './isApp';

// const optionsOk = {
//   hostname: 'localhost',
//   port: 8080,
//   path: '/api/v1/sysinfo',
//   method: 'GET'
// };

// const optionsKo = {
//   hostname: 'localhost',
//   port: 8080,
//   path: '/',
//   method: 'GET'
// };

// describe('HTTP Server testing...', () => {
//   it("Just testing...", () => {
//     expect(1).toBe(1);
//   });

//   it('Should return 404 Not Found for error', async () => {
//     request(optionsKo, res => {
//       expect(res.statusCode).toStrictEqual(404);
//     });
//   });

//   it('Should make a request to the server...',  async () => {
//     request(optionsOk, res => {
//       expect(res.statusCode).toStrictEqual(200);
//     });
//  });
// });