//Dışarıdan aldığım arrayler
const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

//Bu alanda CharacterCard adında bir fonksiyon oluşturduk,Aşağıda oluşturacağımız for içerisine bu functionu çağırıcaz ve her dönüşte bu cardı oluşturucak.
function CharacterCard(character) {
  return `   <div class="col-4" style="width: 20rem;">
  <div class="card" style="width: 18rem; overflow: hidden; background: transparent; border: none;">
    <img src="${character.pic}" class="card-img-top" alt="${character.name}" style="width:300px;height:400px;">
    <div class="card-body" style="background: rgba(255, 255, 255, 0.2);"> <!-- 0.5 şeffaflık seviyesini temsil eder -->
      <h5 class="card-title">${character.name}</h5>
      <p>${character.homeworld}</p>
    </div>
  </div>
</div>`;
}

//Şimdi content idsi olan divin içerisine yerleştiricez cardlarımızı bu sebep ile contenti buraya çağırmalıyız.
const content_wrapper = document.getElementById("content");
//Buradada butonun stilini ve içeriğini değiştirmemeiz gerekeceği için butonun idsini çağırdık,toggle_button'a eşledik.
const toggle_button = document.getElementById("toggle-button");
//Burada da toggle_buttonun işlevini renderCharacters diye belirttik ilk işlevi ekran açıldığı gibi .
toggle_button.onclick = renderCharacters; //Burayı Ahmet hocaya sorabilirim.

function renderCharacters() {
  const row_element = document.createElement("div"); // Burada bir row_element isimli div oluşturduk. "createElement" bu işe yarıyor.
  row_element.classList.add("row"); // classlist sınıfları javascript tarafında yönetmek için kullanılır, classlist.add ile row_element divine row isimli bir class oluşturduk classlist.remove ile bunu silebilir veya classlist.contains ile classları dolu mu boşmu diye kontrol edebilirdik.

  for (const character of characters) {
    content_wrapper.innerHTML = "";
    if (
      filterValue === null ||
      (character.homeworld ?? "other").toLocaleLowerCase() === filterValue
    ) {
      CharacterCard(character);
      row_element.innerHTML += CharacterCard(character); // Burayı dikkatlice incelemeliyiz standart bir for of  oluşturduk ve characters'in içerisinde gezicek ve bunu character'e atıcak. sonra buradan oluşan veriyi "characteri"  row_elementin içerisine atıcaz bunuda inner.HTML yardımı ile yapıyoruz. fakat burada eklerken şuna dikkat etmeliyiz,characterCard yukarıda oluşturduk foksiyonunu çağırdık burada sonra parametresine characteri verdik for daki i gibi düşün burada da i character.
    }

    toggle_button.innerHTML = "Karakterleri Gizle";
    toggle_button.style.backgroundColor = "red";
    toggle_button.onclick = removeCharacters;
  }

  content_wrapper.appendChild(row_element); // Burada content idli divimiz içerisine row_elementi ekledik. .appendChil bir öğeye başka bir öğe ekler var olan içerik değişmez ek bir öğe eklenir
}

function removeCharacters() {
  content_wrapper.innerHTML = "";
  toggle_button.onclick = renderCharacters;
  toggle_button.innerHTML = "Karakterleri Göster";
  toggle_button.style.backgroundColor = "#198754";
}

//İkinci kısım

/*-map fonksiyonu kullanılıyor. Bu fonksiyon, her elemana belirli bir işlemi uygulayarak yeni bir dizi oluşturur.
-Arrow function ((a) => a.homeworld) kullanılarak, her karakter nesnesinin "homeworld" özelliği alınıyor. 
-Bu işlemin sonucu, yeni bir dizi olan homeworldsRaw değişkenine atanıyor.
-a.homeworld ?? "other" Kısmı nullish collection yani undifened yada null değer geldiğinde other'a eşle demek istedim. nullish collection güzeldir.
 */
let homeworldsRaw = characters.map((a) => a.homeworld ?? "other");
console.log(homeworldsRaw);

//- Bu örnekte, Set nesnesi kullanılarak homeworldsRaw dizisinin benzersiz elemanları alınıyor. Daha sonra, bu benzersiz elemanlar bir spread operatörü (...) kullanılarak yeni bir dizi olan homeworldUnuque'ye atanıyor. console.log(homeworldUnuque) ifadesi ile de benzersiz değerlere sahip diziyi konsola yazdırıyoruz.
let homeworldsUnique = [...new Set(homeworldsRaw)];
console.log(homeworldsUnique);

/*-Anavatanların hepsinin küçük harf yapalım
  - Burada yine map'i kullandım işimizi çok fazla kolaylaştırıyor,homeworldsUnuque içerisinde gezerek her üstünden geçtiğimi a'ya atadım sonra bunların hepsini a.toLowercase ile ufak harf yaptım en baştada homeworldsLowercase diye bir değişken oluşturmuştum şimdi elimde homeworldsLowercase isminde hepsi ufak harfli bir liste oluştu.
*/
let homeworldsLowercase = homeworldsUnique.map((a) => a.toLowerCase());
console.log(homeworldsLowercase);

const homeworlds = homeworldsLowercase;
console.log(homeworlds);

/*Bu kısım aslında birinci kısımda ki card yapısını oluşturma ile aynı radıoİd diye bir değişken oluşturduk çünkü bu radıoları atamamız gereken div'in idsine ulaşmalıydık bunuda document.getElementById ile yaptık. Sonra alt kısım zaten ustteki card oluşturma ile aynı tek fark orada for yapısını dışarıda kurmuştuk.
Burada dikakt etmemiz gereken kısım radıoların içerisindeki name kısmı ile for kısmını aynı yapmamız gerekiyor. */

const radıoİd = document.getElementById("radio-div");

for (const homeworld of homeworlds) {
  const RadioElement = `<div>
  <div class="form-check">
      <input value="${homeworld}" class="form-check-input" type="radio" name="homeworld" id="radio-${homeworld}" value="tatooine">
      <label class="form-check-label" for="radio-${homeworld}">
      ${homeworld}
      </label>
    </div>
  </div>`;
  radıoİd.innerHTML += RadioElement;
}

let filterValue = null;
let rad = document.homeworlds_filter.homeworld;
let prev = null;
for (let i = 0; i < rad.length; i++) {
  rad[i].addEventListener("change", function () {
    filterValue = this.value;
    renderCharacters();
  });
}
//burası sıfırla butonunu radıoların içine ekler
const resetButton = document.createElement("button");
resetButton.textContent = "Sıfırla";
resetButton.onclick = resetSelection;

resetButton.style.padding = "10px 20px";
resetButton.style.backgroundColor = "#198754";
resetButton.style.color = "white";
resetButton.style.border = "none";
resetButton.style.borderRadius = "5px";
resetButton.style.cursor = "pointer";

// Butona hover efekti ekleyin
resetButton.addEventListener("mouseover", function () {
  this.style.backgroundColor = "#198754";
});

resetButton.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#198754";
});

radıoİd.appendChild(resetButton);

// ...

radıoİd.appendChild(resetButton);

function resetSelection() {
  // Radyo düğmelerinin seçimini temizle
  const homeworldRadios = document.querySelectorAll('input[name="homeworld"]');

  for (const radio of homeworldRadios) {
    radio.checked = false;
  }

  // filterValue'yu sıfırla
  filterValue = null;

  // renderCharacters(); // İhtiyaca bağlı olarak renderCharacters fonksiyonunu çağırın
}
