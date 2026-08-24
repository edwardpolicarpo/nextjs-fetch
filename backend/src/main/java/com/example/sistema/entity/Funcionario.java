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
  private String name;
  @NotBlank
  @Email
  private String email;
  @Size(max = 15)
  private String phone;
  @NotBlank
  private String role;
  private String department;
  private Double salary;
  private String city;
  private Status status;
}
