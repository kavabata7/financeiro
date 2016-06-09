angular.module('app.caixa', [])
        .controller('CaixaController', function ($scope, CaixaService, $state, entidade) {
            $scope.entidade = entidade.data || {};

            $scope.salvar = function (entidade) {
                CaixaService.salvar(entidade)
                        .then(function (resposta) {
                            if (resposta.status == 200) {
                                $state.go('caixalistagem')
                            }
                        })
            }

        })
        .controller('CaixaListarController', function ($scope, CaixaService) {

            $scope.remover = function (id) {
                CaixaService.remover(id)
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
                CaixaService.buscar()
                        .then(function (resposta) {
                            $scope.dados = resposta.data;
                        })
            }
            console.log("Listou!!!!")
            $scope.listar();


        })
        .service('CaixaService', function ($http) {
            var url = location.origin + '/financeiro/api/caixa'

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