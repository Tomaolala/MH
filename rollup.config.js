import { defineConfig } from "rollup";



export default defineConfig({
    input: 'src/hm.ts',
    output: {
      file: 'lib/marked.esm.js',
      format: 'esm',
    }
})