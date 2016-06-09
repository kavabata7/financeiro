package br.com.munif.financeiro.repositorio;

import br.com.munif.financeiro.entidades.Juridica;
import br.com.munif.financeiro.util.Persistencia;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

public class JuridicaRepositorio extends SuperEntidadeRepositorio<Juridica> {

    public JuridicaRepositorio() {
        super(Juridica.class);
    }

    @Override
    public List<Juridica> consultar() {
        EntityManager em = Persistencia.getInstancia().getEntityManager();
        Query consulta = em.createQuery("from Juridica");
        return consulta.getResultList();
    }
}
