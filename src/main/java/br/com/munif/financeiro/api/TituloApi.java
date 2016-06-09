package br.com.munif.financeiro.api;

import br.com.munif.financeiro.entidades.Titulo;
import javax.servlet.annotation.WebServlet;

@WebServlet(name = "TituloApi", urlPatterns = {"/api/titulo/*"})
public class TituloApi extends SuperEntidadeApi<Titulo> {

    @Override
    public Class<Titulo> getClasse() {
        return Titulo.class;
    }

}
