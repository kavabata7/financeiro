angular.module('app.titulo', [])
        .controller('TituloController', function($scope, TituloService, $state, entidade, PessoaService, TipoTituloService, CategoriaService) {
            $scope.entidade = entidade.data || {};

            PessoaService.buscar()
                    .then(function(response) {
                        $scope.pessoas = response.data;
                        console.log($scope.pessoas)
                    })
            TipoTituloService.buscar()
                    .then(function(response) {
                        $scope.tipoTitulos = response.data;
                        console.log($scope.tipoTitulos)
                    })
            CategoriaService.buscar()
                    .then(function(response) {
                        $scope.categorias = response.data;
                        console.log($scope.categorias)
                    })

            $scope.salvar = function(entidade) {
                TituloService.salvar(entidade)
                        .then(function(resposta) {
                            if (resposta.status == 200) {
                                $state.go('titulolistagem')
                            }
                        })
            }

        })
        .controller('TituloListarController', function($scope, TituloService) {

            $scope.remover = function(id) {
                TituloService.remover(id)
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
                TituloService.buscar()
                        .then(function(resposta) {
                            $scope.dados = resposta.data;
                        })
            }

            $scope.listar();

        })
        .service('TituloService', function($http) {
            var url = location.origin + '/financeiro/api/titulo'

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