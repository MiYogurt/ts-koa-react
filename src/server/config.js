"use strict";
var path = require("path");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    path: {
        serverRootDir: path.resolve(__dirname),
        projRootDir: path.resolve(__dirname, "../.."),
        clientRootDir: path.resolve(__dirname, "../client")
    }
};
