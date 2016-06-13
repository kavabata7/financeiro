angular.module('app.saldo', [])
        .controller('SaldoController', function ($scope, SaldoService, $state, entidade, CaixaService) {
            $scope.entidade = entidade.data || {};

            CaixaService.buscar()
                    .then(function (response){
                        $scope.caixas = response.data;
                        console.log($scope.caixas)
                    })
            

            $scope.salvar = function (entidade) {
                SaldoService.salvar(entidade)
                        .then(function (resposta) {
                            if (resposta.status == 200) {
                                $state.go('saldolistagem')
                            }
                        })
            }

        })
        .controller('SaldoListarController', function ($scope, SaldoService) {

            $scope.remover = function (id) {
                SaldoService.remover(id)
                        .then(function (resposta) {
                            console.log(resposta)
                            if (resposta.status == 200) {
                                $scope.listar();
                            } else {
                                alert('Erro ao excluir');
                            }
                        })
            }

            $scope.listar = function () {
                SaldoService.buscar()
                        .then(function (resposta) {
                            $scope.dados = resposta.data;
                        })
            }

            $scope.listar();

        })
        .service('SaldoService', function ($http) {
            var url = location.origin + '/financeiro/api/saldo'

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