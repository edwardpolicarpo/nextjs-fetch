package com.example.sistema.dto;

import com.example.sistema.entity.Status;
import lombok.Data;

@Data
public class UpdateFuncionarioDTO {
  private String cargo;
  private Status status;
  private Double salario;
}
