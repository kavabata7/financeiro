package br.com.munif.financeiro.api;

import br.com.munif.financeiro.entidades.Pagamento;
import javax.servlet.annotation.WebServlet;

@WebServlet(name = "PagamentoApi", urlPatterns = "/api/pagamento/*")
public class PagamentoApi extends SuperEntidadeApi<Pagamento> {

    @Override
    public Class<Pagamento> getClasse() {
        return Pagamento.class;
    }

}
