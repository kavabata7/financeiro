package br.com.munif.financeiro.util;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Persistencia {

    private static Persistencia instancia = new Persistencia();

    public static Persistencia getInstancia() {
        return instancia;
    }

    private final EntityManagerFactory entityManagerFactory;

    private ThreadLocal<EntityManager> tlem;

    private Persistencia() {
        entityManagerFactory = Persistence.createEntityManagerFactory("financeiroPU");
        tlem = new ThreadLocal<>();
    }

    public EntityManager getEntityManager() {
        if (tlem.get() == null) {
            tlem.set(entityManagerFactory.createEntityManager());
        }
        return tlem.get();
    }

    public void encerra() {
        entityManagerFactory.close();
    }

    public void closeEntityManager() {
        if (tlem.get() != null) {
            if (tlem.get().isOpen()) {
                tlem.get().close();
            }
            tlem.set(null);
        }
    }

}
