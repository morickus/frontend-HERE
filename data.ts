import { User } from '@/redux/slices/usersSlice'

export const roles = [
  {name: 'UX/UI дизайнер', roles: 33},
  {name: 'Backend разработчик', roles: 22},
  {name: 'Frontend разработчик', roles: 27},
  {name: 'Аналитик', roles: 17},
  {name: 'Product-manager', roles: 21},
  {name: 'Fullstack разработчик', roles: 9}
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
    role: 'ux-ui',
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
    role: 'ux-ui',
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
    role: 'ux-ui',
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
    role: 'ux-ui',
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
    role: 'ux-ui',
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
    role: 'ux-ui',
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
    role: 'ux-ui',
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
    role: 'ux-ui',
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
    role: 'ux-ui',
    phone: '+7-981-345-67-78',
    email: 'opyatagaming@list.ru',
    events_count: 0,
    grade: 'middle'
  }
]