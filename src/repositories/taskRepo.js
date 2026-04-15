import prisma from '../config/db.js';

export async function findAll(filters = {}) {
  const where = {};

  if (filters.completed === true || filters.completed === 'true') {
    where.completed = true;
  }

  if (filters.completed === false || filters.completed === 'false') {
    where.completed = false;
  }

  return prisma.task.findMany({ where });
}

export async function create(data) {
  return prisma.task.create({
    data,
  });
}
