import {request} from "express";
import app from "../app";
import rewire from "rewire";
describe('Patients', () => {
    afterEach(() => {
        app = rewire('../app');
    });
    it('should get all patients record', async () => {
        const res = await request(app)
            .get('/patients')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('patients')
    })

});