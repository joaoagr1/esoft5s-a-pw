document.addEventListener("DOMContentLoaded", () => {
    const createMainStructure = () => {
        const body = document.querySelector("body");

        const header = document.createElement("header");
        header.id = "header";
        header.innerHTML = '<a href="./index.html"><h1>Squirtle</h1></a>';
        body.appendChild(header);

        const nav = document.createElement("nav");
        nav.setAttribute("aria-label", "Navegação principal");
        const navList = document.createElement("ul");
        const navItems = [
            { href: "#info-squirtle", text: "Informações sobre Squirtle" },
            { href: "#caracteristicas", text: "Características" },
            { href: "#curiosidades", text: "Curiosidades" },
            { href: "#artigo-squirtle", text: "Artigo sobre Squirtle" },
            { href: "#recursos", text: "Recursos Adicionais" },
            { href: "#evolucao", text: "Evolução" },
            { href: "./pages/pokemon/index.html?name=wartortle", text: "pokemao" }
        ];

        navItems.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            navList.appendChild(li);
        });

        nav.appendChild(navList);
        body.appendChild(nav);

        const main = document.createElement("main");
        body.appendChild(main);

        const footer = document.createElement("footer");
        footer.setAttribute("aria-label", "Rodapé");
        footer.innerHTML = `
        <p aria-label="Copyright">&copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados.</p>
        <p><a href="#header">Voltar para o topo</a></p>
        <p><a href="mailto:contato@squirtlepage.com">Contato via e-mail</a></p>
        <p><a href="tel:+5555555555">Telefone: (55) 5555-5555</a></p>
      `;
        body.appendChild(footer);
    };

    const createSection = (id, label, content) => {
        const section = document.createElement("section");
        section.id = id;
        section.setAttribute("aria-labelledby", `${id}-label`);

        const h2 = document.createElement("h2");
        h2.id = `${id}-label`;
        h2.textContent = label;

        section.appendChild(h2);
        section.innerHTML += content;

        return section;
    };

    const addContentToMain = () => {
        const main = document.querySelector("main");

        const infoSquirtleContent = `
        <div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle 1" />
          <img src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png" alt="Squirtle 2" />
        </div>
        <p>Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.</p>
      `;
        main.appendChild(createSection("info-squirtle", "Informações sobre Squirtle", infoSquirtleContent));

        const caracteristicasContent = `
        <p>Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.</p>
      `;
        main.appendChild(createSection("caracteristicas", "Características", caracteristicasContent));

        const curiosidadesContent = `
        <ul>
          <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
          <li>Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).</li>
          <li>Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.</li>
        </ul>
      `;
        main.appendChild(createSection("curiosidades", "Curiosidades", curiosidadesContent));

        const artigoSquirtleContent = `
        <p>Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.</p>
        <p>Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.</p>
        <p>Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.</p>
      `;
        main.appendChild(createSection("artigo-squirtle", "Squirtle: O Amigo Aquático", artigoSquirtleContent));

        const recursosContent = `
        <ul>
          <li><a href="https://www.pokemon.com/br/pokedex/squirtle" target="_blank">Pokédex - Squirtle</a></li>
          <li><a href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)" target="_blank">Bulbapedia - Squirtle</a></li>
        </ul>
      `;
        main.appendChild(createSection("recursos", "Recursos Adicionais", recursosContent));

        const evolucaoContent = `
        <ul>
          <li>
            <a href="./pages/pokemon/index.html?name=squirtle">
              <figure>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="Squirtle" />
                <figcaption>1. Squirtle</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="./pages/pokemon/index.html?name=wartortle">
              <figure>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="Wartortle" />
                <figcaption>2. Wartortle</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="./pages/pokemon/index.html?name=blastoise">
              <figure>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="Blastoise" />
                <figcaption>3. Blastoise</figcaption>
              </figure>
            </a>
          </li>
        </ul>
      `;
        main.appendChild(createSection("evolucao", "Evoluções", evolucaoContent));
    };

    createMainStructure();
    addContentToMain();
});
