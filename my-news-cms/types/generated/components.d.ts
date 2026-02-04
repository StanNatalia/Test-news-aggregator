import type { Schema, Struct } from '@strapi/strapi';

export interface SharedKeyword extends Struct.ComponentSchema {
  collectionName: 'components_shared_keywords';
  info: {
    displayName: 'keyword';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.keyword': SharedKeyword;
    }
  }
}
