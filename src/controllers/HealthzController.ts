import { Controller, Get, HttpCode } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import schemas from '../schemas';

@Controller('/api/v1')
@Service()
export default class HealthzController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  @OpenAPI({
    summary:
      'A simple "pong" like action that returns, used to ping the server.',
    responses: {
      200: {
        description: 'OK - The server is alive',
        content: {
          'application/json': {
            schema: schemas.Healthz,
          },
        },
      },
    },
  })
  @HttpCode(200)
  @Get('/healthz')
  async _index() {
    try {
      return { status: 'ok' };
    } catch (error) {
      console.log(error.message, error.stack);
    }
  }
}
