const request = require("supertest");
const app = require("../app");

describe("POST /lagrange", () => {
    it("test lagrange endpoint", async () => {
        const res = await request(app).post("/lagrange").send({
            number: 60
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.lagrange.length).toBe(4);
        expect(reverse_lagrange(res.body.lagrange)).toBe(60);
    });
  });

  const reverse_lagrange = (n) => {
    return n[0] ** 2 + n[1] ** 2 + n[2] ** 2 + n[3] ** 2;
}