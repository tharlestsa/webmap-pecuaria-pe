Webmap Pecuária Pernambuco
==========================

Este é um aplicativo web de mapa que utiliza Vue.js com OpenLayers e servidor de mapas Geoserver, além de ser integrado com o docker-compose e o gitactions.

O objetivo deste aplicativo é permitir a visualização e a análise de dados relacionados à pecuária no estado de Pernambuco, por meio de mapas interativos e camadas temáticas.

Instalação
----------

Para executar o aplicativo, é necessário ter o docker e o docker-compose instalados em sua máquina. Em seguida, execute os seguintes comandos:

```console
git clone https://github.com/seu_usuario/webmap-pecuaria-pe.git $ cd webmap-pecuaria-pe $ docker-compose up`
```

Isso irá criar e executar o contêiner do aplicativo e do servidor de mapas Geoserver. Em seguida, abra o navegador e acesse [http://localhost:8080](http://localhost:8080) para visualizar o aplicativo.

Utilização
----------

Ao abrir o aplicativo, verá um mapa interativo da região de Pernambuco, com várias camadas temáticas disponíveis. Pode navegar pelo mapa usando o mouse e os botões de zoom na barra de ferramentas.

Para visualizar as informações de uma camada temática, clique no botão "Layers" na barra de ferramentas e selecione a camada desejada. Em seguida, a camada será exibida no mapa e as informações serão exibidas na legenda.

Contribuição
------------

Se desejar contribuir, por favor, crie um fork deste repositório e envie um pull request com as suas alterações. Certifique-se de que o seu código está bem documentado e testado.

Licença
-------

Este aplicativo é distribuído sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
