package br.com.munif.financeiro.api;

import br.com.munif.financeiro.negocio.SuperEntidadeService;
import br.com.munif.financeiro.util.Erro;
import br.com.munif.financeiro.util.SuperEntidade;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public abstract class SuperEntidadeApi<T extends SuperEntidade> extends HttpServlet {

    public abstract Class<T> getClasse();

    private SuperEntidadeService<T> servico;

    private ObjectMapper mapper;

    protected String[] getUrlParameters(HttpServletRequest request) {
        String url = this.getServletContext().getContextPath() + this.getClass().getAnnotation(WebServlet.class).urlPatterns()[0].replace("/*", "").trim();
        String paramters = request.getRequestURI().replaceFirst(url, "");
        paramters = paramters.replaceFirst("/", "");
        if (paramters.isEmpty()) {
            return new String[0];
        }
        return paramters.split("/");
    }

    protected SuperEntidadeService<T> getServico() {
        return new SuperEntidadeService<>(getClasse());
    }

    public SuperEntidadeApi() {
        this.servico = getServico();
        mapper = new ObjectMapper();

    }

    @Override
    protected void doGet(HttpServletRequest requisicao, HttpServletResponse resposta) throws ServletException, IOException {
        resposta.setContentType("application/json;charset=UTF-8");
        String parametros[] = getUrlParameters(requisicao);
        if (parametros.length == 0) {
            mapper.writeValue(resposta.getOutputStream(), servico.consultar());
        } else if (parametros.length == 1) {
            Long id = Long.parseLong(parametros[0]);
            mapper.writeValue(resposta.getOutputStream(), servico.consultar(id));
        } else {
            resposta.setStatus(400);
            mapper.writeValue(resposta.getOutputStream(), new Erro("Número de parâmetros inválido"));
        }
    }

    @Override
    protected void doDelete(HttpServletRequest requisicao, HttpServletResponse resposta) throws ServletException, IOException {
        resposta.setContentType("application/json;charset=UTF-8");
        String parametros[] = getUrlParameters(requisicao);
        if (parametros.length == 0) {
            resposta.setStatus(400);
            mapper.writeValue(resposta.getOutputStream(), new Erro("Método para apagar todos não foi implementado"));
        } else if (parametros.length == 1) {
            Long id = Long.parseLong(parametros[0]);
            T objeto = servico.consultar(id);
            servico.excluir(objeto);
            mapper.writeValue(resposta.getOutputStream(), objeto);
        } else {
            resposta.setStatus(400);
            mapper.writeValue(resposta.getOutputStream(), new Erro("Número de parâmetros inválido"));
        }
    }

    @Override
    protected void doPut(HttpServletRequest requisicao, HttpServletResponse resposta) throws ServletException, IOException {
        resposta.setContentType("application/json;charset=UTF-8");
        String parametros[] = getUrlParameters(requisicao);
        if (parametros.length == 0) {
            resposta.setStatus(400);
            mapper.writeValue(resposta.getOutputStream(), new Erro("Método para apagar todos não foi implementado"));
        } else if (parametros.length == 1) {
            T objeto = mapper.readValue(requisicao.getInputStream(), getClasse());
            objeto.setCodigo(Long.parseLong(parametros[0]));
            servico.salvar(objeto);
            mapper.writeValue(resposta.getOutputStream(), objeto);
        } else {
            resposta.setStatus(400);
            mapper.writeValue(resposta.getOutputStream(), new Erro("Número de parâmetros inválido"));
        }
    }

    @Override
    protected void doPost(HttpServletRequest requisicao, HttpServletResponse resposta) throws ServletException, IOException {
        resposta.setContentType("application/json;charset=UTF-8");
        String parametros[] = getUrlParameters(requisicao);
        if (parametros.length == 0) {
            T objeto = mapper.readValue(requisicao.getInputStream(), getClasse());
            servico.salvar(objeto);
            mapper.writeValue(resposta.getOutputStream(), objeto);
        } else {
            resposta.setStatus(400);
            mapper.writeValue(resposta.getOutputStream(), new Erro("Número de parâmetros inválido"));
        }
    }

}
