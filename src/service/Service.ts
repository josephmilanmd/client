import { MechanicType, RequestType, User } from './Type';

/* eslint-disable @typescript-eslint/no-unused-vars */
let users = [
  { id: 1, name: 'John', email: 'john@gmail.com', password: 'Admin@123', contact: '9876543210' },
  { id: 2, name: 'Adam', email: 'Adam@gmail.com', password: 'Admin@123', contact: '9876543210' }
];

let mechanics = [
  {
    id: 1,
    name: 'Aswin Chandran',
    email: 'aswin@gmail.com',
    password: 'Admin@123',
    contact: '9876543210',
    experience: '12+',
    vehicle: 'All',
    rating: '9.8',
    price: '100',
    distance: '1'
  },
  {
    id: 2,
    name: 'Issac Thomas',
    email: 'issac@gmail.com',
    password: 'Admin@123',
    contact: '9876543210',
    experience: '7+',
    vehicle: 'All',
    rating: '8',
    price: '80',
    distance: '1.5'
  },
  {
    id: 3,
    name: 'Arun V K',
    email: 'arun@gmail.com',
    password: 'Admin@123',
    contact: '9876543210',
    experience: '6+',
    vehicle: 'All',
    rating: '7',
    price: '110',
    distance: '2'
  }
];

let requests = [
  {
    userId: 1,
    mechanicId: 1,
    carModel: 'AUDI',
    subject: 'Engine Problem',
    datetime: '26 Jun 2022 10:35 AM',
    location: 'Ernakulam',
    contact: '9878653210',
    content: 'Having problem while starting the engine'
  },
  {
    userId: 2,
    mechanicId: 1,
    carModel: 'Maruti',
    subject: 'Flat tire',
    datetime: '26 Jun 2022 10:45 AM',
    location: 'Ernakulam',
    contact: '9876863210',
    content: 'No notes'
  },
  {
    userId: 3,
    mechanicId: 2,
    carModel: 'MG',
    subject: 'Engine Overheating',
    datetime: '26 Jun 2022 10:50 AM',
    location: 'Ernakulam',
    contact: '9876543210',
    content: 'smoke problem and engine over heating'
  }
];

const initialLoad = () => {
  const userList = localStorage.getItem('users');
  if (userList) users = JSON.parse(userList);
  else localStorage.setItem('users', JSON.stringify(users));

  const mechanicList = localStorage.getItem('mechanics');
  if (mechanicList) mechanics = JSON.parse(mechanicList);
  else localStorage.setItem('mechanics', JSON.stringify(mechanics));

  const requestList = localStorage.getItem('requests');
  if (requestList) requests = JSON.parse(requestList);
  else localStorage.setItem('requests', JSON.stringify(requests));
};

const getAllMechanics = () => {
  const mechanicList = localStorage.getItem('mechanics');
  if (mechanicList) {
    mechanics = JSON.parse(mechanicList);
    return mechanics;
  }
  mechanics = [];
  return [];
};

const addUser = (user: User) => {
  user = { ...user, id: users.length + 1 };
  users = [...users, user];
  localStorage.setItem('users', JSON.stringify(users));
};

const addMechanic = (mechanic: MechanicType) => {
  mechanic = { ...mechanic, id: mechanics.length + 1 };
  mechanics = [...mechanics, mechanic];
  localStorage.setItem('mechanics', JSON.stringify(mechanics));
};

const addRequest = (request: RequestType) => {
  requests = [...requests, request];
  localStorage.setItem('requests', JSON.stringify(requests));
};

const verifyUser = (email: string, password: string) => {
  const user = users.find((x) => x.email == email);
  console.log(user);
  if (user?.password === password) {
    localStorage.setItem('currentUser', JSON.stringify(user.id));
    localStorage.setItem('userType', 'User');
    return true;
  }
  return false;
};

const verifyMechanic = (email: string, password: string) => {
  const mechanic = mechanics.find((x) => x.email == email);
  if (mechanic?.password === password) {
    localStorage.setItem('currentMechanic', JSON.stringify(mechanic.id));
    localStorage.setItem('userType', 'Mechanic');
    return true;
  }
  return false;
};

const getUserType = () => {
  return localStorage.getItem('userType');
};

const getCurrentUser = () => {
  const userType = getUserType();

  if (userType === 'User') {
    const userId = localStorage.getItem('currentUser');
    return userId ? JSON.parse(userId) : 0;
  } else {
    const userId = localStorage.getItem('currentMechanic');
    return userId ? JSON.parse(userId) : 0;
  }
};

const logout = () => {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentMechanic');
  localStorage.removeItem('userType');
};

const getRequests = () => {
  const requestList = localStorage.getItem('requests');
  if (requestList) {
    requests = JSON.parse(requestList);

    const userId = getCurrentUser();

    return requests.filter((x) => x.mechanicId === userId);
  }
  requests = [];
  return [];
};

export {
  initialLoad,
  getAllMechanics,
  addUser,
  addMechanic,
  addRequest,
  verifyMechanic,
  verifyUser,
  logout,
  getUserType,
  getCurrentUser,
  getRequests
};
