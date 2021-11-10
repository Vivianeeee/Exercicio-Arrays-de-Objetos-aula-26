// Array de objetos 
/// EXERCÍCIO 1
const  alunas  =  [
    {
        id : 1 ,
        primeiroNome : 'Amanda' ,
        lastName : 'Mendes' ,
        idade : '16' ,
        materiaDestaque : 'Espanhol' ,
        notas : [ 10 ,  5 ,  8 ,  9,5 ,  7 ,  8 ] ,
        endereço : [ 'Av. Atlântica ' ,  1.360 ,  ' SP ' ] ,
    } ,
    {
        id : 2 ,
        primeiroNome : 'Liz' ,
        lastName : 'Alves' ,
        idade : 19 ,
        materiaDestaque : 'Filosofia' ,
        notas : [ 8 ,  9,5 ,  10 ,  9 ,  7 ,  5 ] ,
        endereço : [ 'Rua dos Caranguejos' ,  1.608 ,  'SP' ] ,

    } ,
    {
        id : 3 ,
        primeiroNome : 'Luana' ,
        lastName : 'Silva' ,
        idade : '18' ,
        materiaDestaque : 'Inglês' ,
        notas : [ 10 ,  8 ,  6 ,  9 ,  5 , 10 ] ,
        endereço : [ 'Rua Antônio Carlos Gomes' ,  190 , 'SP' ] ,
    } ,
] ;


para ( deixar  aluna  =  0 ;  aluna  <  Alunas . comprimento ;  aluna ++ ) {  // Aqui IRA percorrer como Alunas e SEUS matriz
    let  nota  =  Alunas [ aluna ] . notas ;
    let  total  =  0 ;
    for ( deixe  i  =  0 ;  i  <  nota . comprimento ;  i ++  ) {  // irá percorrer os array dos arrays
        total  =  total  +  nota [ i ] ;  // Para somar as notas
        media  =  total  /  nota [ i ]  // para dividir como notas pela contidade de notas
        function  alunaMedia ( mediaTotal  =  media ) {
            if  ( mediaTotal  >  7 ) {
                voltar  'Aprovada'
            } else {
                retornar  'Reprovada'
            }
        }

    }   

    console . log ( `Aluna $ { alunas [ aluna ] . firstName } com como notas ( $ { alunas [ aluna ] . notas } ), mora no endereco: $ { alunas [ Aluna ] . endereco } . Teve uma mídia $ { mídia } , portanto foi $ { alunaMedia ( ) } ` ) ;
}

console . log ( '' )




// /// EXERCÍCIO 2   
const  pizza  =  [
    {
        id : 1 ,
        sabor : 'Baiana' ,
        ingredientes : [ 'Massa' ,  'Calabresa' , 'Cebola' , 'Pimenta', 'Molho de tomate' ,  'Ovos' ] ,
        tamanho : [ 'P' , 'M' ,  'G' ] ,
        promoção : verdadeiro ,
        diaDaPromoção : 'Quarta-feira'
    } ,
      {
        id : 2 ,
        sabor : 'Caipira' ,
        ingredientes : [ 'Massa' ,  'Frango' ,  'Catupiry', 'Molho de tomate' ,  'Milho' ] ,
        tamanho : [ 'P' , 'M' ,  'G' ] ,
        promoção : falso ,
        diaDaPromoção : 'Terça-feira'
    } ,
   {
        id : 3 ,
        sabor : 'Atum' ,
        ingredientes : [ 'Massa' ,  'Atum' ,  'Cebola' ,  'Molho de tomate' ] ,
        tamanho : [ 'P' , 'M' ,  'G' ] ,
        promoção : verdadeiro ,
        diaDaPromoção : 'Quinta-feira'
    } ,
] ;

para ( let  cont  =  0 ;  cont  <  pizza . comprimento ;  cont ++ ) {
let  promoDia  =  pizza [ cont ] . promoção
function  promocaoDoDia ( ) {
    if ( promoDia  ==  true ) {
        return   'está com desconto de 25%' ;
    } else {
        return  'não está na promoção' ;
    }

}
console . log ( `Uma pizza $ { pizza [ cont ] . sabor . toUpperCase ( ) } ou $ { pizza [ cont ] . sabor . substr ( 1 , 5 ) } , $ { promocaoDoDia ( ) } ` )
}
