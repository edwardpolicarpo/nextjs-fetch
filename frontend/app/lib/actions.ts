"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { api } from "./api";

const employeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
  phone: z.string(),
  role: z.string(),
  department: z.string(),
  city: z.string(),
  salary: z.coerce.number(),
  status: z.enum(["EM_ANALISE", "APROVADO", "REPROVADO", "CONTRATADO"]),
});

const employeeCreateSchema = employeeSchema.omit({ id: true });
const employeeUpdateSchema = employeeSchema.pick({
  role: true,
  salary: true,
  status: true,
});

export async function createEmployee(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsedData = employeeCreateSchema.parse(data);

  try {
    await api.post("/funcionarios", parsedData);
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to Create Employee");
  }

  revalidatePath("/");
  redirect("/");
}

export async function updatePutEmployee(id: string, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsedData = employeeUpdateSchema.parse(data);

  try {
    await api.put(`/funcionarios/${id}`, parsedData);
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to Update Employee");
  }

  revalidatePath("/");
  redirect("/");
}

export async function updatePatchEmployee(id: string, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsedData = employeeUpdateSchema.parse(data);

  try {
    await api.patch(`/funcionarios/${id}`, parsedData);
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to Update Employee");
  }

  revalidatePath("/");
  redirect("/");
}

export async function deleteEmployee(id: string) {
  try {
    await api.delete(`/funcionarios/${id}`);
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to Delete Employee");
  }

  revalidatePath("/");
}
