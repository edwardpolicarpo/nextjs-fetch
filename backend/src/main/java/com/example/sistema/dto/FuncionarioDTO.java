package com.example.sistema.dto;

import com.example.sistema.entity.Status;

import jakarta.validation.constraints.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FuncionarioDTO {
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
