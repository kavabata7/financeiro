package br.com.munif.financeiro.repositorio;

import br.com.munif.financeiro.entidades.Titulo;
import br.com.munif.financeiro.util.Persistencia;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

public class TituloRepositorio extends SuperEntidadeRepositorio<Titulo> {

    public TituloRepositorio() {
        super(Titulo.class);
    }

    @Override
    public List<Titulo> consultar() {
        EntityManager em = Persistencia.getInstancia().getEntityManager();
        Query consulta = em.createQuery("from Titulo");
        return consulta.getResultList();
    }
}
