let hikayeOyunu = prompt(
  "Gizemli Mağara oyununu oynamaya ne dersin? Evet ya da hayır diyerek cevap verebilirsin"
);

if (hikayeOyunu == "evet") {
  console.log("hadi başlayalım!");
  let magaraOrTurnBack = prompt(
    "Bir akşamüstü, ormanın derinliklerinde yürürken, büyük ve eski bir mağara keşfediyorsun. Mağara ağzı karanlık ve içine doğru bir rüzgar esiyor. Macera dolu ruhun, seni bu mağarayı keşfetmeye zorluyor, ama içeri girmeden önce birkaç saniyelik bir tereddüt yaşıyorsun. İçeride ne bulacağını bilmiyorsun, ama bir şey seni içeri çekiyor. Önünde iki seçenek var. Seçenek 1: Mağaranın içine gir. Seçenek 2: Geri dön ve güvende kal"
  );
  if (magaraOrTurnBack == "seçenek 1") {
    let magara = prompt(
      "Mağaranın içine girdin. Karanlık seni korkutmasına rağmen, merakına yenik düşüp mağaraya adım atıyorsun. Derin bir nefes alıp ilerlemeye başlıyorsun. Mağara soğuk ve karanlık, ama bir süre sonra gözlerin karanlığa alışıyor. Duvarlarda tuhaf, eski semboller kazınmış. Ilerledikçe yerde parıldayan taşlar ve zamanla aşınmış heykellerle karşılaşıyorsun. Tam bu sırada, mağaranın içinde iki tünele ayrılan bir yol buluyorsun. Seçenek 1: Sol tüneli seç - Su damlalarının sesi geliyor. Seçenek 2: Sağ tüneli seç - Hafif bir ışık var"
    );
    if (magara == "seçenek 1") {
      let solTunel = prompt("Sol tüneli seçtin. Sol taraftaki tünelden su damlalarının yankılandığını duyuyorsun. Su, mağaranın derinliklerinden akıyor olabilir. Bu yol seni nereye götürecek merak ediyorsun. Sol tünelden ilerledikçe su damlalarının sesi artıyor. Tünelin sonunda küçük bir yeraltı nehriyle karşılaşıyorsun. Nehrin üzerinde eski ve kırılgan görünen bir köprü var. Su hızla akıyor ve oldukça derin görünüyor. Seçenek 1: Köprüyü geç. Seçenek 2: Suya atla ve yüzerek karşıya geç.");
      if (solTunel == "seçenek 1") {
        let kopru = prompt("Köprüyü geçmeyi seçtin. Köprü zayıf görünüyor ama hızlıca geçersen sana dayanabilir. Eğer karşı tarafa geçersen nehirden güvenle uzaklaşabilirsin. Köprüyü hızlıca geçmeye karar veriyorsun, ama tam ortasında tahta birden kırılıyor. Altındaki boşluk seni aşağı çekiyor ve nehirde buluyorsun kendini. Su seni sürüklüyor, ama son anda bir kayaya tutunup kendini yukarı çekiyorsun. Yorgun ve ıslak, ama hayattasın. İlerideki çıkıştan ışık sızıyor. Seçenek 1: Nehir boyunca ilerlemeye devam et. Seçenek 2: Geri dön ve güvenli bir yol bul.")
        if (kopru == 'seçenek 1') {
          let nehir = prompt('Nehir boyunca ilerlemeyi seçtin. Nehre atlayıp yüzmeye başlıyorsun. Su soğuk ama güçlü bir şekilde yüzüyorsun. Tam karşıya yaklaştığında suyun altında seni çeken güçlü bir akıntı hissediyorsun. Bir girdaba kapılmamak için son bir hamle yapman gerekiyor. Seçenek 1: Akıntıyla savaşmaya devam et. Seçenek 2: Akıntıya kendini bırak ve suyun seni nereye götüreceğini gör.');
          if(nehir == 'seçenek 1'){
            alert('Güçlü bir şekilde yüzüp akıntıya karşı koymayı seçiyorsun. 2. sezonda hikayenin devamını öğrenebileceksin... Oynadığın için teşekkürler.');
          }else if(nehir == 'seçenek 2'){
            alert('Suyla savaşmanın anlamsız olduğunu düşünüp kendini akıntıya bırakıyorsun. Bu akıntının seni nereye götüreceğini bilemesen de akışa teslim oluyorsun. 2. sezonda hikayenin devamını öğrenebileceksin... Oynadığın için teşekkürler.');
          }
        }else if(kopru == 'seçenek 2'){
          alert('Su çok tehlikeli. Daha güvenli bir yol bulmak için geri dönmeyi düşünüyorsun. 2. sezonda hikayenin devamını öğrenebileceksin... Oynadığın için teşekkürler.');
        }
      }else if(solTunel == "seçenek 2"){
        let su = prompt("Köprüye güvenemiyorsun. Su hızlı, ama iyi bir yüzücüsün. Nehirden yüzerek geçmenin daha güvenli olacağını düşünüyorsun. Seçenek 1: Akıntıyla savaşmaya devam et. Seçenek 2: Akıntıya kendini bırak ve suyun seni nereye götüreceğini gör.")
        if(su == 'seçenek 1'){
          alert('Güçlü bir şekilde yüzüp akıntıya karşı koymayı seçiyorsun. 2. sezonda hikayenin devamını öğrenebileceksin... Oynadığın için teşekkürler.')
        }else if(su == 'seçenek 2'){
          alert('Suyla savaşmanın anlamsız olduğunu düşünüp kendini akıntıya bırakıyorsun. Bu akıntının seni nereye götüreceğini bilemesen de akışa teslim oluyorsun. 2. sezonda hikayenin devamını öğrenebileceksin... Oynadığın için teşekkürler.')
        }
      }
    }else if (magara == 'seçenek 2'){
      let sagTunel = prompt("Sağ tüneli seçtin. Sağ tünele doğru ilerlediğinde ışığın kaynağına ulaşıyorsun. Bir grup eski lamba yere yayılmış ve bazıları hala titrek ışıklar saçıyor. Ama asıl dikkati çeken, yerde duran bir sandık. Üzerinde karmaşık mühürler var ve açılmak için bir çözüm bekliyor. Seçenek 1: Sandığı açmayı dene. Seçenek 2: Sandığı bırak ve daha fazla ilerle.");
      if (sagTunel == 'seçenek 1'){
        let sandik = prompt("Sandığı açmayı seçtin. Sandığı açmak için mühürleri zorlamaya çalışıyorsun. Zaman geçtikçe mühürlerden biri çözülüyor ve sandık ağır bir şekilde açılıyor. İçinde eski parşömenler, nadir taşlar ve bir anahtar buluyorsun. Bu anahtarın mağaranın derinliklerinde bir şeyin kapısını açtığını hissediyorsun. Şimdi ne yapacaksın? Seçenek 1: Anahtarı al ve tünelde ilerle. Seçenek 2: Sandığı kapat ve geri dön.");
        if (sandik = 'seçenek 1'){
          alert("Anahtarı alıp mağaranın derinliklerine gitmeye karar veriyorsun. Bu anahtar bir sırrı çözebilir. 2. sezonda hikayenin devamını öğrenebileceksin... Oynadığın için teşekkürler.")
        }
      }else if (sagTunel == 'seçenek 2'){
        alert("Sandık tehlikeli görünüyor. Zaman kaybetmeden tünele devam edip mağaranın derinliklerini keşfetmeye karar veriyorsun. 2. sezonda hikayenin devamını öğrenebileceksin... Oynadığın için teşekkürler.")
      }
    }
    
  }else if (magaraOrTurnBack == 'seçenek 2') {
    alert(
      "Geri dönüp güvenli kalmayı seçtin. Macera her zaman seni çekse de, bu kez geri dönmeye karar veriyorsun. Ormandan güvenli bir şekilde çıkıp eve dönmeyi planlıyorsun. Oyun bitti.."
    );
  }
} else {
  console.log("üzgünüm...");
}
