// Array de objetos 

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

para ( deixe  cont  =  0 ;  cont  <  pizza . comprimento ;  cont ++ ) {
    deixe  promoDia  =  pizza [ cont ] . promoção
    deixe  valor  =  50 ;

    function  promocaoDoDia ( ) {
        if ( promoDia  ==  true ) {
            return   'está com desconto de 25%' ;
            deixe  desc  =  ( valor  *  0,25 ) ;
            deixe  totalDesc  =  valor  -  desc ;
            return  `está por apenas $ $ { totalDesc } reais, promoção do dia 25% de desconto. Proveite`

        } else {
            return  'não está na promoção' ;
        }

    }
    console . log ( `Uma pizza $ { pizza [ cont ] . sabor . toUpperCase ( ) } ou $ { pizza [ cont ] . sabor . substr ( 1 , 5 ) } , $ { promocaoDoDia ( ) } ` )
    console . log ( `Uma pizza $ { pizza [ cont ] . sabor . toUpperCase ( ) } ou $ { pizza [ cont ] . sabor . substr ( 1 , 5 ) } de $ $ { valor } reais , $ { promocaoDoDia ( ) } ! ` )
}