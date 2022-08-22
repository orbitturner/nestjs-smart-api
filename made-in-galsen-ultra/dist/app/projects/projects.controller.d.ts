import { ProjectsService } from './projects.service';
import { CrudController } from '@nestjsx/crud';
import { Project } from './entities/project.entity';
export declare class ProjectsController implements CrudController<Project> {
    service: ProjectsService;
    constructor(service: ProjectsService);
}
