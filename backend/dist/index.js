"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routers/user.route"));
const worker_route_1 = __importDefault(require("./routers/worker.route"));
const app = (0, express_1.default)();
// postgres + prism psql psql 'postgresql://postgres:yMdjIzeVNd0FfK7j@org-synctechs-inst-testwithnode.data-1.use1.tembo.io:5432/postgres
// signin with wallet 
app.use("/v1/user", user_route_1.default);
app.use("/v1/worker", worker_route_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
