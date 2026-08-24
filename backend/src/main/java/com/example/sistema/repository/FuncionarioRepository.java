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

    public List<Funcionario> findAll(
            String query,
            Number offset,
            Number limit
    ) {
        int safeOffset = offset != null ? Math.max(0, offset.intValue()) : 0;
        int safeLimit = limit != null ? Math.max(1, limit.intValue()) : 10;

        String search = query == null
                ? ""
                : query.trim().toLowerCase();

        return database.values()
                .stream()
                .filter(funcionario -> matchesQuery(funcionario, search))
                .skip(safeOffset)
                .limit(safeLimit)
                .toList();
    }

    public Number count(String query) {
        String search = query == null
                ? ""
                : query.trim().toLowerCase();

        return database.values()
                .stream()
                .filter(funcionario -> matchesQuery(funcionario, search))
                .toArray().length;
    }

    private boolean matchesQuery(Funcionario funcionario, String query) {
        if (query.isBlank()) {
            return true;
        }

        return contains(funcionario.getId(), query)
                || contains(funcionario.getName(), query)
                || contains(funcionario.getEmail(), query)
                || contains(funcionario.getPhone(), query)
                || contains(funcionario.getRole(), query)
                || contains(funcionario.getDepartment(), query)
                || contains(funcionario.getSalary(), query)
                || contains(funcionario.getCity(), query)
                || contains(funcionario.getStatus(), query);
    }

    private boolean contains(Object value, String query) {
        return value != null
                && value.toString()
                .toLowerCase()
                .contains(query);
    }

    public void deleteById(Long id) {
        database.remove(id);
    }
}
