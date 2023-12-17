import { Role, User } from '@/redux/slices/usersSlice'

export const roles = [
  {name: 'UX/UI дизайнер', roles: 33},
  {name: 'Backend разработчик', roles: 22},
  {name: 'Frontend разработчик', roles: 27},
  {name: 'Аналитик', roles: 17},
  {name: 'Product-manager', roles: 21},
  {name: 'Fullstack разработчик', roles: 9}
]

export const arrayRole: Array<{value: Role, label: string}> = [
  { value: 'ux_ui', label: 'UX/UI дизайнер' },
  { value: 'product_manager', label: 'Продакт-менеджер' },
  { value: 'frontend', label: 'Фронтенд' },
  { value: 'backend', label: 'Бэкенд' },
  { value: 'fullstack', label: 'Фулл стак' },
  { value: 'analyst', label: 'Аналитик' },
]

export const events = [
  {name: 'UX/UI дизайнер', count: 354},
  {name: 'Backend разработчик', count: 532},
  {name: 'Frontend разработчик', count: 643},
  {name: 'Аналитик', count: 213},
  {name: 'Product-manager', count: 234},
  {name: 'Fullstack разработчик', count: 142}
]

export const loyalty = [
  {name: 'UX/UI дизайнер', "Оценка лояльности": 6},
  {name: 'Backend разработчик', "Оценка лояльности": 4},
  {name: 'Frontend разработчик', "Оценка лояльности": 3},
  {name: 'Аналитик', "Оценка лояльности": 7},
  {name: 'Product-manager', "Оценка лояльности": 10},
  {name: 'Fullstack разработчик', "Оценка лояльности": 5}
]

export const expenses = [
  {name: 'Mo', amount: 200},
  {name: 'Tu', amount: 300},
  {name: 'We', amount: 500},
  {name: 'Th', amount: 900},
  {name: 'Fr', amount: 500},
  {name: 'Sa', amount: 600},
  {name: 'Su', amount: 100},
]

export const budget = [
  {name: 'Mo', amount: 1500},
  {name: 'Tu', amount: 1200},
  {name: 'We', amount: 800},
  {name: 'Th', amount: 900},
  {name: 'Fr', amount: 500},
  {name: 'Sa', amount: 300},
  {name: 'Su', amount: 300},
]

export const age = [
  {name: 'До 14 лет', age: 5},
  {name: 'с 14 по 17 лет', age: 13},
  {name: 'с 18 по 24 лет', age: 23},
  {name: 'с 25 по 34 лет', age: 43},
  {name: 'с 35 по 44 лет', age: 21},
  {name: 'с 45 по 54 лет', age: 10},
  {name: 'с 55 и старше', age: 6},
]

export const region = [
  {name: 'Москва', count: 43},
  {name: 'СПб', count: 23},
  {name: 'Новосибирск', count: 5},
  {name: 'Екатеринбург', count: 21},
  {name: 'Казань', count: 10},
  {name: 'Прочие', count: 13},
]

export const traffic = [
  {name: 'Telegram', count: 32},
  {name: 'ВКонтакте', count: 35},
  {name: 'habr', count: 18},
  {name: 'Другие', count: 15},
]

export const sales = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
]

export const users: User[] = [
  {
    id: 1,
    username: '',
    name: 'Шабашвили',
    second: 'Баховый',
    father: 'Тягович',
    age: 32,
    sex: 'male',
    city: 'Москва',
    role: 'frontend',
    phone: '+7-980-555-35-35',
    email: 'aaabbbaaa@gmail.com',
    events_count: 0,
    grade: 'middle'
  },
  {
    id: 2,
    username: '',
    name: 'Баранова',
    second: 'Анастасия',
    father: 'Адамовна',
    age: 42,
    sex: 'female',
    city: 'СПб',
    role: 'ux_ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  },
  {
    id: 3,
    username: '',
    name: 'Баранова',
    second: 'Анастасия',
    father: 'Адамовна',
    age: 42,
    sex: 'female',
    city: 'СПб',
    role: 'ux_ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  },
  {
    id: 4,
    username: '',
    name: 'Баранова',
    second: 'Анастасия',
    father: 'Адамовна',
    age: 42,
    sex: 'female',
    city: 'СПб',
    role: 'ux_ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  },
  {
    id: 5,
    username: '',
    name: 'Баранова',
    second: 'Анастасия',
    father: 'Адамовна',
    age: 42,
    sex: 'female',
    city: 'СПб',
    role: 'ux_ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  },
  {
    id: 6,
    username: '',
    name: 'Баранова',
    second: 'Анастасия',
    father: 'Адамовна',
    age: 42,
    sex: 'female',
    city: 'СПб',
    role: 'ux_ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  },
  {
    id: 7,
    username: '',
    name: 'Баранова',
    second: 'Анастасия',
    father: 'Адамовна',
    age: 42,
    sex: 'female',
    city: 'СПб',
    role: 'ux_ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  },
  {
    id: 8,
    username: '',
    name: 'Баранова',
    second: 'Анастасия',
    father: 'Адамовна',
    age: 42,
    sex: 'female',
    city: 'СПб',
    role: 'ux_ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  },
  {
    id: 0,
    username: '',
    name: 'Баранова',
    second: 'Анастасия',
    father: 'Адамовна',
    age: 42,
    sex: 'female',
    city: 'СПб',
    role: 'ux_ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  },
  {
    id: 10,
    username: '',
    name: 'Баранова',
    second: 'Анастасия',
    father: 'Адамовна',
    age: 42,
    sex: 'female',
    city: 'СПб',
    role: 'ux_ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  }
]