package br.com.munif.financeiro.entidades;

import br.com.munif.financeiro.util.SuperEntidade;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Titulo extends SuperEntidade {

    @Temporal(TemporalType.DATE)
    private Date dataVencimento;

    @ManyToOne
    private Pessoa pessoa;

    private BigDecimal valor;

    @Enumerated(EnumType.STRING)
    private TipoTitulo tipo;

    @ManyToMany
    private Set<Categoria> categorias;

    public Titulo() {
        categorias = new HashSet<>();
        dataVencimento = new Date();
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public Set<Categoria> getCategorias() {
        return categorias;
    }

    public void setCategorias(Set<Categoria> categorias) {
        this.categorias = categorias;
    }

    public TipoTitulo getTipo() {
        return tipo;
    }

    public void setTipo(TipoTitulo tipo) {
        this.tipo = tipo;
    }

    public Date getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(Date dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

}
