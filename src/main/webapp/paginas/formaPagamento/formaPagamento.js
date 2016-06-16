angular.module('app.formaPagamento', [])
        .controller('FormaPagamentoController', function ($scope, FormaPagamentoService, $state, entidade) {
            $scope.entidade = entidade.data || {};

            $scope.salvar = function (entidade) {
                FormaPagamentoService.salvar(entidade)
                        .then(function (resposta) {
                            if (resposta.status == 200) {
                                $state.go('formaPagamentolistagem')
                            }
                        })
            }

        })
        .controller('FormaPagamentoListarController', function ($scope, FormaPagamentoService) {

            $scope.remover = function (id) {
                FormaPagamentoService.remover(id)
                        .then(function (resposta) {
                            console.log(resposta)
                            if (resposta.status == 200) {
                                $scope.listar();
                            } else {
                                alert('Erro ao remover');
                            }
                        })
            }

            $scope.listar = function () {
                FormaPagamentoService.buscar()
                        .then(function (resposta) {
                            $scope.dados = resposta.data;
                        })
            }
            console.log("Listou!!!!")
            $scope.listar();


        })
        .service('FormaPagamentoService', function ($http) {
            var url = location.origin + '/financeiro/api/formaPagamento'

            this.salvar = function (entidade) {
                if (entidade.codigo) {
                    return $http.put(url.concat('/' + entidade.codigo), entidade);
                } else {
                    return $http.post(url, entidade);
                }
            }

            this.buscar = function () {
                return $http.get(url);
            }

            this.remover = function (id) {
                return $http.delete(url.concat('/' + id));
            }

        })