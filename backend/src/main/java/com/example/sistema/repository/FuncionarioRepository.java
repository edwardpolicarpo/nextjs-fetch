package com.example.sistema.repository;

import com.example.sistema.entity.Funcionario;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Repository;

@Repository
public class FuncionarioRepository {

    private final Map<Long, Funcionario> database = new ConcurrentHashMap<>();
    private final AtomicLong contadorId = new AtomicLong(1);

    public Funcionario save(Funcionario funcionario) {
        if (funcionario.getId() == null) {
            funcionario.setId(contadorId.getAndIncrement());
        }
        database.put(funcionario.getId(), funcionario);
        return funcionario;
    }

    public Optional<Funcionario> findById(Long id) {
        return Optional.ofNullable(database.get(id));
    }

    public List<Funcionario> findAll() {
        return new ArrayList<>(database.values());
    }

    public void deleteById(Long id) {
        database.remove(id);
    }
}
