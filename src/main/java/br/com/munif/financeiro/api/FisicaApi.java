package br.com.munif.financeiro.api;

import br.com.munif.financeiro.entidades.Fisica;
import javax.servlet.annotation.WebServlet;

@WebServlet(name = "FisicaApi", urlPatterns = {"/api/fisica/*"})
public class FisicaApi extends SuperEntidadeApi<Fisica> {

    @Override
    public Class<Fisica> getClasse() {
        return Fisica.class;
    }

}
