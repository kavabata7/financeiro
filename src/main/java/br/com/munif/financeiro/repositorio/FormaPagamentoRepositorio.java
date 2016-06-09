package br.com.munif.financeiro.repositorio;

import br.com.munif.financeiro.entidades.FormaPagamento;
import br.com.munif.financeiro.util.Persistencia;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

public class FormaPagamentoRepositorio extends SuperEntidadeRepositorio<FormaPagamento> {

    public FormaPagamentoRepositorio() {
        super(FormaPagamento.class);
    }

    @Override
    public List<FormaPagamento> consultar() {
        EntityManager em = Persistencia.getInstancia().getEntityManager();
        Query consulta = em.createQuery("from FormaPagamento");
        return consulta.getResultList();
    }
}
