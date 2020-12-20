"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unitsControllers_1 = __importDefault(require("../controllers/unitsControllers"));
class UnitsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:usuario', unitsControllers_1.default.unitsUsers);
        this.router.get('/', unitsControllers_1.default.allUnits);
    }
}
const unitsRoutes = new UnitsRoutes();
exports.default = unitsRoutes.router;
