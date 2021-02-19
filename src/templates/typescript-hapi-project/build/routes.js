"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var Joi = __importStar(require("@hapi/joi"));
var helloWorld_1 = require("./handlers/helloWorld");
var resultHTTPStatus = {
    "200": {
        description: "Success",
        schema: Joi.object({
            status: Joi.string().example("SUCCESS"),
            data: Joi.string(),
            errors: Joi.object().example({}),
        }),
    },
    "400": {
        description: "Bad Request",
    },
    "404": {
        description: "Result not found",
    },
    "405": {
        description: "Method not allowed",
    },
    "500": {
        description: "Internal Server Error",
    },
};
exports.Routes = [
    {
        method: "GET",
        path: "/hello",
        options: {
            handler: helloWorld_1.helloWorld,
            description: "Hello World",
            notes: "Returns Hello World",
            plugins: {
                "hapi-swagger": {
                    responses: resultHTTPStatus,
                },
            },
            tags: ["api"],
            validate: {},
        },
    },
];
exports.default = exports.Routes;
