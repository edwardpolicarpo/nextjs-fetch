import { Employee } from './definitions';
import { api } from './api';

export async function fetchEmployeesPages(
  query: string,
) {
  try {
    const response = await api.get<number>(`/funcionarios/count?search=${query}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch employees');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredEmployees(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const response = await api.get<Employee[]>(`/funcionarios?search=${query}&offset=${offset}&limit=${ITEMS_PER_PAGE}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch employees');
  }
}

export async function fetchEmployeeById(id: string) {
  try {
    const response = await api.get<Employee>(`/funcionarios/${id}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch employee');
  }
}
