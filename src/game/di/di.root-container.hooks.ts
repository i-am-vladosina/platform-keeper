import { createInjectionHooks } from "brandi-react";
import { DI_TOKENS } from "./di.tokens";

const [useConfig, useGameApplication] = createInjectionHooks(DI_TOKENS.config, DI_TOKENS.gameApplication);

export { useConfig, useGameApplication };
