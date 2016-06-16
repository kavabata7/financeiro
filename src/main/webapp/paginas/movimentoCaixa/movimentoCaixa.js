angular.module('app.movimentoCaixa', [])
        .controller('MovimentoCaixaController', function($scope, MovimentoCaixaService, $state, entidade, CaixaService, FormaPagamentoService, NaturezaService) {
            $scope.entidade = entidade.data || {};


            CaixaService.buscar()
                    .then(function(response) {
                        $scope.caixas = response.data;
                        console.log($scope.caixas)
                    })

            NaturezaService.buscar()
                    .then(function(response) {
                        $scope.naturezas = response.data;
                        console.log($scope.naturezas)
                    })

            FormaPagamentoService.buscar()
                    .then(function(response) {
                        $scope.formaPagamentos = response.data;
                        console.log($scope.formaPagamentos)
                    })

            $scope.salvar = function(entidade) {
                MovimentoCaixaService.salvar(entidade)
                        .then(function(resposta) {
                            if (resposta.status == 200) {
                                $state.go('movimentoCaixalistagem')
                            }
                        })
            }

        })
        .controller('MovimentoCaixaListarController', function($scope, MovimentoCaixaService) {

            $scope.remover = function(id) {
                MovimentoCaixaService.remover(id)
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
                MovimentoCaixaService.buscar()
                        .then(function(resposta) {
                            $scope.dados = resposta.data;
                        })
            }

            $scope.listar();

        })
        .service('MovimentoCaixaService', function($http) {
            var url = location.origin + '/financeiro/api/movimentoCaixa'

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