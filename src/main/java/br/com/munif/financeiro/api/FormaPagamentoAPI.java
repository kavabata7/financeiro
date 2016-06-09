package br.com.munif.financeiro.api;

import br.com.munif.financeiro.entidades.FormaPagamento;
import javax.servlet.annotation.WebServlet;

@WebServlet(name = "FormaPagamentoApi", urlPatterns = {"/api/formapagamento/*"})
public class FormaPagamentoAPI extends SuperEntidadeApi<FormaPagamento> {

    @Override
    public Class<FormaPagamento> getClasse() {
        return FormaPagamento.class;
    }
}
