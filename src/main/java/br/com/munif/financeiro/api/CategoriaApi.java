package br.com.munif.financeiro.api;

import br.com.munif.financeiro.entidades.Categoria;
import javax.servlet.annotation.WebServlet;

@WebServlet(name = "CategoriaApi", urlPatterns = {"/api/categoria/*"})
public class CategoriaApi extends SuperEntidadeApi<Categoria> {

    @Override
    public Class<Categoria> getClasse() {
        return Categoria.class;
    }

}
