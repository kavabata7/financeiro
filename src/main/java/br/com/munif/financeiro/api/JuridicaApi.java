package br.com.munif.financeiro.api;

import br.com.munif.financeiro.entidades.Juridica;
import javax.servlet.annotation.WebServlet;

@WebServlet(name = "JuridicaApi", urlPatterns = {"/api/juridica/*"})
public class JuridicaApi extends SuperEntidadeApi<Juridica> {

    @Override
    public Class<Juridica> getClasse() {
        return Juridica.class;
    }
}
