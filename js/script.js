
// Função para atualizar a imagem do ícone de forma aleatória
function atualizarIconeAleatorio() {
  const numeroImagem = Math.floor(Math.random() * 21) + 1;
  document.getElementById("iconr").src = `images/icon (${numeroImagem}).jpg`;
}

// Array com a quantidade de capítulos por livro
const livros = {
  10: 50, // Gênesis
  20: 40, // Êxodo
  30: 27, // Levítico
  40: 36, // Números
  50: 34, // Deuteronômio
  60: 24, // Josué
  70: 21, // Juízes
  80: 4,  // Rute
  90: 31, // 1Samuel
  100: 24, // 2Samuel
  110: 22, // 1Reis
  120: 25, // 2Reis
  130: 29, // 1Crônicas
  140: 36, // 2Crônicas
  150: 10, // Esdras
  160: 13, // Neemias
  190: 10, // Ester
  220: 42, // Jó
  230: 150, // Salmos
  240: 31, // Provérbios
  250: 12, // Eclesiastes
  260: 8,  // Cântico dos Cânticos
  290: 66, // Isaías
  300: 52, // Jeremias
  310: 5,  // Lamentações
  330: 48, // Ezequiel
  340: 12, // Daniel
  350: 14, // Oséias
  360: 3,  // Joel
  370: 9,  // Amós
  380: 1,  // Obadias
  390: 4,  // Jonas
  400: 7,  // Miqueias
  410: 3,  // Naum
  420: 3,  // Habacuque
  430: 3,  // Sofonias
  440: 2,  // Ageu
  450: 14, // Zacarias
  460: 4,  // Malaquias
  470: 28, // Mateus
  480: 16, // Marcos
  490: 24, // Lucas
  500: 21, // João
  510: 28, // Atos
  520: 16, // Romanos
  530: 16, // 1Coríntios
  540: 13, // 2Coríntios
  550: 6,  // Gálatas
  560: 6,  // Efésios
  570: 4,  // Filipenses
  580: 4,  // Colossenses
  590: 5,  // 1Tessalonicenses
  600: 3,  // 2Tessalonicenses
  610: 6,  // 1Timóteo
  620: 4,  // 2Timóteo
  630: 3,  // Tito
  640: 1,  // Filemom
  650: 13, // Hebreus
  660: 5,  // Tiago
  670: 5,  // 1Pedro
  680: 3,  // 2Pedro
  690: 5,  // 1João
  700: 1,  // 2João
  710: 1,  // 3João
  720: 1,  // Judas
  730: 22  // Apocalipse
};

const nomelivros = {
  10: 'GÊNESIS',
  20: 'ÊXODO',
  30: 'LEVÍTICO',
  40: 'NÚMEROS',
  50: 'DEUTERONÔMIO',
  60: 'JOSUÉ',
  70: 'JUÍZES',
  80: 'RUTE',
  90: '1SAMUEL',
  100: '2SAMUEL',
  110: '1REIS',
  120: '2REIS',
  130: '1CRÔNICAS',
  140: '2CRÔNICAS',
  150: 'ESDRAS',
  160: 'NEEMIAS',
  190: 'ESTER',
  220: 'JÓ',
  230: 'SALMOS',
  240: 'PROVÉRBIOS',
  250: 'ECLESIASTES',
  260: 'CÂNTICO DOS CÂNTICOS',
  290: 'ISAÍAS',
  300: 'JEREMIAS',
  310: 'LAMENTAÇÕES',
  330: 'EZEQUIEL',
  340: 'DANIEL',
  350: 'OSÉIAS',
  360: 'JOEL',
  370: 'AMÓS',
  380: 'OBADIAS',
  390: 'JONAS',
  400: 'MIQUEIAS',
  410: 'NAUM',
  420: 'HABACUQUE',
  430: 'SOFONIAS',
  440: 'AGEU',
  450: 'ZACARIAS',
  460: 'MALAQUIAS',
  470: 'MATEUS',
  480: 'MARCOS',
  490: 'LUCAS',
  500: 'JOÃO',
  510: 'ATOS',
  520: 'ROMANOS',
  530: '1CORÍNTIOS',
  540: '2CORÍNTIOS',
  550: 'GÁLATAS',
  560: 'EFÉSIOS',
  570: 'FILIPENSES',
  580: 'COLOSSENSES',
  590: '1TESSALONICENSES',
  600: '2TESSALONICENSES',
  610: '1TIMÓTEO',
  620: '2TIMÓTEO',
  630: 'TITO',
  640: 'FILEMOM',
  650: 'HEBREUS',
  660: 'TIAGO',
  670: '1PEDRO',
  680: '2PEDRO',
  690: '1JOÃO',
  700: '2JOÃO',
  710: '3JOÃO',
  720: 'JUDAS',
  730: 'APOCALIPSE'
};

