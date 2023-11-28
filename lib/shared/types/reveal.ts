export type Reveal<T = any> = { [P in keyof T]: T[P] };
