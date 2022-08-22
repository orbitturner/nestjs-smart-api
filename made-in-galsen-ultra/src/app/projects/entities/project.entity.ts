/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mig_projects_pkey", ["id"], { unique: true })
@Entity("mig_projects", { schema: "public" })
export class Project {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @ApiProperty()
    @Column("uuid", { name: "owner" })
    owner: string;

    @ApiProperty()
    @Column("character varying", { name: "name", length: 100 })
    name: string;

    @ApiProperty()
    @Column("character varying", { name: "description", length: 255 })
    description: string;

    @ApiProperty()
    @Column("character varying", { name: "repo_url", length: 255 })
    repoUrl: string;

    @ApiProperty()
    @Column("boolean", { name: "is_archived", default: () => "false" })
    isArchived: boolean;

    @ApiProperty()
    @Column("boolean", { name: "show", default: () => "true" })
    show: boolean;

    @ApiProperty()
    @Column("boolean", { name: "is_private", default: () => "false" })
    isPrivate: boolean;
}

