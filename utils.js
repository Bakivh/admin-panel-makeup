function filterByStatus(list, status) {
  return list.filter((el) => {
    return el.status === status;
  });
}
