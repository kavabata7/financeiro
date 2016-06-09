package br.com.munif.financeiro.api;

import br.com.munif.financeiro.entidades.Caixa;

import javax.servlet.annotation.WebServlet;

@WebServlet(name = "CaixaApi", urlPatterns = {"/api/caixa/*"})
public class CaixaApi extends SuperEntidadeApi<Caixa> {

    @Override
    public Class<Caixa> getClasse() {
        return Caixa.class;
    }

}
