"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.get('/foo-hello', async (_, res) => {
    const barData = await makeCall(process.env.BAR_URI);
    const bazData = await makeCall(process.env.BAZ_URI);
    res.send(`Hello from Foo!  ${barData} ${bazData}`);
});
app.listen(PORT, () => {
    console.log('Foo listening');
});
async function makeCall(URI) {
    try {
        const res = await axios_1.default.get(URI);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}
