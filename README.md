# Módulo 7

## Javascript Intermediário

Curso de Javascript da B7WEB - https://phpdozeroaoprofissional.com.br/

## Acesse o meu Curriculum

http://bit.ly/curriculum-marcelo

## Acesse o meu Portfólio

http://bit.ly/portfolio-marcelo

## Declarando a variável de data

var dt = new Date();

## Obtendo a data, ou seja, o dia

dt.getDate()

## Obtendo a hora

dt.getHours()

## Obtendo os minutos

dt.getMinutes()

## Obtendo os milisegundos

dt.getMilliseconds()

## Obtendo a quantidade de milisegundos à partir do ano de 1970

dt.getTime()

## Visualizar data no formato brasileiro no console

    dt.getDate()+"/"+(dt.getMonth()+1)+"/"+dt.getFullYear()

## Declarar data específica no console

    var dt = new Date(Date.parse("March 10, 2001"));

## Adicionar 60 dias a data especificada inicialmente no console

    dt.setDate( dt.getDate() + 60 );

## Adicionando 2 horas a data declarada no console

    dt.setHours( dt.getHours() + 2 );

## Declarando os dias da semana

    var dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

## Obtendo o dia correspondente da semana em formato numeral contando à partir de Domingo sendo ZERO

dias[0] = Domingo
dias[1] = Segunda
dias[2] = Terça
dias[3] = Quarta
dias[4] = Quinta
dias[5] = Sexta
dias[6] = Sábado

## Obtendo o dia correspondente em formato escrito contando à partir de Domingo sendo ZERO

    dias[dt.getDay()]

## Declarando os meses do ano

    var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

## Obtendo o mês correspondente em formato escrito contando à partir de Domingo sendo ZERO

    meses[dt.getMonth()]
