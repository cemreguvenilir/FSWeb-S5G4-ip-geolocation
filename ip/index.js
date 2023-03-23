//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

//1

/*axios
  .get("https://apis.ergineer.com/ipgeoapi/95.70.246.61")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));*/

function ipBilgisi(data) {
  const box = document.createElement("div");
  box.classList.add("card");

  const resim = document.createElement("img");
  resim.src = data.ülkebayrağı;

  const kartBilgisi = document.createElement("div");
  kartBilgisi.classList.add("card-info");

  const ipAdresi = document.createElement("h3");
  ipAdresi.classList.add("ip");
  ipAdresi.textContent = data.sorgu;

  const ulkeBilgisi = document.createElement("p");
  ulkeBilgisi.classList.add("ulke");
  ulkeBilgisi.textContent = (data.ülke, data.ülkeKodu);

  const enlemBoylam = document.createElement("p");
  enlemBoylam.textContent = "Enlem: " + data.enlem + " Boylam: " + data.boylam;

  const sehir = document.createElement("p");
  sehir.textContent = "Şehir: " + data.şehir;

  const saatDilimi = document.createElement("p");
  saatDilimi.textContent = "Saat dilimi: " + data.saatdilimi;

  const paraBirimi = document.createElement("p");
  paraBirimi.textContent = "Para birimi: " + data.parabirimi;

  const isp = document.createElement("p");
  isp.textContent = "ISP: " + data.isp;

  box.appendChild(resim);
  box.appendChild(kartBilgisi);
  kartBilgisi.appendChild(ipAdresi);
  kartBilgisi.appendChild(ulkeBilgisi);
  kartBilgisi.appendChild(enlemBoylam);
  kartBilgisi.appendChild(sehir);
  kartBilgisi.appendChild(saatDilimi);
  kartBilgisi.appendChild(paraBirimi);
  kartBilgisi.appendChild(isp);

  return box;
}

const kart = document.querySelector(".cards");

async function datayıAl() {
  await ipAdresimiAl();
  axios
    .get("https://apis.ergineer.com/ipgeoapi/" + benimIP)
    .then((response) => {
      kart.appendChild(ipBilgisi(response.data));
    })
    .catch((error) => console.log(error));
}
datayıAl();
