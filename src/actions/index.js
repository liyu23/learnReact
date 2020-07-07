// action常量
export const ADD_ROW = "ADD_ROW"
// 添加一行的
export const addRow = len => {
    return {
      type: 'ADD_ROW',
      len
    }
  }