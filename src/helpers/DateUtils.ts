import dayjs from 'dayjs'

const DEFAULT_INPUT_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DEFAULT_OUTPUT_FORMAT = 'LLL'

export default class DateUtils {
  static formatDate(date, inputFormat = DEFAULT_INPUT_FORMAT, outputFormat = DEFAULT_OUTPUT_FORMAT) {
    let parsedDate = dayjs(date)
    if (inputFormat !== DEFAULT_INPUT_FORMAT) {
      parsedDate = dayjs(date, inputFormat)
    }

    return outputFormat !== DEFAULT_OUTPUT_FORMAT ? parsedDate.format(outputFormat) : parsedDate.format(DEFAULT_OUTPUT_FORMAT)
  }
}
