angular.module('app.pagamento', [])
        .controller('PagamentoController', function($scope, PagamentoService, $state, entidade, TituloService, FormaPagamentoService) {
            $scope.entidade = entidade.data || {};


            TituloService.buscar()
                    .then(function(response) {
                        $scope.titulos = response.data;
                        console.log($scope.titulos)
                    })

            FormaPagamentoService.buscar()
                    .then(function(response) {
                        $scope.formaPagamentos = response.data;
                        console.log($scope.formaPagamentos)
                    })


            $scope.salvar = function(entidade) {
                PagamentoService.salvar(entidade)
                        .then(function(resposta) {
                            if (resposta.status == 200) {
                                $state.go('pagamentolistagem')
                            }
                        })
            }

        })
        .controller('PagamentoListarController', function($scope, PagamentoService) {

            $scope.remover = function(id) {
                PagamentoService.remover(id)
                        .then(function(resposta) {
                            console.log(resposta)
                            if (resposta.status == 200) {
                                $scope.listar();
                            } else {
                                alert('Erro ao excluir');
                            }
                        })
            }

            $scope.listar = function() {
                PagamentoService.buscar()
                        .then(function(resposta) {
                            $scope.dados = resposta.data;
                        })
            }

            $scope.listar();

        })
        .service('PagamentoService', function($http) {
            var url = location.origin + '/financeiro/api/pagamento'

            this.salvar = function(entidade) {
                if (entidade.codigo) {
                    return $http.put(url.concat('/' + entidade.codigo), entidade);
                } else {
                    return $http.post(url, entidade);
                }
            }

            this.buscar = function() {
                return $http.get(url);
            }

            this.remover = function(id) {
                return $http.delete(url.concat('/' + id));
            }

        })