"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const crud_1 = require("@nestjsx/crud/lib/crud");
const typeorm_1 = require("typeorm");
let Project = class Project {
};
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("uuid", { name: "owner" }),
    __metadata("design:type", String)
], Project.prototype, "owner", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", { name: "name", length: 100 }),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", { name: "description", length: 255 }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", { name: "repo_url", length: 255 }),
    __metadata("design:type", String)
], Project.prototype, "repoUrl", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("boolean", { name: "is_archived", default: () => "false" }),
    __metadata("design:type", Boolean)
], Project.prototype, "isArchived", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("boolean", { name: "show", default: () => "true" }),
    __metadata("design:type", Boolean)
], Project.prototype, "show", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("boolean", { name: "is_private", default: () => "false" }),
    __metadata("design:type", Boolean)
], Project.prototype, "isPrivate", void 0);
Project = __decorate([
    (0, typeorm_1.Index)("mig_projects_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("mig_projects", { schema: "public" })
], Project);
exports.Project = Project;
//# sourceMappingURL=project.entity.js.map