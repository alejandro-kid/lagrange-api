const request = require("supertest");
const app = require("../app");

describe("POST /lagrange", () => {
    it("test lagrange endpoint", async () => {
      const res = await request(app).post("/lagrange").send({
        number: 65
      });
      expect(res.statusCode).toBe(200);
      expect(reverse_lagrange(res.body.lagrange)).toBe(65);
    });
  });

const reverse_lagrange = (n) =>{
    if(n.length !==4){
        return false;
    }
    else{
        return n[0] + n[1] + n[2] + n[3]
    }
}