function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encontrarLivro() {
  let capitulo = Math.floor(Math.random() * 1189 + 1);
  let acumulado = 0;
  let input = document.getElementById("search").value;
  let [book, numero] = input.split(' ');
  
  if ( input === "") {
  for (let idLivro in livros) {
    acumulado += livros[idLivro];
    if (capitulo <= acumulado) {
      carregarVersiculos(idLivro,capitulo - (acumulado - livros[idLivro]));
      break;
    }
  }
  } else {
    for (let livro in nomelivros) {
      if (removerAcentos(nomelivros[livro]).toLowerCase() === removerAcentos(book).toLowerCase()) {
        carregarVersiculos(livro, parseInt(numero));
        break;
      }
    }
  }
}

function extrairNumero(str,i,clss) {
  const regex = /\[(\d+)\]/;
  const correspondencia = str.match(regex);
  const numero = correspondencia ? correspondencia[1] : null;
  const novaString = str.replace(regex,`</b></p><br>\n\n<p style="padding:1.8%;" class="v ${clss}" id="verse_${i}" onclick="marcar(${i})"><span style="color: var(--color-p);"><b>${numero}</b></span>`);

  return { numero, novaString };
}

async function nameBooks(numbk) {
  const resposta = await fetch('json/books.json');
  const books = await resposta.json();
  for (let i=0; i < books.length; i++) {
    console.log(books[i].book_number)
    if (books[i].book_number === numbk) {
      return books[i].name;
    }
  }
}

// Função para carregar os versículos// Função para carregar os versículos
async function carregarVersiculos(livro, capitulo) {
  let textos = "\n";
  
  //let { livro, numero: capitulo } = await encontrarLivro();
  
  let resposta = await fetch('json/verses.json');
  let versiculos = await resposta.json();
  
  let resposte = await fetch('json/titles.json');
  let titles = await resposte.json();
  
  let marcarp = JSON.parse(localStorage.getItem('6578431209'));
  
  for (let i = 0; i < versiculos.length; i++) {
    if (titles[i].chapter === capitulo && titles[i].book_number === (livro*1)) {
      document.getElementById("subt").innerHTML = titles[i].title;
      break;
    }
  }
  
  for (let i = 0; i < versiculos.length; i++) {
    let marcar = marcarp[i] || "";
    if (versiculos[i].chapter === capitulo && versiculos[i].book_number === (livro*1) && versiculos[i].text !== ""){
      var verse = extrairNumero(versiculos[i].text,i,marcar);
      if ( !isNaN(verse.numero) && !isNaN(parseFloat(verse.numero)) && verse.numero !== "" ) {
        textos += `<p style="padding:1.8%;text-align: center;" class="v"><b>${verse.novaString}</p>\n\n`;
      } else {
        if (/\[.*?\]/.test(versiculos[i].text)) {
          if (textos === "") {textos = "<br>"}
          textos += `<p style="padding:1.8%;" class="v ${marcar}" id="verse_${i}" onclick="marcar(${i})">${(versiculos[i].text).replace(/\[(.*?)\]/g, '<span style="color: var(--color-p);"><b>$1</b></span>')}</p>\n\n`;
        } else {
          if (textos === "") {textos = "<br>"}
          textos += `<p style="padding:1.8%;" class="v ${marcar}" id="verse_${i}" onclick="marcar(${i})"><span style="color: var(--color-p);"><b>${versiculos[i].verse}</b></span> ${versiculos[i].text}</p>\n\n`;
        }
      }
    }
  }
  
  document.getElementById('title').innerHTML = "<h2 class='title'>" + nomelivros[livro] + " " + capitulo + "</h2>";
  //document.getElementById('search').placeholder = nomelivros[livro] + " " + capitulo;
  document.getElementById('verses').innerHTML = textos;
}

/*
const Mverse = document.querySelector('p');
Mverse.addEventListener("click", function() {
  this.classList.toggle(type);
});
*/

function pallet() {
  let link = document.documentElement.style;

  link.setProperty('--color-f', '#e4e1e2');
  link.setProperty('--color-p', '#9bbf93');
  link.setProperty('--color-s', '#9bbf939b');
  link.setProperty('--color-sf', '#768c77');
  link.setProperty('--color-z', '#3F3D4A');
  link.setProperty('--color-zf', '#3f3d4a9d');
  link.setProperty('--color-y', '#4f4d5b');
  link.setProperty('--color-yf', '#4d4e5bb7');
  link.setProperty('--color-d', '#313038');
  link.setProperty('--color-b', '#1c1b21');
}

