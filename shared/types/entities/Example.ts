import type { Brand } from ".";

export namespace Example {
  export type Id = Brand<string, "ExampleId">;

  export type Entity = {
    id: Example.Id;
    label: string;
  };
}
