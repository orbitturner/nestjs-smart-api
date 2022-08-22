import { Controller } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Project } from './entities/project.entity';
import { ApiTags } from '@nestjs/swagger';
import { ApiTagsList } from 'src/config/app.config';


@ApiTags(ApiTagsList.PROJECTS)
@Crud({
  model: {
    type: Project
  },
})
@Controller('projects')
export class ProjectsController implements CrudController<Project> {
  constructor(public service: ProjectsService) {}
    
  
}
