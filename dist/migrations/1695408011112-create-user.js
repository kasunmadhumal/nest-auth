"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const hashing_1 = require("../secuirity/hashing");
const database_helper_1 = require("../migrations-utils/database.helper");
const up = async () => {
    const db = await (0, database_helper_1.getDb)();
    const password = await (0, hashing_1.HashingValue)('Htj#@!234');
    db.collection('users').insertOne({
        username: 'admin',
        password: password,
    });
};
exports.up = up;
const down = async () => {
    const db = await (0, database_helper_1.getDb)();
    db.collection('users').deleteOne({ username: 'admin' });
};
exports.down = down;
//# sourceMappingURL=1695408011112-create-user.js.map