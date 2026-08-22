export type Employee = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  city: string;
  salary: number;
  status: 'em analise' | 'aprovado' | 'reprovado' | 'contratado';
}

export type EmployeeForm = {
  id: string;
  role: string;
  salary: number;
  status: 'em analise' | 'aprovado' | 'reprovado' | 'contratado';
}
