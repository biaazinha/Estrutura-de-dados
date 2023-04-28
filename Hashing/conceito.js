/*
armazenar registros em uma tabela e acessar a partir de uma função matemática na pesquisa
fazer picadinho ou "bagunça"

método de pesquisa com chave:
-tranformar (hashing) chave de pesquisa em um endereço da tabela:
mapear chaves em inteiros dentro do intervalo [0...tabela.length-1]
chaves não numericas devem ser transformadas em numero

-metodo para lidar com colisões por causa de mesmo endereço
construir lista linear 
chaves com mesmo endereço são encadeadas em uma lista linear
ou
endereçamento aberto
chaves armazenadas na propria tabela 
*/