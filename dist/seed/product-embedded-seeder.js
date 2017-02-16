'use strict';

/* eslint max-len:0 */
/* eslint no-loop-func:0 */
var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookstore');

var products = [new Product({
  title: '451° по Фаренгейту',
  author: {
    name: 'Рей Бредбери',
    photo: 'bradbury.jpg'
  },
  genre: 'научная фантастика',
  thumbnail: '451po-farengeitu.jpg',
  description: 'Мастер мирового масштаба, совмещающий в литературе несовместимое. Создатель таких ярчайших шедевров, как \'Марсианские хроники\', \'451° по Фаренгейту\', \'Вино из одуванчиков\' и так далее и так далее. Лауреат многочисленных премий. Это Рэй Брэдбери. Его увлекательные истории прославили автора не только как непревзойденного рассказчика, но и как философа, мыслителя и психолога. Магический реализм его прозы, рукотворные механизмы радости, переносящие человека из настоящего в волшебные миры детства, чудо приобщения к великой тайне Литературы, щедро раздариваемое читателю, давно вывели Брэдбери на высокую классическую орбиту. Собранные в этой книге произведения - достойное тому подтверждение.',
  price: 9.99
}), new Product({
  title: 'Марсианские хроники',
  author: {
    name: 'Рей Бредбери',
    photo: 'bradbury.jpg'
  },
  genre: 'научная фантастика',
  thumbnail: 'marsianskie-khroniki.jpg',
  description: '\'Марсианские хроники\'\' - цикл новелл, принесших Рэю Бредбери мировую славу, - рассказывает о покорении человеком Красной планеты, где доживает свои последние годы некогда высокоразвитая цивилизация марсиан.',
  price: 9.99
}), new Product({
  title: 'Мастер и Маргарита',
  author: {
    name: 'Михаил Афанасьевич Булгаков',
    photo: 'bulgakov.jpg'
  },
  genre: 'проза',
  thumbnail: 'master-i-margarita.jpg',
  description: 'Один из самых загадочных и удивительных романов XX века. Роман \'Мастер и Маргарита\' - визитная карточка Михаила Афанасьевича Булгакова. Более десяти лет Булгаков работал над книгой, которая стала его романом-судьбой, романом-завещанием. В \'Мастере и Маргарите\' есть все: веселое озорство и щемящая печаль, романтическая любовь и колдовское наваждение, магическая тайна и безрассудная игра с нечистой силой.',
  price: 9.99
}), new Product({
  title: 'Морфий',
  author: {
    name: 'Михаил Афанасьевич Булгаков',
    photo: 'bulgakov.jpg'
  },
  genre: 'проза',
  thumbnail: 'morfiy.jpg',
  description: 'Литературная карьера выдающегося русского писателя XX столетия Михаила Афанасьевича Булгакова началась в 1919 году, когда он отказался от места земского врача и полностью посвятил себя творчеству. Однако именно благодаря опыту, приобретенному в прифронтовых госпиталях, а затем в сельской больнице, где недавний выпускник медицинского факультета Киевского университета, до изнеможения оперируя больных, пытался осмыслить собственное жизненное предназначение, сформировался Булгаков-писатель, с его особым чувством юмора и особым взглядом на зарождающуюся советскую действительность. Вошедший в настоящий сборник цикл рассказов \'Записки юного врача\' стал неким переходом для Булгакова от медицины к литературе. Также в сборник включены известная повесть \'Морфий\', в которой Булгаков с жестокой откровенностью описал все муки молодого доктора, пристрастившегося к пагубному зелью, и примыкающий к \'медицинскому\' циклу произведений Михаила Булгакова рассказ \'Необыкновенные приключения доктора\'.',
  price: 9.99
}), new Product({
  title: 'Собачье сердце',
  author: {
    name: 'Михаил Афанасьевич Булгаков',
    photo: 'bulgakov.jpg'
  },
  genre: 'проза',
  thumbnail: 'sobache-serdtse.jpg',
  description: '«Собачье сердце» – одно из самых любимых читателями произведений Михаила Булгакова. Рассказ о необыкновенном эксперименте гениального доктора. Москва, 1924 год. Профессор Филипп Филиппович Преображенский, выдающийся хирург, достиг отличных результатов в практическом омоложении. Продолжая исследования, он задумал небывалый эксперимент — операцию по пересадке собаке человеческого гипофиза и яичек с придатками и семенными канатиками. Выбранный в качестве подопытного животного бездомный пёс Шарик, подобранный им на улице, получил доступ в просторную квартиру профессора и отличное питание. Донором органов стал погибший в драке Клим Чугункин — вор, алкоголик и дебошир. Результаты операции превзошли ожидания...',
  price: 9.99
}), new Product({
  title: 'Утраченный символ',
  author: {
    name: 'Дэн Браун',
    photo: 'denbrown.jpg'
  },
  genre: 'Зарубежные детективы',
  thumbnail: 'utrachennyy-simvol.jpg',
  description: 'Приключения Роберта Лэнгдона продолжаются. На этот раз ему предстоит разгадать величайшую тайну масонов, которая способна изменить мир. Веками хранимые секреты, загадочные знаки и символы – и смертельно опасное путешествие по лабиринтам прошлого… ',
  price: 9.99
}), new Product({
  title: 'Код да Винчи',
  author: {
    name: 'Дэн Браун',
    photo: 'denbrown.jpg'
  },
  genre: 'Зарубежные детективы',
  thumbnail: 'kod-da-vinchi.jpg',
  description: 'Секретный код скрыт в работах Леонардо да Винчи… Только он поможет найти христианские святыни, дающие немыслимые власть и могущество… Ключ к величайшей тайне, над которой человечество билось веками, наконец может быть найден… Абсолютный бестселлер ХХI века!',
  price: 9.99
}), new Product({
  title: 'Точка обмана',
  author: {
    name: 'Дэн Браун',
    photo: 'denbrown.jpg'
  },
  genre: 'Зарубежные детективы',
  thumbnail: 'tochka-obmana.jpg',
  description: 'В Арктике обнаружен уникальный артефакт, способный раз и навсегда изменить будущее человечества. На место открытия отправляется научная экспедиция, цель которой - установить подлинность поразительной находки. Но вскоре после прибытия члены экспедиции начинают гибнуть один за другим. Кто - и почему - убивает их? Возможно, они подошли к разгадке тайны слишком близко?',
  price: 9.99
})];

function exit() {
  mongoose.disconnect();
}

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}
//# sourceMappingURL=product-embedded-seeder.js.map