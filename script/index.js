const btnConteudoeCrie = document.getElementById("botao-conteudo-eCrie");
const btnConteudoeOuve = document.getElementById("botao-conteudo-eOuve");
const conteudoeOuve = document.getElementById("conteudo-eOuve");
const imgeOuve = document.getElementById("imagemeOuve");

const btnAplicativo = document.getElementById("btnAplicativo");
const btnSite = document.getElementById("btnSite");
const btneOuveAdmin = document.getElementById("btneOuveAdmin");
const btnSistema = document.getElementById("btnSistema");
const btnAutoAtendimento = document.getElementById("btnAutoatendimento");
const video = document.getElementById("video");
const imgVideo = document.getElementById("imgVideo");
const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");
const textRightVideo = document.getElementById("text-right-video");

/* EVENTOS */

btnConteudoeOuve.style.borderBottom = "#00823C 1px solid";

btnConteudoeOuve.addEventListener("click", function (event) {
  conteudoeOuve.innerText =
    "Um sistema de ouvidoria desenvolvido para que os administradores publicos possam gerenciar todas as demandas da sua cidade de forma simples, rápida e de qualquer lugar.";

  imgeOuve.setAttribute("src", "./img/eouve-logo.png");
  btnConteudoeOuve.style.borderBottom = "#00823C 1px solid";
  btnConteudoeCrie.style.borderBottom = "#f9f9f9 1px solid";
});

const imgeCrie = document.getElementById("imagemeOuve");

btnConteudoeCrie.addEventListener("click", function (event) {
  conteudoeOuve.innerText =
    "Tenha um site informativo para a população encontrar facilmente as notícias, eventos, contratos, leis, decretos, licitações e edições do diário oficial. Publique vagas no Portal do Emprego e disponibilize uma página personalizada do Turismo para os visitante, tudo isso sempre respeitando os itens obrigatórios de acessibilidade.";

  imgeCrie.setAttribute("src", "./img/ecrie-logo.png");
  btnConteudoeCrie.style.borderBottom = "#00823C 1px solid";
  btnConteudoeOuve.style.borderBottom = "#f9f9f9 1px solid";
});

btnAutoAtendimento.style.borderBottom = "#F0BB00 2px solid";

btnAplicativo.addEventListener("click", function (event) {
  video.setAttribute(
    "src",
    "https://www.youtube.com/embed/T96Os2lRF-A?si=nwIOPFCiL1xEuJe9"
  );
  video.style.display = "block";
  imgVideo.style.display = "none";

  texto1.innerText =
    "Um sistema de ouvidoria desenvolvido para que os administradores públicos possam gerenciar todas as demandas da sua cidade de forma simples, rápida e de qualquer lugar. A ferramenta é composta por recursos de geolocalização, possibilitando a identificação e o mapeamento de todas as necessidades da cidade. ";

  texto2.innerText =
    "Além disso, recursos de geração de relatórios, em pizzas e barras pesquisas avançadas, exportação dos dados para PDF e Excel e assinatura digital nos formatos A1 e A3 estão contempladas no sistema. Com a plataforma, o gerenciamento da sua cidade torna-se mais produtivo e ágil. Você pode fiscalizar o resultado das suas secretarias e de seus prestadores, tornando a sua gestão mais eficaz e transparente.";

  btnAplicativo.style.borderBottom = "#F0BB00 2px solid";
  btnSite.style.borderBottom = "#f9f9f9 1px solid";
  btneOuveAdmin.style.borderBottom = "#f9f9f9 1px solid";
  btnSistema.style.borderBottom = "#f9f9f9 1px solid";
  btnAutoAtendimento.style.borderBottom = "#f9f9f9 1px solid";
});

