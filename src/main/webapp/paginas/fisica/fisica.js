angular.module('app.fisica', [])
        .controller('FisicaController', function ($scope, FisicaService, $state, entidade) {
            $scope.entidade = entidade.data || {};

            $scope.salvar = function (entidade) {
                FisicaService.salvar(entidade)
                        .then(function (resposta) {
                            if (resposta.status == 200) {
                                $state.go('fisicalistagem')
                            }
                        })
            }

        })
        .controller('FisicaListarController', function ($scope, FisicaService) {

            $scope.remover = function (id) {
                FisicaService.remover(id)
                        .then(function (resposta) {
                            if (resposta.status == 200) {
                                $scope.listar();
                            } else {
                                alert('Erro ao remover');
                            }
                        })
            }

            $scope.listar = function () {
                FisicaService.buscar()
                        .then(function (resposta) {
                            $scope.dados = resposta.data;
                        })
            }

            $scope.listar();

        })
        .service('FisicaService', function ($http) {
            var url = location.origin + '/financeiro/api/fisica'

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
