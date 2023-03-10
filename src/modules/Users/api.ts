import { User } from './types';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getUsers = async (): Promise<TableDataResponse<User>> => {
  await timeout(200);
  return {
    count: 1,
    query: [
      {
        id: 'b7dcc6d4-8ed3-49de-c1f7-08db13590984',
        firstName: 'Maxim',
        lastName: 'Greenberg',
        userStatus: 'active',
        createdDateUtc: '2023-02-20T15:42:13.6494747',
        lastLoginDateUtc: null,
        email: 'mnik01@mail.ru',
        role: 'admin',
        department: 'tech',
        jobTitle: 'lead',
        fullName: 'Maxim Greenberg',
        deactivationDateTimeUtc: null,
        reactivationDateTimeUtc: null,
      },
      {
        id: '491eaa3d-66ca-4f76-a5fc-8eb26326ad77',
        firstName: 'Peter',
        lastName: 'Parker',
        userStatus: 'active',
        createdDateUtc: '2023-01-27T08:25:23.4266667',
        lastLoginDateUtc: '2023-02-24T15:18:20.964525',
        email: 'peter.parker@ctitaxbeacon.onmicrosoft.com',
        role: 'admin',
        department: 'tech',
        jobTitle: 'developer',
        fullName: 'Peter Parker',
        deactivationDateTimeUtc: null,
        reactivationDateTimeUtc: null,
      },
      {
        id: '9361e389-d839-4654-a12f-513e8209f9dd',
        firstName: 'Samantha',
        lastName: 'Power',
        userStatus: 'active',
        createdDateUtc: '2023-01-27T08:25:23.4266667',
        lastLoginDateUtc: '2023-02-20T21:08:26.2216465',
        email: 'samantha.power@ctitaxbeacon.onmicrosoft.com ',
        role: 'admin',
        department: 'tech',
        jobTitle: 'developer',
        fullName: 'Samantha Power',
        deactivationDateTimeUtc: null,
        reactivationDateTimeUtc: null,
      },
      {
        id: 'd7316723-daf0-4dd9-a50e-cfb27e6b2ae5',
        firstName: 'Scooby-',
        lastName: 'Doo',
        userStatus: 'active',
        createdDateUtc: '2023-02-07T16:20:55.8733333',
        lastLoginDateUtc: null,
        email: 'scooby-doo@email.com',
        role: 'admin',
        department: 'tech',
        jobTitle: 'developer',
        fullName: 'Scooby- Doo',
        deactivationDateTimeUtc: null,
        reactivationDateTimeUtc: null,
      },
      {
        id: '83b5ccf2-6049-4574-aadb-08db13f11475',
        firstName: 'fs',
        lastName: 'sdf',
        userStatus: 'active',
        createdDateUtc: '2023-02-21T09:50:35.5236725',
        lastLoginDateUtc: null,
        email: 'sdf@fd.fgd',
        role: 'admin',
        department: 'tech',
        jobTitle: 'developer',
        fullName: 'fs sdf',
        deactivationDateTimeUtc: null,
        reactivationDateTimeUtc: null,
      },
      {
        id: '67bd3446-3927-4406-735d-08db15b815a2',
        firstName: 'wrw',
        lastName: 'wer',
        userStatus: 'active',
        createdDateUtc: '2023-02-24T08:32:31.2164543',
        lastLoginDateUtc: null,
        email: 'sdf@fd.sd',
        role: 'admin',
        department: 'tech',
        jobTitle: 'developer',
        fullName: 'wrw wer',
        deactivationDateTimeUtc: null,
        reactivationDateTimeUtc: null,
      },
      {
        id: 'd82ad6f8-8933-4582-8810-9bb3dc4e5940',
        firstName: 'Simon',
        lastName: 'Hurt',
        userStatus: 'active',
        createdDateUtc: '2023-01-27T08:25:23.4266667',
        lastLoginDateUtc: '2023-01-31T09:34:36.7214447',
        email: 'simon.hurt@ctitaxbeacon.onmicrosoft.com',
        role: 'admin',
        department: 'tech',
        jobTitle: 'developer',
        fullName: 'Simon Hurt',
        deactivationDateTimeUtc: null,
        reactivationDateTimeUtc: null,
      },
      {
        id: 'ce41e956-628b-40a0-9b9e-2f6e34a49118',
        firstName: 'Tom and',
        lastName: 'Jerry',
        userStatus: 'active',
        createdDateUtc: '2023-02-07T16:23:49.6566667',
        lastLoginDateUtc: null,
        email: 'tomandJerry@email.com',
        role: 'admin',
        department: 'tech',
        jobTitle: 'developer',
        fullName: 'Tom and Jerry',
        deactivationDateTimeUtc: null,
        reactivationDateTimeUtc: null,
      },
    ],
  };
};
