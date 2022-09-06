// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const axios = require("axios");
let exchangerate = {};
function Exchangerate() {
  axios
    .get("https://api.exchangerate.host/latest?base=USD")
    .then((res) => {
      exchangerate = res.data.rates;
    })
    .catch((error) => {
      console.error(error);
    });
}
Exchangerate();

// make database imgs served
const path = require("path");
app.use(express.static(path.join(__dirname, "fruits")));
app.use(express.static(path.join(__dirname, "team")));
app.use(express.static(path.join(__dirname, "news")));
app.use(express.static(path.join(__dirname, "farmers")));

const baseURL = "http://localhost:3000/";
const fruits = [
  {
    fruitId: 1,
    fruitName: "Apple",
    fruitPrice: 1.32,
    fruitImg: `${baseURL}Apple.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 2,
    fruitName: "Apricot",
    fruitPrice: 2.64,
    fruitImg: `${baseURL}apricot.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 3,
    fruitName: "Avocado",
    fruitPrice: 1.7,
    fruitImg: `${baseURL}avocado.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 4,
    fruitName: "Banana",
    fruitPrice: 0.62,
    fruitImg: `${baseURL}banana.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 5,
    fruitName: "Blackberry",
    fruitPrice: 10.17,
    fruitImg: `${baseURL}blackberry.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 6,
    fruitName: "Blueberry",
    fruitPrice: 1.78,
    fruitImg: `${baseURL}bluberry.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 7,
    fruitName: "Boysenberry",
    fruitPrice: 24.99,
    fruitImg: `${baseURL}boysenberry.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 8,
    fruitName: "Cantaloupe",
    fruitPrice: 2.97,
    fruitImg: `${baseURL}canteloupe.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 9,
    fruitName: "Clementine",
    fruitPrice: 5.37,
    fruitImg: `${baseURL}clementine.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 10,
    fruitName: "Date-Palm",
    fruitPrice: 16.48,
    fruitImg: `${baseURL}date-palm.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 11,
    fruitName: "Dragonfruit",
    fruitPrice: 28,
    fruitImg: `${baseURL}dragon-fruit.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 12,
    fruitName: "Elderberry",
    fruitPrice: 9.5,
    fruitImg: `${baseURL}elderberry.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 13,
    fruitName: "Fig",
    fruitPrice: 3.729,
    fruitImg: `${baseURL}fig.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 14,
    fruitName: "Grape",
    fruitPrice: 1.25,
    fruitImg: `${baseURL}grape.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 15,
    fruitName: "Guava",
    fruitPrice: 5.48,
    fruitImg: `${baseURL}guava.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 16,
    fruitName: "Kiwi",
    fruitPrice: 2.75,
    fruitImg: `${baseURL}kiwi.jpg`,
    fruitSale: 0,
  },
  {
    fruitId: 17,
    fruitName: "Strawberry",
    fruitPrice: 2.75,
    fruitImg: `${baseURL}Strawberry.jpg`,
    fruitSale: 30,
  },
];

let fruitsNamesAR = [
  {
    name: "Apple",
    translate: "تفاح",
  },
  {
    name: "Apricot",
    translate: "مشمش",
  },
  ,
  {
    name: "Avocado",
    translate: "أفوكادو",
  },
  ,
  {
    name: "Banana",
    translate: "موز",
  },
  ,
  {
    name: "Blackberry",
    translate: "بلاك بيري",
  },
  ,
  {
    name: "Blueberry",
    translate: "توت بري",
  },
  ,
  {
    name: "Boysenberry",
    translate: "بويزنبيري",
  },
  ,
  {
    name: "Cantaloupe",
    translate: "الشمام",
  },
  ,
  {
    name: "Clementine",
    translate: "كليمنتين",
  },
  ,
  {
    name: "Date-Palm",
    translate: "بلح",
  },
  ,
  {
    name: "Dragonfruit",
    translate: "فاكهة التنين",
  },
  ,
  {
    name: "Elderberry",
    translate: "إلدربيري",
  },
  ,
  {
    name: "Fig",
    translate: "تين",
  },
  ,
  {
    name: "Grape",
    translate: "عنب",
  },
  ,
  {
    name: "Guava",
    translate: "جوافة",
  },
  ,
  {
    name: "Kiwi",
    translate: "كيوي",
  },
  ,
  {
    name: "strawberry",
    translate: "فراولة",
  },
];

let fruitsNamesEN = [
  {
    name: "Apple",
    translate: "Apple",
  },
  {
    name: "Apricot",
    translate: "Apricot",
  },
  ,
  {
    name: "Avocado",
    translate: "Avocado",
  },
  ,
  {
    name: "Banana",
    translate: "Banana",
  },
  ,
  {
    name: "Blackberry",
    translate: "Blackberry",
  },
  ,
  {
    name: "Blueberry",
    translate: "Blueberry",
  },
  ,
  {
    name: "Boysenberry",
    translate: "Boysenberry",
  },
  ,
  {
    name: "Cantaloupe",
    translate: "Cantaloupe",
  },
  ,
  {
    name: "Clementine",
    translate: "Clementine",
  },
  ,
  {
    name: "Date-Palm",
    translate: "Date Palm",
  },
  ,
  {
    name: "Dragonfruit",
    translate: "Dragonfruit",
  },
  ,
  {
    name: "Elderberry",
    translate: "Elderberry",
  },
  ,
  {
    name: "Fig",
    translate: "Fig",
  },
  ,
  {
    name: "Grape",
    translate: "Grape",
  },
  ,
  {
    name: "Guava",
    translate: "Guava",
  },
  ,
  {
    name: "Kiwi",
    translate: "Kiwi",
  },
  ,
  {
    name: "strawberry",
    translate: "strawberry",
  },
];

let fruitBenefits = [
  {
    fruitId: 1,
    benefitHeaderEN: "Apple protects your heart",
    benefitDescriptionEN:
      "Multiple studies show apples are good for your ticker-in multiple ways. Their high fiber content has been shown to help improve cholesterol levels (lowering bad LDL cholesterol and increasing good HDL cholesterol). A new small clinical trial found subjects who ate 2 apples a day for 8 weeks had significantly lower LDL cholesterol levels than those who didn't eat the fruit. The researchers cite apples' fiber, but also polyphenols—you benefit from whole fruit's nutrients working together.",
    benefitHeaderAR: "التفاح تحمي قلبك",
    benefitDescriptionAR:
      "أظهرت دراسات متعددة أن التفاح مفيد لشركتك بطرق متعددة. لقد ثبت أن محتواها العالي من الألياف يساعد في تحسين مستويات الكوليسترول (خفض الكوليسترول الضار LDL وزيادة الكوليسترول الجيد HDL). وجدت تجربة سريرية صغيرة جديدة أن الأشخاص الذين تناولوا تفاحتين يوميًا لمدة 8 أسابيع لديهم مستويات كوليسترول LDL أقل بشكل ملحوظ من أولئك الذين لم يأكلوا الفاكهة. يستشهد الباحثون بألياف التفاح ، ولكن أيضًا البوليفينول - تستفيد من العناصر الغذائية الكاملة للفاكهة التي تعمل معًا.",
  },
  {
    fruitId: 2,
    benefitHeaderEN: "Apricot are Good Source of Vitamin A",
    benefitDescriptionEN:
      "Apricots are packed with Vitamin A, which is also known as retinol. It's fat soluble, and helps in the enhancement of vision, among other things. And it keeps the immune system in check, protecting your skin in the process. Retinol and Beta Carotene (also present in apricots) also reduces the chances of you developing a serious eye-related disorder called Neovascular ARMD – an age-related macular degeneration that causes loss of vision over the years.",
    benefitHeaderAR: "المشمش مصدر جيد لفيتامين أ",
    benefitDescriptionAR:
      "يحتوي المشمش على فيتامين أ ، المعروف أيضًا باسم الريتينول. إنه قابل للذوبان في الدهون ، ويساعد في تعزيز الرؤية ، من بين أمور أخرى. وتحافظ على نظام المناعة تحت السيطرة ، وتحمي بشرتك في هذه العملية. كما يقلل الريتينول وبيتا كاروتين (الموجودان أيضًا في المشمش) من فرص الإصابة باضطراب خطير مرتبط بالعين يسمى ARMD - وهو الضمور البقعي المرتبط بالعمر الذي يسبب فقدان الرؤية على مر السنين.",
  },
  {
    fruitId: 3,
    benefitHeaderEN: "Avocado are Healthy for the heart",
    benefitDescriptionEN:
      "In every 100 g of avocado there are 76 milligramsTrusted Source of a natural plant sterol called beta sitosterol. Regularly consuming beta sitosterol and other plant sterols may help maintain healthy cholesterol levels, which are important for heart health.",
    benefitHeaderAR: "الأفوكادو صحي للقلب",
    benefitDescriptionAR:
      "يوجد في كل 100 جرام من الأفوكادو 76 ملليجرام مصدر موثوق من ستيرول نبات طبيعي يسمى بيتا سيتوستيرول. قد يساعد تناول بيتا سيتوستيرول وغيره من الستيرولات النباتية بانتظام في الحفاظ على مستويات الكوليسترول الصحية ، والتي تعد مهمة لصحة القلب.",
  },
  {
    fruitId: 4,
    benefitHeaderEN: "Bananas are one of the best fruit sources of vitamin B6​",
    benefitDescriptionEN:
      "Vitamin B6 from bananas is easily absorbed by your body and a medium-sized banana can provide about a quarter of your daily vitamin B6 needs.",
    benefitHeaderAR: "يعتبر الموز من أفضل مصادر الفاكهة لفيتامين ب 6",
    benefitDescriptionAR:
      "تص جسمك فيتامين ب 6 من الموز بسهولة ويمكن أن توفر موزة متوسطة الحجم حوالي ربع احتياجاتك اليومية من فيتامين ب 6.",
  },
  {
    fruitId: 5,
    benefitHeaderEN: "Blackberry are packed with vitamin C",
    benefitDescriptionEN:
      "Just one cup of raw blackberries has 30.2 milligramsTrusted Source of vitamin C. That's half the daily recommended value. Vitamin C is integral to collagen formation in bones, connective tissue, and blood vessels",
    benefitHeaderAR: "البلاك بيري مليء بفيتامين سي",
    benefitDescriptionAR:
      "كوب واحد فقط من العليق الخام يحتوي على 30.2 ملليغرام مصدر موثوق لفيتامين سي وهذا نصف القيمة اليومية الموصى بها. فيتامين ج جزء لا يتجزأ من تكوين الكولاجين في العظام والأنسجة الضامة والأوعية الدموية",
  },
  {
    fruitId: 6,
    benefitHeaderEN: "Blueberries Are Low in Calories But High in Nutrients",
    benefitDescriptionEN:
      "The blueberry bush (Vaccinium sect. Cyanococcus) is a flowering shrub that produces berries with a bluish, purple hue — also known as blueberries.",
    benefitHeaderAR:
      "العنب البري منخفض السعرات الحرارية ولكنه غني بالعناصر الغذائية",
    benefitDescriptionAR:
      "شجيرة العنبية (Vaccinium section. Cyanococcus) هي شجيرة مزهرة تنتج التوت بلون أرجواني مزرق - يُعرف أيضًا باسم العنب البري.",
  },
  {
    fruitId: 7,
    benefitHeaderEN: "Boysenberry are Maintain a healthy blood pressure",
    benefitDescriptionEN:
      "Boysenberries have phenomenal potassium to sodium ratio, which can contribute to reduce the risk of hypertension. One cup of boysenberries contains 183 milligrams of potassium, compared to 1.3 milligrams of sodium. This helps the blood vessels relax and maintains proper blood pressure. Apart from that high potassium diet reduces strain on the heart and increases overall cardiovascular health.",
    benefitHeaderAR: "بويزنبيري هي الحفاظ على ضغط دم صحي",
    benefitDescriptionAR:
      "يحتوي التوت البري على نسبة هائلة من البوتاسيوم إلى الصوديوم ، والتي يمكن أن تسهم في تقليل مخاطر ارتفاع ضغط الدم. كوب واحد من توت العليق يحتوي على 183 ملليغرام من البوتاسيوم ، مقارنة بـ 1.3 ملليغرام من الصوديوم. هذا يساعد الأوعية الدموية على الاسترخاء ويحافظ على ضغط الدم المناسب. بصرف النظر عن هذا النظام الغذائي الغني بالبوتاسيوم ، يقلل الضغط على القلب ويزيد من صحة القلب والأوعية الدموية بشكل عام.",
  },
  {
    fruitId: 8,
    benefitHeaderEN: "Cantaloupe are low in carbs",
    benefitDescriptionEN:
      "Cantaloupes are 90% water. That's almost as juicy as a watermelon. The high amount of liquid content gives cantaloupes a low glycemic load score of 4. That means your body digests it slowly and it won’t make your blood sugar spike. So it's a great pick for people with diabetes.",
    benefitHeaderAR: "الشمام منخفض الكربوهيدرات",
    benefitDescriptionAR:
      "الشمام 90٪ ماء. هذا تقريبا مثل البطيخ. تعطي الكمية العالية من المحتوى السائل للشمام درجة تحميل منخفضة لنسبة السكر في الدم تبلغ 4. وهذا يعني أن جسمك يهضمه ببطء ولن يؤدي إلى ارتفاع نسبة السكر في الدم. لذلك فهو اختيار رائع لمرضى السكري.",
  },
  {
    fruitId: 9,
    benefitHeaderEN: "Clementine are Cancer prevention",
    benefitDescriptionEN:
      "Clementines contain high levels of antioxidants, such as vitamin C, which play an important role in reducing inflammation. Research links excessive inflammation to several types of cancer. Diets high in anti-inflammatory foods, like clementines, may reduce the likelihood of developing cancer.",
    benefitHeaderAR: "كليمنتين هي الوقاية من السرطان",
    benefitDescriptionAR:
      "يحتوي الكلمنتين على مستويات عالية من مضادات الأكسدة ، مثل فيتامين سي ، والتي تلعب دورًا مهمًا في تقليل الالتهاب. تربط الأبحاث بين الالتهاب المفرط وأنواع عديدة من السرطان. قد تقلل الأنظمة الغذائية الغنية بالأطعمة المضادة للالتهابات ، مثل الكليمنتين ، من احتمالية الإصابة بالسرطان.",
  },
  {
    fruitId: 10,
    benefitHeaderEN: "Date Palm are High in Fiber",
    benefitDescriptionEN:
      "With almost 7 grams of fiber in a 3.5-ounce serving, including dates in your diet is a great way to increase your fiber intake.",
    benefitHeaderAR: "نخيل التمر غني بالألياف",
    benefitDescriptionAR:
      "ع ما يقرب من 7 غرامات من الألياف في 3.5 أونصة ، بما في ذلك التمر في نظامك الغذائي هو وسيلة رائعة لزيادة كمية الألياف التي تتناولها.",
  },
  {
    fruitId: 11,
    benefitHeaderEN: "Dragonfruit are High in Nutrients",
    benefitDescriptionEN:
      "Dragon fruit is low in calories but packed with essential vitamins and minerals. It also contains a substantial amount of dietary fiber.",
    benefitHeaderAR: "دراغون فروت غنية بالمغذيات",
    benefitDescriptionAR:
      "فاكهة التنين منخفضة السعرات الحرارية ولكنها مليئة بالفيتامينات والمعادن الأساسية. كما أنه يحتوي على كمية كبيرة من الألياف الغذائية.",
  },
  {
    fruitId: 12,
    benefitHeaderEN: "Elderberry Fighting colds and flu",
    benefitDescriptionEN:
      "There is some evidence to support the claim that elderberry can help treat colds and flu, though the available studies are small.",
    benefitHeaderAR: "إلدربيري مكافحة نزلات البرد والانفلونزا",
    benefitDescriptionAR:
      "هناك بعض الأدلة التي تدعم الادعاء بأن البلسان يمكن أن يساعد في علاج نزلات البرد والإنفلونزا ، على الرغم من أن الدراسات المتاحة قليلة.",
  },
  {
    fruitId: 13,
    benefitHeaderEN: "Fig Reduce High Blood Pressure",
    benefitDescriptionEN:
      "High blood pressure, also known as hypertension, can lead to complications like heart disease and stroke. One factor that leads to high blood pressure is a potassium imbalance caused by eating too much sodium and not enough potassium.",
    benefitHeaderAR: "التين يقلل من ارتفاع ضغط الدم",
    benefitDescriptionAR:
      "يمكن أن يؤدي ارتفاع ضغط الدم ، المعروف أيضًا باسم ارتفاع ضغط الدم ، إلى مضاعفات مثل أمراض القلب والسكتة الدماغية. أحد العوامل التي تؤدي إلى ارتفاع ضغط الدم هو اختلال توازن البوتاسيوم الناتج عن تناول الكثير من الصوديوم وعدم كفاية البوتاسيوم.",
  },
  {
    fruitId: 14,
    benefitHeaderEN: "Grape May help lower blood pressure",
    benefitDescriptionEN:
      "One cup (151 grams) of grapes contains 6% of the DV for potassium. This mineral is necessary for maintaining healthy blood pressure levels",
    benefitHeaderAR: "العنب قد يساعد في خفض ضغط الدم",
    benefitDescriptionAR:
      "كوب واحد (151 جرام) من العنب يحتوي على 6٪ من DV للبوتاسيوم. هذا المعدن ضروري للحفاظ على مستويات ضغط الدم الصحية",
  },
  {
    fruitId: 15,
    benefitHeaderEN: "Guava May Help Lower Blood Sugar Levels",
    benefitDescriptionEN:
      "everal test-tube and animal studies found that guava leaf extract improved blood sugar levels, long-term blood sugar control, and insulin resistance",
    benefitHeaderAR: "قد تساعد الجوافة في خفض مستويات السكر في الدم",
    benefitDescriptionAR:
      "وجدت الدراسات التي أجريت على أنابيب الاختبار والحيوانات أن مستخلص أوراق الجوافة يحسن مستويات السكر في الدم ، والتحكم في نسبة السكر في الدم على المدى الطويل ، ومقاومة الأنسولين.",
  },
  {
    fruitId: 16,
    benefitHeaderEN: "Kiwi are Excellent source of beneficial plant compounds",
    benefitDescriptionEN:
      "In addition to containing the antioxidant nutrients vitamin C and vitamin E, kiwis are an excellent source of plant compounds that have antioxidant and anti-inflammatory effects in the body.",
    benefitHeaderAR: "الكيوي مصدر ممتاز للمركبات النباتية المفيدة",
    benefitDescriptionAR:
      "In addition to containing the antioxidant nutrients vitamin C and vitamin E, kiwis are an excellent source of plant compounds that have antioxidant and anti-inflammatory effects in the body.",
  },
  {
    fruitId: 17,
    benefitHeaderEN: "Strawberry are Ellagitannins and ellagic acid",
    benefitDescriptionEN:
      "Strawberries are consistently ranked among the top sources of phenolic antioxidants — with levels 2–11 times greater than other fruits",
    benefitHeaderAR: "الفراولة هي إلاجيتانينز وحمض الإيلاجيك",
    benefitDescriptionAR:
      "تُصنف الفراولة باستمرار على أنها من بين أفضل مصادر مضادات الأكسدة الفينولية - بمستويات 2-11 مرة أكبر من الفواكه الأخرى",
  },
];
let saleFruit = {
  fruitId: 17,
  fruitName: "strawberry",
  fruitPrice: 2.75,
  fruitImg: `${baseURL}Strawberry.jpg`,
  firstSaleImg: `${baseURL}strawperry-offer.jpg`,
  secondSaleImg: `${baseURL}strawperry-offer1.jpg`,
  fruitSale: 30,
};

let team = [
  {
    name: "Saira-Hakim",
    job: "Local-shop-owner",
    image: `${baseURL}Saira-Hakim.png`,
    describe:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    name: "David-Niph",
    job: "Local-shop-owner",
    image: `${baseURL}David-Niph.png`,
    describe:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    name: "Jacob-Sikim",
    job: "Local-shop-owner",
    image: `${baseURL}Jacob-Sikim.png`,
    describe:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
];

let news = [
  {
    id: 1,
    title: "You will vainly look for fruit on it in autumn.",
    createdBy: "Admin",
    img: `${baseURL}news-bg-1.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 2,
    title: "A man's worth has its season, like tomato.",
    createdBy: "Admin",
    img: `${baseURL}news-bg-2.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 3,
    title: "Good thoughts bear good fresh juicy fruit.",
    createdBy: "Admin",
    img: `${baseURL}news-bg-3.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 4,
    title: "Fall in love with the fresh orange",
    createdBy: "Admin",
    img: `${baseURL}news-bg-4.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 5,
    title: "Why the berries always look delecious",
    createdBy: "Admin",
    img: `${baseURL}news-bg-5.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
  {
    id: 6,
    title: "Love for fruits are genuine of John Doe",
    createdBy: "Admin",
    img: `${baseURL}news-bg-6.jpg`,
    date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
    text: "news-Lorem",
  },
];

let comments = [
  {
    newsID: 1,
    comment: [
      {
        id: "1",
        createdBy: "Jenny Joe",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [
          {
            id: "1",
            createdBy: "Simon Soe",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
          },
        ],
      },
      {
        id: "2",
        createdBy: "Addy Aoe",
        img: `${baseURL}David-Niph.png`,
        date: new Date(),
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [],
      },
    ],
  },
  {
    newsID: 2,
    comment: [
      {
        id: "1",
        createdBy: "Alvena Conroy",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [
          {
            id: "1",
            createdBy: "Armand Pagac",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
          },
        ],
      },
      {
        id: "2",
        createdBy: "Ross Predovic",
        img: `${baseURL}David-Niph.png`,
        date: new Date(),
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [],
      },
    ],
  },
  {
    newsID: 3,
    comment: [
      {
        id: "1",
        createdBy: "Chelsey Krajcik",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [
          {
            id: "1",
            createdBy: "Emil Murphy",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
          },
        ],
      },
      {
        id: "2",
        createdBy: "Allie Lebsack",
        img: `${baseURL}David-Niph.png`,
        date: new Date(),
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [],
      },
    ],
  },
  {
    newsID: 4,
    comment: [
      {
        id: "1",
        createdBy: "Jenny Joe",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [
          {
            id: "1",
            createdBy: "Simon Soe",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
          },
        ],
      },
      {
        id: "2",
        createdBy: "Addy Aoe",
        img: `${baseURL}David-Niph.png`,
        date: new Date(),
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [],
      },
    ],
  },
  {
    newsID: 5,
    comment: [
      {
        id: "1",
        createdBy: "Alvena Conroy",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [
          {
            id: "1",
            createdBy: "Armand Pagac",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
          },
        ],
      },
      {
        id: "2",
        createdBy: "Ross Predovic",
        img: `${baseURL}David-Niph.png`,
        date: new Date(),
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [],
      },
    ],
  },
  {
    newsID: 6,
    comment: [
      {
        id: "1",
        createdBy: "Chelsey Krajcik",
        img: `${baseURL}Saira-Hakim.png`,
        date: "Thu Mar 24 2022 00:48:31",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [
          {
            id: "1",
            createdBy: "Emil Murphy",
            img: `${baseURL}Jacob-Sikim.png`,
            date: "Tue Jun 11 2019 05:23:59 GMT+0200 (Eastern European Standard Time)",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
          },
        ],
      },
      {
        id: "2",
        createdBy: "Allie Lebsack",
        img: `${baseURL}David-Niph.png`,
        date: new Date(),
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        reply: [],
      },
    ],
  },
];

let subscribes = [];
let coupons = ["12345", "0000", "1234", "1111"];

let farmers = [
  {
    id: 1,
    name: "Jimmy-Doe",
    title: "farmer",
    img: `${baseURL}Jimmy-Doe.jpg`,
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 2,
    name: "Marry-Doe",
    title: "farmer",
    img: `${baseURL}Marry-Doe.jpg`,
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    id: 3,
    name: "Simon-Joe",
    title: "farmer",
    img: `${baseURL}Simon-Joe.jpg`,
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
];

app.get("/exchangerate", function (req, res) {
  if (Object.keys(exchangerate).length !== 0) {
    res.json({
      status: "success",
      base: "USD",
      exchangerate: exchangerate,
    });
  } else {
    res.json({
      status: "eror",
    });
  }
});

// get fruits by page size and page number
app.get("/fruits", function (req, res) {
  let fruitsCopy = JSON.parse(JSON.stringify(fruits));
  let pageSize = req.query.pageSize;
  let pageNumber = req.query.pageNumber;
  let search = req.query.search;
  if (search) {
    // take copy of fruit array
    // then search for the names of fruits to search text based of language
    // then hold the result on an array
    // then filter the copy of the fruits array to the result array
    // then push the result to final array and send it back to user
    lang = req.query.lang;
    resultArray = [];
    if (lang == "ar") {
      filteredFruitsNamesArrayAR = fruitsNamesAR.filter((fruit) =>
        fruit.translate.includes(search)
      );
      filteredFruitsNamesArrayAR.forEach((element) => {
        resultArray.push(
          ...fruitsCopy.filter((fruit) =>
            fruit.fruitName.includes(element.name)
          )
        );
      });
    } else {
      filteredFruitsNamesArrayEN = fruitsNamesEN.filter((fruit) =>
        fruit.translate.includes(search)
      );
      filteredFruitsNamesArrayEN.forEach((element) => {
        resultArray.push(
          ...fruitsCopy.filter((fruit) =>
            fruit.fruitName.includes(element.name)
          )
        );
      });
    }
    fruitsCopy = resultArray;
  }
  let pagesCount = Math.ceil(fruitsCopy.length / pageSize);
  let fruitArrayStart = pageSize * (pageNumber - 1);
  let fruitArrayend = pageSize * pageNumber;
  if (pageNumber > pagesCount) {
    res.json({
      status: "error",
      fruits: "there is no more fruits",
    });
  } else {
    res.json({
      status: "success",
      pagesCount: pagesCount,
      fruits: fruitsCopy.slice(fruitArrayStart, fruitArrayend),
    });
  }
});

// get fruits by page size and page number
app.get("/fruit", function (req, res) {
  const fruitId = parseInt(req.query.fruitId);
  let fruit = fruits.find((x) => x.fruitId === fruitId);
  let fruitBenefit = fruitBenefits.find((x) => x.fruitId === fruitId);
  if (fruit) {
    res.json({
      status: "success",
      fruit: fruit,
      fruitBenefit: fruitBenefit,
    });
  } else {
    res.json({
      status: "error",
      fruit: "sorry can't find this fruit",
    });
  }
});

app.get("/sale-fruit", function (req, res) {
  res.json({
    status: "success",
    saleEndTime: 184600000,
    saleFruit: saleFruit,
  });
});

app.get("/all-fruits", function (req, res) {
  res.json({
    status: "success",
    fruits: fruits,
  });
});

app.get("/team", function (req, res) {
  res.json({
    status: "success",
    team: team,
  });
});

app.get("/news", function (req, res) {
  let pageSize = req.query.pageSize;
  let pageNumber = req.query.pageNumber;
  let pagesCount = Math.ceil(news.length / pageSize);
  let newsArrayStart = pageSize * (pageNumber - 1);
  let newsArrayend = pageSize * pageNumber;
  if (pageNumber > pagesCount) {
    res.json({
      status: "error",
      fruits: "there is no more fruits",
    });
  } else {
    res.json({
      status: "success",
      pagesCount: pagesCount,
      news: news.slice(newsArrayStart, newsArrayend),
    });
  }
});

app.get("/single-news", function (req, res) {
  const newsID = parseInt(req.query.id);
  let comment = comments.find((x) => x.newsID === newsID);
  let singleNews = news.find((x) => x.id === newsID);
  if (comment) {
    res.json({
      status: "success",
      singleNews: singleNews,
      comments: comment,
    });
  } else {
    res.json({
      status: "error",
      singleNews: "there is not singleNews",
    });
  }
});

app.post("/submit-comment", function (req, res) {
  const body = JSON.parse(req.body.comment);
  const Name = body.Name;
  // const Email = body.Email;
  const Message = body.Message;
  const targetedComment = comments.find(
    (comment) => comment.newsID == req.query.newsID
  ).comment;
  const comment = {
    id: (targetedComment.length + 1).toString(),
    createdBy: Name,
    img: "",
    date: new Date(),
    text: Message,
    reply: [],
  };
  targetedComment.push(comment);
  return res.json({
    status: "success",
    details: "user comment successfuly",
  });
});

app.post("/submit-reply", function (req, res) {
  const newsID = req.query.newsID;
  const commentID = req.query.commentID;
  const body = JSON.parse(req.body.reply);
  const Name = body.Name;
  // const Email = body.Email;
  const Message = body.Message;
  const targetedReply = comments
    .find((comment) => comment.newsID == newsID)
    .comment.find((cmt) => cmt.id === commentID).reply;
  const reply = {
    id: (targetedReply.length + 1).toString(),
    createdBy: Name,
    img: "",
    date: new Date(),
    text: Message,
    reply: [],
  };
  targetedReply.push(reply);
  return res.json({
    status: "success",
    details: "user reply successfuly",
  });
});

// subscribe by id
app.post("/subscribe", function (req, res) {
  const email = JSON.parse(req.body.email);
  subscribes.push(email);
  return res.json({
    status: "success",
    details: "user subscribe successfuly",
  });
});

app.post("/coupon", function (req, res) {
  const coupon = JSON.parse(req.body.coupon);
  if (coupons.find((item) => item === coupon)) {
    return res.json({
      status: "success",
      discount: 10,
    });
  } else {
    return res.json({
      status: "error",
      discount: 0,
    });
  }
});

app.post("/placeOrder", function (req, res) {
  return res.json({
    status: "success",
  });
});

app.get("/farmers", function (req, res) {
  return res.json({
    status: "success",
    farmers: farmers,
  });
});

app.get("/", function (req, res) {
  res.json({
    status: "erorr",
    res: "enter valid api",
  });
});

// var requestURL = 'https://api.exchangerate.host/latest?base=USD';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   var response = request.response;
//   console.log(response);
// }

app.listen(process.env.PORT || 3000);
