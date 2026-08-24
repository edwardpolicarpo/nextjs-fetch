export type Employee = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  city: string;
  salary: number;
  status: "EM_ANALISE" | "APROVADO" | "REPROVADO" | "CONTRATADO";
};

export type EmployeeForm = {
  id: string;
  role: string;
  salary: number;
  status: "EM_ANALISE" | "APROVADO" | "REPROVADO" | "CONTRATADO";
};
