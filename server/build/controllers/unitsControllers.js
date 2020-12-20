"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UnitsControllers {
    unitsUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = req.params.usuario;
            const users = yield database_1.default.query('SELECT * ' +
                'from unidades_residenciales, unidades_administradas, ciudades ' +
                'where usuario = \'' + usuario + '\' and ' +
                'unidades_residenciales.nit_unidad = unidades_administradas.nit_unidad and ' +
                'ciudad_unidad = codigo_ciudad');
            console.log(users.recordsets);
            res.json(users.recordsets[0]);
        });
    }
    allUnits(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * from unidades_administradas');
            console.log(users.recordsets);
            res.json(users.recordsets[0]);
        });
    }
}
const unitsControllers = new UnitsControllers();
exports.default = unitsControllers;
