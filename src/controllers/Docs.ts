import { Controller, Get, HttpCode } from 'routing-controllers';
import { Service } from 'typedi';
import Swagger from '../Swagger';

@Controller('/api/v1/docs')
@Service()
export default class Docs {
  @Get('/')
  @HttpCode(200)
  async _index() {
    return Swagger.spec;
  }
}
