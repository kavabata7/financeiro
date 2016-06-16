package br.com.munif.financeiro.entidades;

import br.com.munif.financeiro.util.SuperEntidade;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;

@Entity
public class MovimentoCaixa extends SuperEntidade {

    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
    private Date quando;

    private BigDecimal valor;
    
    @ManyToOne
    private Caixa caixa;
    
    @OneToOne
    private MovimentoCaixa outro;
    
    @ManyToOne
    private Pagamento pagamento;

    private Boolean realizado;

    private String historico;

    @Enumerated(EnumType.STRING)
    private Natureza natureza;

    public MovimentoCaixa() {
    }

    public Natureza getNatureza() {
        return natureza;
    }

    public void setNatureza(Natureza natureza) {
        this.natureza = natureza;
    }

    public Boolean getRealizado() {
        return realizado;
    }

    public void setRealizado(Boolean realizado) {
        this.realizado = realizado;
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

    public Caixa getCaixa() {
        return caixa;
    }

    public void setCaixa(Caixa caixa) {
        this.caixa = caixa;
    }

    public MovimentoCaixa getOutro() {
        return outro;
    }

    public void setOutro(MovimentoCaixa outro) {
        this.outro = outro;
    }

    public Pagamento getPagamento() {
        return pagamento;
    }

    public void setPagamento(Pagamento pagamento) {
        this.pagamento = pagamento;
    }

    public String getHistorico() {
        return historico;
    }

    public void setHistorico(String historico) {
        this.historico = historico;
    }

}
