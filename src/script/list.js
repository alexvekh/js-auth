// 1. Завантаження даних - відобразити статус завантаження
// 2. Відображення даних (конвертація даних)
// 3. Якщо помилка - відобразити помилку
export class List {
  STATE = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  }

  status = null
  data = null
  element = null

  updateStatus = (status, data) => {
    this.status = status
    if (data) this.data = data

    this.updateView()
  }

  updateView = () => {}

  loadData = async () => {}

  convertData = () => {}
}
