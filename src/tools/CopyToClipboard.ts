import message from 'antd/lib/message'
import copy from 'copy-to-clipboard'

export default (text: string, completeMsg= 'скопирован') => {
  copy(text)
  message.success(completeMsg)
};
