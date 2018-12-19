class RusNorm {
    constructor(funcForRandom, nowText) {
      this.funcForRandom = funcForRandom;
      this.texts = [
      "абажур абак абзац абсурд авангард авокадо автобус автогонщик автоответчик автошкола ага агава агат агнец агония аграрий агрегат агрессия агроном ад ада адмирал адонис адреналин адъютант азалия азбука азимут азон азон аква акр акрил аксессуар амеба амфора амулет анекдот анклав апаш апрель аптека ария аромат арык асс асбест аскет атмосфера атака атаман ату ау аудит афганец афелий афро ах ахинея ацетон ацтек аэросани аэростат",
      "баба багаж багет багор балерина балет бег бегемот бегство биоробот бинт бицепс благо блеф блеск блуза боа боб бобр бог болото боль боец бой бор борт бра бриг бригантина бриз брикет бриллиант бритва брифинг брод бродяга брожение бром броня бронза бронхит брус брусника брусья брызги брюки бубен будка будни будуар бук буква букет булка бумага бунт бур буря бут буфет бухгалтер бухта бювет бюджет бюллетень бюро бюрократ бюст бязь",
      "валик вата вар ванна вахта ветер веник веселье велюр вепрь ветка велосипед велотрек взор вздох винт вина вис вираж внимание вода вожак вождь воз возврат вой воин война войско вокзал вол волан волк воля вопрос вор восток восторг восход вотчина вояка враг время встреча вторник вурдалак вход въезд вы выбор выдра вызов выключатель вымпел вымя выпь высь высота выхухоль вышка вышивка",
      "гагара гаврош гад газ гайка гак галка гамма гвоздь гейзер гелий гель гены география герб герпес герц герцог гетман гетры гиена гимн гипюр гирлянда гиря гитара глагол гладь глаз глас глубина глыба глюкоза глянец гном гну гобелен говор голос горох город год голод горчица гость гот грация грусть грех гриль гром грызун грязь грядка губы гудок гул гумус гусь гусар гусли гуща гяур",
      "да дар дача дань даль дама два двадцать двенадцать дверь двести движение двор девушка дед дежавю действие декада дело делец день депо дети деятель джаз джин джип джоуль диета дива дизель дикарь диллер диод диплом дичь длина дно дни дом дол дорога дока дочь доска добро друг драчун драп драма дрозд душа дума дуло дупло дуга дуб дуда дух дыня дыра дыба дым дьяк дюна дядя дятел",
      "егерь евнух евро евангелие егоза еда единица единорог едок ежевика езда езуит елей ель ельник енот епархия епанча епископ ералаш ересь еретик ерик ермолка ерунда естество естествоиспытатель ефрейтор ехидна печь тесто место речь леска ветер метр леденец берёза рея шея змея кедр кеды лето место невеста нерест перо речка редька ремонт сев семь тень терем фея ферма хек чек человек щека щенок ягель",
      "жаба жаворонок жажда жакет жара жатва жалкий жандарм жадность жасмин жбан жвачка жгут ждать жевать жезл желание желчь желтый желток желудок желудь жемчуг жена жених женщина женьшень жердь жерло жеребенок жернов жертва жест жесть жестянка жестокий жетон жжение живот живость живность жидкость жижа жизнь жила жимолость жир жираф жито житница житель жмурки жмых жнец жокей жом жонглер жрица жребий жрец жук жулик журнал жюри",
      "забава забор забота задор заяц звёзда звук зима зло зной зоотехник зоб зонд зонт зоопарк зуд зуб зов зал зелень зебра замок застава заря зарево бензин газ фаза база роза доза коза козак рюкзак запад мороз розетка ваза джаз заноза лоза низ поза знак зодиак змея земля цезий язва изверг изотоп зерно зверь засуха зяблик",
      "ибис ива ивняк иврит иволга игла иго игра игуана игумен идеал идеалист идея идеолог идиш идол иена иждивенец изба избушка изверг изгой измена износ изьян икота икра икс ил имам имущество имя информация инвентарь индиго инсулин инъекция инь иней инженер ион ипподром ирис ибис ислам истребитель история истукан искра исход исцеление итог ихтиозавр ишак ищейка июнь июль",
      "кабала камбала кадка каёмка капель камбала камбуз кара каноэ капкан каратэ каста каток кафе каша кета кеды клей клавиатура кнопка книга кнут контакт коммуникатор кора кожа корь кобра компьютер кофе коса кошка косьба колос кокос крест кран крыса кровь кросс кукушка курица куча кумыс купол курорт купель купорос кунак кудри кусок"
      ]
      this.nowNumber = Math.floor(Math.random() * this.texts.length);
      this.nowText = nowText;
    }
  
    get getText() {
      return funcForRandom(this.nowNumber, this.texts, this.nowText);
    }
  
  
  }