export const generateFakeProjects = (num = 12) => {
  const fakeProjects = [];
  for (let i = 1; i <= num; i++) {
    fakeProjects.push({
      id: i,
      title: `Project ${i}`,
      description: `This is project ${i}`,
      image: `https://picsum.photos/seed/${i}/200/300`,
    });
  }
  return fakeProjects;
};

export const getFakeProject = (id) => {
  return {
    id,
    title: `Project ${id}`,
    description: `This is project ${id}`,
    image: `https://picsum.photos/seed/${id}/200/300`,
  };
};
