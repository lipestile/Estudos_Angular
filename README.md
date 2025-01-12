# Estudos_Angular
 Início do aprendizado do Angular

## Anotações de Links Importanates
- https://vidafullstack.com.br/instrucoes-para-o-curso/
- https://nodejs.org/en/
- https://angular.dev/tools/cli/setup-local



## Comandos Importantes 

- ng --help  (Angular CLI)
- ng g --help
- ng serve
- ng g component components/new-component  (cria um componente novo)
- ng g c nomedapasyta/nomedapasta/nomedoarqeuivo (esse codigo cria um componente)

## Seletores especiais 

/* 
:host ele é um seletor especial que se refere ao componenete em que esta sendo usado.

É usado para aplicar estilos diretamente ao componente  em si, em vez de seus elementos filhos.

você pode definir estilos específicos para um componenente raiz,
por exemplo, alterando a cor de fundo ou abborda do componenete

*/
:host {
    h2 {
        background-color: aqua;
    }
}
/*
: host-context() ele é um seletor que permite aplicar estilos com base no contexto do componenete pai.

isso é util quando você deseja aplicar estilos com base em condições no componente pai.

por exemplo, você pode alterar a cor do fundo de um componente filho com base em um valor definido em seu componente pai.
*/

:host-context(.theme-dark) {
   background-color: #000;
   color: #fff;
}

:host-context(.theme-red) {
    h2{
        background-color: #ff0000;
    }
 }

/*
::ng-deep ele é um mecanismo que permite que os estilos definidos em um componente sejam aplicados aos elementos.

Em outras palavras, ele permite que você contorne o encapsulamento de estilos em componentes.

no entanto, é importante notar que o uso excessivo de ::ng-deep pode tornar o código mais dificil de manter e pode não ser a melhor prática em muitos casos. 

*/

::ng-deep {
    .theme-red {
        border: 5px solid blue;
    }
}


