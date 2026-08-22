package com.example.sistema.controller;

import lombok.*;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.sistema.dto.FuncionarioDTO;
import com.example.sistema.dto.UpdateFuncionarioDTO;
import com.example.sistema.entity.Funcionario;
import com.example.sistema.service.FuncionarioService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/funcionarios")
@RequiredArgsConstructor
public class FuncionarioController {

  private final FuncionarioService service;

    @GetMapping
    public ResponseEntity<List<Funcionario>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Funcionario> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<Funcionario> create(@Valid @RequestBody FuncionarioDTO dto) {
        Funcionario funcionario = service.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(funcionario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Funcionario> update(@PathVariable Long id, @Valid @RequestBody FuncionarioDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Funcionario> patch(@PathVariable Long id, @Valid @RequestBody UpdateFuncionarioDTO dto) {
        return ResponseEntity.ok(service.patch(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
