// read /doc/G2.md
import * as g2 from '@antv/g2'

class G2 {
  constructor (chartType, options) {
    this.chartType = chartType
    this.options = options

    this.exportG2Plot()
  }

  exportG2Plot () {
    return new g2[this.chartType](this.options)
  }
}

export { G2 }
