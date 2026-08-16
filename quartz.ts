import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    console.log("DEBUG a:", { isFolder: a.isFolder, slugSegment: a.slugSegment, displayName: a.displayName })
    console.log("DEBUG b:", { isFolder: b.isFolder, slugSegment: b.slugSegment, displayName: b.displayName })


    // 資料夾優先於筆記
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    // 直接用官方提供的 slugSegment,不用自己切割字串
    const nameA = a.slugSegment ?? ""
    const nameB = b.slugSegment ?? ""

    return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: "base" })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