btnSite.addEventListener("click", function (event) {
  video.style.display = "none";
  imgVideo.style.display = "block";
  imgVideo.setAttribute("src", "./img/prefeitura-de-taquaritinga.png");
  imgVideo.style.width = "400px";
  imgVideo.style.height = "300px";

  texto1.innerText =
    "Uma plataforma completa para você gerenciar o portal da sua prefeitura. Com o eCrie é muito simples atualizar uma notícia, um evento, um banner, abrir uma ficha de inscrição, publicar uma licitação, disponibilizar um contrato ou realizar a criação do diário oficial eletrônico. Seus módulos foram pensados e criados para suprir todas as necessidades dos portais públicos referente a lei de acesso à informação 12.527/2011 e sempre atualizado com as novas exigências do Tribunal de Contas e Ministério Público.";

  texto2.innerText =
    "Dessa forma, realizar a atualização e o gerenciamento das notícias, banners, eventos, licitações, contratos, leis diários oficiais, atos oficiais e inscrições online se tornam bem simples; possibilitando ao administrador do sistema autonomia para gerenciar todo o conteúdo do seu portal. Além disso, a versão mobile (para celular e tablet) também é desenvolvida para que os munícipes possam acessar o site de qualquer dispositivo.";

  btnSite.style.borderBottom = "#F0BB00 2px solid";
  btneOuveAdmin.style.borderBottom = "#f9f9f9 1px solid";
  btnSistema.style.borderBottom = "#f9f9f9 1px solid";
  btnAutoAtendimento.style.borderBottom = "#f9f9f9 1px solid";
  btnAplicativo.style.borderBottom = "#f9f9f9 1px solid";
});

btneOuveAdmin.addEventListener("click", function (event) {
  video.setAttribute(
    "src",
    "https://www.youtube.com/embed/SSDaJ5DQ46I?si=t8Y7SXuIik1r7bkg"
  );
  video.style.display = "block";
  imgVideo.style.display = "none";

  texto1.innerText =
    "O eOuve Admin foi criado em 2020 e seu objetivo foi levar aos gestores públicos ou prestadores terceirizados as principais funcionalidades que já continham no sistema administrativo do eOuve.";

  texto2.innerText =
    "Através deste, conseguimos reduzir a tramitação de papéis nos processos de Ouvidoria das cidades.";

  btneOuveAdmin.style.borderBottom = "#F0BB00 2px solid";
  btnSistema.style.borderBottom = "#f9f9f9 1px solid";
  btnAutoAtendimento.style.borderBottom = "#f9f9f9 1px solid";
  btnSite.style.borderBottom = "#f9f9f9 1px solid";
  btnAplicativo.style.borderBottom = "#f9f9f9 1px solid";
});

btnSistema.addEventListener("click", function (event) {
  video.style.display = "none";
  imgVideo.style.display = "block";
  imgVideo.setAttribute("src", "./img/integracoes-demo.png");
  imgVideo.style.width = "500px";
  imgVideo.style.height = "300px";

  texto1.innerText =
    "O eOuve é uma plataforma totalmente apta para você integrar os dados a outros sistemas que você possua. Temos a possibilidade de criar APIs que recebem ou enviam dados, podendo ser nos formatos de JSON ou XML, como padrão de troca de informação.";

  texto2.innerText =
    "Outra possibilidade seria integrar o nosso plug-in de notificação para inserir nos outros sistemas, com apenas 03 (três) linhas de código HTML, você consegue inserir o nosso plug-in em qualquer sistema que você utiliza. Tudo isso foi desenvolvido para melhorar o dia a dia de nossos usuários e facilitar as informações entre os sistemas já existentes.";

  btnSistema.style.borderBottom = "#F0BB00 2px solid";
  btnAutoAtendimento.style.borderBottom = "#f9f9f9 1px solid";
  btnSite.style.borderBottom = "#f9f9f9 1px solid";
  btnAplicativo.style.borderBottom = "#f9f9f9 1px solid";
  btneOuveAdmin.style.borderBottom = "#f9f9f9 1px solid";
});

btnAutoAtendimento.addEventListener("click", function (event) {
  video.setAttribute(
    "src",
    "https://www.youtube.com/embed/YXqWveIV09E?si=2Mb_ZB_At4KwsSYA"
  );

  texto1.innerText =
    "Com o Totem, a Prefeitura ou a Câmara estará muito mais modernizada e informatizada, pois cada vez mais nos dias de hoje, os canais de auto-atendimento são uma realidade em nosso país.";

  texto2.innerText =
    "Uma grande funcionalidade do Totem é a mobilidade. Nosso equipamento pesa menos de 10 (dez) quilos e com isso a possibilidade de levá-lo em eventos ou em outros locais se faz possível, bastando apenas um ponto de energia e internet, podendo ser cabeada ou sem fio, para funcionar e obter a conectividade.";

  btnAutoAtendimento.style.borderBottom = "#F0BB00 2px solid";
  btnSistema.style.borderBottom = "#f9f9f9 1px solid";
  btnSite.style.borderBottom = "#f9f9f9 1px solid";
  btnAplicativo.style.borderBottom = "#f9f9f9 1px solid";
  btneOuveAdmin.style.borderBottom = "#f9f9f9 1px solid";
});
