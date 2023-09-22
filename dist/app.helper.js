"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvFilePath = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function getEnvFilePath(dest) {
    const env = process.env['NODE_ENV'];
    const fallback = (0, path_1.resolve)(`${dest}/.env`);
    const filename = env ? `${env}.env` : 'development.env';
    const envFilePath = (0, path_1.resolve)(`${dest}/${filename}`);
    return (0, fs_1.existsSync)(envFilePath) ? envFilePath : fallback;
}
exports.getEnvFilePath = getEnvFilePath;
//# sourceMappingURL=app.helper.js.map