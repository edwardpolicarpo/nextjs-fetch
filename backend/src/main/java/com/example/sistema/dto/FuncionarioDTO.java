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
