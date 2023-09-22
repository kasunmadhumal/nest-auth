"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashingValue = void 0;
const bcrypt = require("bcrypt");
async function HashingValue(password) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
}
exports.HashingValue = HashingValue;
//# sourceMappingURL=hashing.js.map