function marcar(i) {
  let idSt = 6578431209;
  
  /*
  let type = "marcar";
  let marcar = JSON.parse(localStorage.getItem('6578431209')) || {};
  
  if (marcar[i-1] === "" && marcar[i+1] === "") {
    type = "marcar";
  } else if  (marcar[i-1] === null && marcar[i+1] === null) {
    type = "marcar";
  } else if  (marcar[i-1] === "" && marcar[i+1] === null) {
    type = "marcar";
  } else if  (marcar[i-1] === null && marcar[i+1] === "") {
    type = "marcar";
  } else if (marcar[i+1] === "") {
    type = "marcar-c";
  } else if (marcar[i-1] === "") {
    type = "marcar-b";
  } else {
    type = "marcar-m";
  }
  
  //localStorage.removeItem(6578431209)

  let verse = document.getElementById(`verse_${i}`);
  
  if (verse.className.match("marcar")) {
    marcar[i] = "";
  } else {
    marcar[i] = "marcar";
  }
  
  localStorage.setItem(idSt, JSON.stringify(marcar));
  console.log(JSON.parse(localStorage.getItem(6578431209)))
  */
  /*
  for (let k = 1; k < 101; k++) {
    if (marcar[i+(k-49)].match("marcar") && marcar[i+(k-51)].match("marcar")) {
      marcar[i+(k-50)] = "marcar-m";
    } else if (marcar[i+(k-49)].match("marcar")) {
      marcar[i+(k-50)] = "marcar-b";
    } else if (marcar[i+(k-51)].match("marcar")) {
      marcar[i+(k-50)] = "marcar-c";
      marcar[i+(k-51)] = "marcar-b";
    } else {
      marcar[i] = "marcar";
    }
    verse = document.getElementById(`verse_${i+(k-50)}`);
    verse.className = ("v "+marcar[i+(k-50)]);
  }
*/
  
//localStorage.removeItem(6578431209)
  //console.log("v marcar".match("marcar") === true)
  //console.log(verse.className)
  //console.log(type)
  //console.log(JSON.parse(localStorage.getItem(6578431209)))
  //localStorage.setItem(idSt, JSON.stringify(marcar));
  
}

function cache() {
  let idSt = 6578431209;
  
  let marcar = JSON.parse(localStorage.getItem(idSt)) || {};
  
  for (let h = 0; h < 31003; h++) {
    if (marcar[h] !== "" || !marcar[h].match("marcar")) {
      marcar[h] = "";
    }
  }
  
  localStorage.setItem(idSt, JSON.stringify(marcar));
  console.log(JSON.parse(localStorage.getItem(idSt)));
}




function marcarRam() {
  // Criar item:
  let meuObjeto = { nome: 'Alice', idade: 30 };
  localStorage.setItem('usuario', JSON.stringify(meuObjeto));

  // Ler item:
  let usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));
  console.log(usuarioSalvo.nome); // Saída: Alice
}

//localStorage.setItem(6578431209, JSON.stringify(JSON.parse(localStorage.getItem('6578431209')) || {}));

// Adicionando os event listeners para carregar as funções quando a janela for carregada
//window.addEventListener('load', atualizarIconeAleatorio);
window.addEventListener('load', encontrarLivro);
window.addEventListener('load', pallet);
//window.addEventListener('load', cache);


// 730 7
// 230 3

/*
const textos = versiculos
    .filter(versiculo => versiculo.chapter === 3 && versiculo.book_number === 230)
    .map(versiculo => `<p style='padding:1.8%;'><b>${versiculo.verse}</b> ${versiculo.text}</p>`)
    .join('');
    
    
function listarElementosDoArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Exemplo de uso:
const meuArray = [10, 20, 30, 40];
listarElementosDoArray(meuArray);



function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function procurarPalavraNoArray(palavra, arr) {
  const palavraLowerCase = removerAcentos(palavra.toLowerCase());
  return arr.filter(item => removerAcentos(item.toLowerCase()) === palavraLowerCase);
}

// Exemplo de uso:
const meuArray = ['Pão', 'pão', 'pao', 'pAo', 'Café'];
const palavraProcurada = 'Pão';

const resultados = procurarPalavraNoArray(palavraProcurada, meuArray);

console.log(resultados); // ['Pão', 'pão', 'pao', 'pAo']






function compararStringsSemAcentos(str1, str2) {
  // Divide as strings em partes: livro e número
  const [livro1, numero1] = str1.split(' ');
  const [livro2, numero2] = str2.split(' ');

  // Remove acentos e converte para minúsculas
  const livro1SemAcentos = livro1.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  const livro2SemAcentos = livro2.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

  // Verifica se os livros e números são iguais
  return livro1SemAcentos === livro2SemAcentos && numero1 === numero2;
}

// Exemplo de uso:
const string1 = 'SALMOS 55';
const string2 = 'salmos 22';

console.log(compararStringsSemAcentos(string1, string2)); // Retorna true






*/