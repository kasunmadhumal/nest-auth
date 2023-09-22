"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = void 0;
const mongodb_1 = require("mongodb");
const mongoDBConstants_1 = require("../constants/mongoDBConstants");
const getDb = async () => {
    const MONGO_URL = mongoDBConstants_1.mongoDBConstants.MONGO_URL;
    const client = await mongodb_1.MongoClient.connect(MONGO_URL);
    return client.db();
};
exports.getDb = getDb;
//# sourceMappingURL=database.helper.js.map