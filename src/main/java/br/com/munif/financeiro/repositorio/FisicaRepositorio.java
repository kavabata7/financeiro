package br.com.munif.financeiro.repositorio;

import br.com.munif.financeiro.entidades.Fisica;
import br.com.munif.financeiro.util.Persistencia;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;

public class FisicaRepositorio extends SuperEntidadeRepositorio<Fisica> {

    public FisicaRepositorio() {
        super(Fisica.class);
    }

    @Override
    public List<Fisica> consultar() {
        EntityManager em = Persistencia.getInstancia().getEntityManager();
        Query consulta = em.createQuery("from Pessoa obj order obj.nome");
        return consulta.getResultList();
    }

}
