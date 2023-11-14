
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://zuravvski.local/graphql",
  documents: "app/**/*.tsx",
  generates: {
    "app/gql/": {
      preset: "client",
      plugins: []
    },
  },
  ignoreNoDocuments: true,
};

export default config;
