import { componentRegistry } from "../../quartz/components/registry"

export type { ExplorerOptions } from "./explorer"

export const plugins: Record<string, Record<string, (...args: unknown[]) => void>> = {
  "explorer": {
    Explorer: (...args: unknown[]) => {
      componentRegistry.setOptionOverrides("explorer", args[0] as Record<string, unknown>)
    },
  },
}

export const Explorer = plugins["explorer"].Explorer