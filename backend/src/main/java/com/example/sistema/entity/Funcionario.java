package com.example.sistema.entity;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Funcionario {
  private Long id;
  @NotBlank
  private String nome;
  @NotBlank
  @Email
  private String email;
  @Size(max = 15)
  private String telefone;
  @NotBlank
  private String cargo;
  private String departamento;
  private Double salario;
  private String cidade;
  private Status status;
}
