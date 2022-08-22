/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, Entity, Index } from "typeorm";

@Index("mig_users_pkey", ["uuid"], { unique: true })
@Entity("mig_users", { schema: "public" })
export class User {
    @ApiProperty()
    @Column("uuid", {
        primary: true,
        name: "uuid",
        default: () => "uuid_generate_v1()",
    })
    uuid: string;

    @ApiProperty()
    @Column("character varying", { name: "firstname", length: 100 })
    firstname: string;

    @ApiProperty()
    @Column("character varying", { name: "lastname", length: 50 })
    lastname: string;

    @ApiProperty()
    @Column("character varying", { name: "github_profile_url", length: 255 })
    githubProfileUrl: string;

    @ApiProperty()
    @Column("character varying", { name: "address", nullable: true, length: 255 })
    address: string | null;

    @ApiProperty()
    @Column("character varying", {
        name: "description",
        nullable: true,
        length: 255,
    })
    description: string | null;

    @ApiProperty()
    @Column("character varying", { name: "username", length: 100 })
    username: string;

    @ApiProperty()
    @Column("character varying", { name: "state", nullable: true, length: 50 })
    state: string | null;

    @ApiProperty()
    @Column("boolean", { name: "is_active", default: () => "true" })
    isActive: boolean;
}
