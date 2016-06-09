angular.module('sistema', ['app.home', 'app.caixa', 'app.categoria', 'app.fisica', 'app.juridica',
    'app.saldo', 'app.movimentoCaixa', 'app.formaPagamento', 'app.pagamento', 'app.titulo', 'ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('home');
            var url1 = location.origin + '/financeiro/api/caixa';
            var url2 = location.origin + '/financeiro/api/categoria';
            var url3 = location.origin + '/financeiro/api/fisica';
            var url4 = location.origin + '/financeiro/api/juridica';
            var url5 = location.origin + '/financeiro/api/saldo';
            var url6 = location.origin + '/financeiro/api/movimentoCaixa';
            var url7 = location.origin + '/financeiro/api/formaPagamento';
            var url8 = location.origin + '/financeiro/api/pagamento';
            var url9 = location.origin + '/financeiro/api/titulo';


            $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: 'paginas/home/home.html',
                        controller: 'HomeController'
                    })
                    .state('caixa', {
                        url: '/caixa',
                        templateUrl: 'paginas/caixa/caixa.html',
                        controller: 'CaixaController',
                        resolve: {
                            entidade: function () {
                                return {};
                            }
                        }
                    })
                    .state('caixalistagem', {
                        url: '/caixalistagem',
                        templateUrl: 'paginas/caixa/listar.html',
                        controller: 'CaixaListarController'
                    })
                    .state('caixaeditar', {
                        url: '/caixaeditar/:id',
                        templateUrl: 'paginas/caixa/caixa.html',
                        controller: 'CaixaController',
                        resolve: {
                            entidade: function ($http, $stateParams) {
                                return $http.get(url1.concat('/' + $stateParams.id))
                            }
                        }
                    })


                    //                CATEGORIA

                    .state('categoria', {
                        url: '/categoria',
                        templateUrl: 'paginas/categoria/categoria.html',
                        controller: 'CategoriaController',
                        resolve: {
                            entidade: function () {
                                return {};
                            }
                        }
                    })
                    .state('categorialistagem', {
                        url: '/categorialistagem',
                        templateUrl: 'paginas/categoria/listar.html',
                        controller: 'CategoriaListarController'
                    })
                    .state('categoriaeditar', {
                        url: '/categoriaeditar/:id',
                        templateUrl: 'paginas/categoria/categoria.html',
                        controller: 'CategoriaController',
                        resolve: {
                            entidade: function ($http, $stateParams) {
                                return $http.get(url2.concat('/' + $stateParams.id))
                            }
                        }
                    })

                    //                   PESSOA FISICA

                    .state('fisica', {
                        url: '/fisica',
                        templateUrl: 'paginas/fisica/fisica.html',
                        controller: 'FisicaController',
                        resolve: {
                            entidade: function () {
                                return {};
                            }
                        }
                    })
                    .state('fisicalistagem', {
                        url: '/fisicalistagem',
                        templateUrl: 'paginas/fisica/listar.html',
                        controller: 'FisicaListarController'
                    })
                    .state('fisicaeditar', {
                        url: '/fisicaeditar/:id',
                        templateUrl: 'paginas/fisica/fisica.html',
                        controller: 'FisicaController',
                        resolve: {
                            entidade: function ($http, $stateParams) {
                                return $http.get(url3.concat('/' + $stateParams.id))
                            }
                        }
                    })


                    //              PESSOA JURIDICA

                    .state('juridica', {
                        url: '/juridica',
                        templateUrl: 'paginas/juridica/juridica.html',
                        controller: 'JuridicaController',
                        resolve: {
                            entidade: function () {
                                return {};
                            }
                        }
                    })
                    .state('juridicalistagem', {
                        url: '/juridicalistagem',
                        templateUrl: 'paginas/juridica/listar.html',
                        controller: 'JuridicaListarController'
                    })
                    .state('juridicaeditar', {
                        url: '/juridicaeditar/:id',
                        templateUrl: 'paginas/juridica/juridica.html',
                        controller: 'JuridicaController',
                        resolve: {
                            entidade: function ($http, $stateParams) {
                                return $http.get(url4.concat('/' + $stateParams.id))
                            }
                        }
                    })



                    //                   SALDO

                    .state('saldo', {
                        url: '/saldo',
                        templateUrl: 'paginas/saldo/saldo.html',
                        controller: 'SaldoController',
                        resolve: {
                            entidade: function () {
                                return {};
                            }
                        }
                    })
                    .state('saldolistagem', {
                        url: '/saldolistagem',
                        templateUrl: 'paginas/saldo/listar.html',
                        controller: 'SaldoListarController'
                    })
                    .state('saldoeditar', {
                        url: '/saldoeditar/:id',
                        templateUrl: 'paginas/saldo/saldo.html',
                        controller: 'SaldoController',
                        resolve: {
                            entidade: function ($http, $stateParams) {
                                return $http.get(url5.concat('/' + $stateParams.id))
                            }
                        }
                    })

                    //                   MOVIMENTO CAIXA

                    .state('movimentoCaixa', {
                        url: '/movimentoCaixa',
                        templateUrl: 'paginas/movimentoCaixa/movimentoCaixa.html',
                        controller: 'MovimentoCaixaController',
                        resolve: {
                            entidade: function () {
                                return {};
                            }
                        }
                    })
                    .state('movimentoCaixalistagem', {
                        url: '/movimentoCaixalistagem',
                        templateUrl: 'paginas/movimentoCaixa/listar.html',
                        controller: 'MovimentoCaixaListarController'
                    })
                    .state('movimentoCaixaeditar', {
                        url: '/movimentoCaixaeditar/:id',
                        templateUrl: 'paginas/movimentoCaixa/movimentoCaixa.html',
                        controller: 'MovimentoCaixaController',
                        resolve: {
                            entidade: function ($http, $stateParams) {
                                return $http.get(url6.concat('/' + $stateParams.id))
                            }
                        }
                    })

                    //                   FORMA PAGAMENTO

                    .state('formaPagamento', {
                        url: '/formaPagamento',
                        templateUrl: 'paginas/formaPagamento/formaPagamento.html',
                        controller: 'FormaPagamentoController',
                        resolve: {
                            entidade: function () {
                                return {};
                            }
                        }
                    })
                    .state('formaPagamentolistagem', {
                        url: '/formaPagamentolistagem',
                        templateUrl: 'paginas/formaPagamento/listar.html',
                        controller: 'FormaPagamentoListarController'
                    })
                    .state('formaPagamentoeditar', {
                        url: '/formaPagamentoeditar/:id',
                        templateUrl: 'paginas/formaPagamento/formaPagamento.html',
                        controller: 'FormaPagamentoController',
                        resolve: {
                            entidade: function ($http, $stateParams) {
                                return $http.get(url7.concat('/' + $stateParams.id))
                            }
                        }
                    })

                    //                  PAGAMENTO

                    .state('pagamento', {
                        url: '/pagamento',
                        templateUrl: 'paginas/pagamento/pagamento.html',
                        controller: 'PagamentoController',
                        resolve: {
                            entidade: function () {
                                return {};
                            }
                        }
                    })
                    .state('pagamentolistagem', {
                        url: '/pagamentolistagem',
                        templateUrl: 'paginas/pagamento/listar.html',
                        controller: 'PagamentoListarController'
                    })
                    .state('pagamentoeditar', {
                        url: '/pagamentoeditar/:id',
                        templateUrl: 'paginas/pagamento/pagamento.html',
                        controller: 'PagamentoController',
                        resolve: {
                            entidade: function ($http, $stateParams) {
                                return $http.get(url8.concat('/' + $stateParams.id))
                            }
                        }
                    })

                    //                  TITULO

                    .state('titulo', {
                        url: '/titulo',
                        templateUrl: 'paginas/titulo/titulo.html',
                        controller: 'TituloController',
                        resolve: {
                            entidade: function () {
                                return {};
                            }
                        }
                    })
                    .state('titulolistagem', {
                        url: '/titulolistagem',
                        templateUrl: 'paginas/titulo/listar.html',
                        controller: 'TituloListarController'
                    })
                    .state('tituloeditar', {
                        url: '/tituloeditar/:id',
                        templateUrl: 'paginas/titulo/titulo.html',
                        controller: 'TituloController',
                        resolve: {
                            entidade: function ($http, $stateParams) {
                                return $http.get(url9.concat('/' + $stateParams.id))
                            }
                        }
                    })

        })
