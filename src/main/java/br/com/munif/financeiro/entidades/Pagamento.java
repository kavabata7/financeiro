package br.com.munif.financeiro.entidades;

import br.com.munif.financeiro.util.SuperEntidade;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;

@Entity
public class Pagamento extends SuperEntidade {

    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    private Date quando;

    private BigDecimal valor;

    @ManyToOne
    private Titulo titulo;

    @ManyToOne
    private FormaPagamento formaPagamento;

    public Pagamento() {
    }

    public FormaPagamento getFormaPagamento() {
        return formaPagamento;
    }

    public void setFormaPagamento(FormaPagamento formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public Date getQuando() {
        return quando;
    }

    public void setQuando(Date quando) {
        this.quando = quando;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public Titulo getTitulo() {
        return titulo;
    }

    public void setTitulo(Titulo titulo) {
        this.titulo = titulo;
    }

}
