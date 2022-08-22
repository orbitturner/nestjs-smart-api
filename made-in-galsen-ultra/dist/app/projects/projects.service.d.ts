import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Project } from './entities/project.entity';
export declare class ProjectsService extends TypeOrmCrudService<Project> {
    constructor(repo: any);
}
