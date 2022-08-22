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
exports.User = void 0;
const crud_1 = require("@nestjsx/crud/lib/crud");
const typeorm_1 = require("typeorm");
let User = class User {
};
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("uuid", {
        primary: true,
        name: "uuid",
        default: () => "uuid_generate_v1()",
    }),
    __metadata("design:type", String)
], User.prototype, "uuid", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", { name: "firstname", length: 100 }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", { name: "lastname", length: 50 }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", { name: "github_profile_url", length: 255 }),
    __metadata("design:type", String)
], User.prototype, "githubProfileUrl", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", { name: "address", nullable: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", {
        name: "description",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", { name: "username", length: 100 }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("character varying", { name: "state", nullable: true, length: 50 }),
    __metadata("design:type", String)
], User.prototype, "state", void 0);
__decorate([
    (0, crud_1.ApiProperty)(),
    (0, typeorm_1.Column)("boolean", { name: "is_active", default: () => "true" }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
User = __decorate([
    (0, typeorm_1.Index)("mig_users_pkey", ["uuid"], { unique: true }),
    (0, typeorm_1.Entity)("mig_users", { schema: "public" })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map