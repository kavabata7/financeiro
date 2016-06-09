package br.com.munif.financeiro.entidades;

import br.com.munif.financeiro.util.SuperEntidade;
import javax.persistence.Entity;

@Entity
public class Caixa extends SuperEntidade {

    private String nome;

    public Caixa() {
        nome = "Novo caixa";
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String novoNome) {
        if (novoNome.length() > 2) {
            this.nome = novoNome;
        } else {
            throw new RuntimeException("Nome pequeno");
        }
    }

}
