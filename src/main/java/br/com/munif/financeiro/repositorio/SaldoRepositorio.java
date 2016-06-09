package br.com.munif.financeiro.repositorio;

import br.com.munif.financeiro.entidades.Saldo;
import br.com.munif.financeiro.util.Persistencia;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

public class SaldoRepositorio extends SuperEntidadeRepositorio<Saldo> {

    public SaldoRepositorio() {
        super(Saldo.class);
    }

    @Override
    public List<Saldo> consultar() {
        EntityManager em = Persistencia.getInstancia().getEntityManager();
        Query consulta = em.createQuery("from Saldo");
        return consulta.getResultList();
    }
}
