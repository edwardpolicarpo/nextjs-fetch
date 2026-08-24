package com.example.sistema.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.sistema.dto.FuncionarioDTO;
import com.example.sistema.dto.UpdateFuncionarioDTO;
import com.example.sistema.entity.Funcionario;
import com.example.sistema.repository.FuncionarioRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FuncionarioService {

  private final FuncionarioRepository repository;

    public List<Funcionario> findAll(
            String query,
            Number offset,
            Number limit
    ) {
        return repository.findAll(
                query, offset, limit
        );
    }

    public Funcionario findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "funcionario not found"));
    }

    public Number count(String query) {
        return repository.count(query);
    }

    public Funcionario create(FuncionarioDTO dto) {

        Funcionario funcionario = Funcionario.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .phone(dto.getPhone())
                .role(dto.getRole())
                .department(dto.getDepartment())
                .salary(dto.getSalary())
                .city(dto.getCity())
                .status(dto.getStatus())
                .build();

        return repository.save(funcionario);
    }

    public Funcionario update(Long id, FuncionarioDTO dto) {
        Funcionario funcionario = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Funcionario não encontrado"));

        funcionario.setName(dto.getName());
        funcionario.setEmail(dto.getEmail());
        funcionario.setPhone(dto.getPhone());
        funcionario.setRole(dto.getRole());
        funcionario.setDepartment(dto.getDepartment());
        funcionario.setSalary(dto.getSalary());
        funcionario.setCity(dto.getCity());

        return repository.save(funcionario);
    }

    public Funcionario patch(Long id, UpdateFuncionarioDTO dto) {
        Funcionario funcionario = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Funcionario não encontrado"));

        if (dto.getCargo() != null) {
            funcionario.setRole(dto.getCargo());
        }

        if (dto.getStatus() != null) {
            funcionario.setStatus(dto.getStatus());
        }

        if (dto.getSalario() != null) {
            funcionario.setSalary(dto.getSalario());
        }

        return repository.save(funcionario);
    }

    public void delete(Long id) {
        if (!repository.findById(id).isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Funcionario não encontrado");
        }
        repository.deleteById(id);
    }
}
