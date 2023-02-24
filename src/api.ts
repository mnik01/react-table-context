function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getUsers = async () => {
  await timeout(200);
  return {
    count: 1,
    query: [
      {
        id: '0c6a36ba-10e4-438f-ba86-0d5b68a2bb15',
        firstName: 'Bugs',
        lastName: 'Bunny',
        userStatus: 'Active',
        createdDateUtc: '2023-01-27T08:25:23.4266667',
        lastLoginDateUtc: null,
        email: 'bugs.bunny@email.com',
        role: null,
        department: null,
        jobTitle: null,
        fullName: 'Bugs Bunny',
        deactivationDateTimeUtc: null,
        reactivationDateTimeUtc: '2023-02-24T07:54:07.4100394',
      },
    ],
  };
};
