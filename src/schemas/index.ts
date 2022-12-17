import { IsBoolean } from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
export class Healthz {
  @IsBoolean()
    status: string;
}
export default validationMetadatasToSchemas({
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  classTransformerMetadataStorage: require('class-transformer/cjs/storage')
    .defaultMetadataStorage,
}) as Record<'Healthz', import('openapi3-ts').SchemaObject>;
