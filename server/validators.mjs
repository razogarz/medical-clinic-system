import { body } from 'express-validator';

export const createPatientValidator = [
    body('name').isString().isLength({min: 3}),
    body('lastName').isString().isLength({min: 3}),
    body('pesel').isString().isLength({min: 11, max: 11}),
    body('city').isString().isLength({min: 3}),
    body('street').isString().isLength({min: 3}),
    body('zipCode').isString().isLength({min: 6, max: 6}),
    ];