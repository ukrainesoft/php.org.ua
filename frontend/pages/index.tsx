import Base from '../components/base'
import CodeRunner from '../editor/CodeRunner'

const defaultCode = `<?php
$words = [
    "Доброго",
    "вечора,",
    "ми",
    "з",
    "України 🇺🇦!"
];
echo implode(" ", $words)."\\n";
`

export default () => (
  <Base title="PHP Українською">
    <div className="flex flex-col items-center bg-opacity-10 bg-repeat">
      <div className="flex flex-row text-center items-center justify-center align-bottom">
        <div className="text-9xl font-logo italic text-sky-600 dark:text-sky-500 mt-5 font-bold w-full">
          php
        </div>
      </div>
      <div className=" text-sky-700 dark:text-sky-500 text-center m-5 dark:bg-black bg-white">
        Тут ви оволодієте навичками PHP розробника
      </div>

      <div className="flex flex-col w-full bg-white dark:bg-gray-800 pb-5 sm:p-5 sm:pt-0 rounded-lg">
        <div className="text-2xl mb-7 self-center text-center">
          Що тут є, чого немає на офіційному сайті?
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 text-center">
            <ul className="list-disc list-inside text-start">
              <li>Документація Українською 💛💙</li>
              <li>Найкращі практики програмування</li>
              <li>Відповіді на типові питання на співбесідах</li>
              <li>Актуальні приклади</li>
              <li>Сучасні підходи</li>
              <li>Новини зі світу php</li>
              <li>Розбори коду</li>
              <li>Ви побачете як працює код прямо в браузері</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <CodeRunner code={defaultCode} animate />
            <div
              id="arrow-end"
              className="place-self-end w-1/3 -mt-20 sm:-mt-14 pb-10 -z-10"
            ></div>
          </div>
        </div>
      </div>

      <div className="text-2xl m-5 self-center text-center">
        Що люди питають?
      </div>
      <div className="grid grid-cols-2 bg-white dark:bg-gray-800 sm:p-5 rounded-lg">
        {faqs.map((faq, i) => (
          <figure className="m-2 flex flex-row items-start" key={i}>
            <img
              src={faq.imgUrl}
              alt=""
              className="rounded-lg float-left h-auto w-1/4"
            />
            <div className="mx-2">
              <h3 className="w-full text-xl">{faq.question}</h3>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
            </div>
          </figure>
        ))}
      </div>
    </div>
  </Base>
)

type FAQ = {
  imgUrl: string
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    imgUrl: '/assets/_5ac29adf-90fd-45d2-8050-9538b78b4532.webp',
    question: `Для чого в ${new Date().getFullYear()} році вчити PHP ?`,
    answer: `В ${new Date().getFullYear()} все ще потрібно багато PHP розробників.`,
  },
  {
    imgUrl: `https://images.generated.photos/Ufjjv3Qz2Eqf6y5dlD-Tu3DN5pOCMO0tDaKj7D6b5SM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjcxOTA3LmpwZw.jpg`,
    question: `Скільки заробляють PHP розробники?`,
    answer: `<a href="https://djinni.co/salaries/php/?exp=5" target="_blank">На djinni можна знайти актуальну статистику по зарплатах</a>`,
  },
  {
    imgUrl: `https://images.generated.photos/gviIlthWfabknx24dmMFMa69PbWsHVQ0F5GelcKgoPU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODAyNDI3LmpwZw.jpg`,
    question: `А початківців беруть php?`,
    answer: `Зараз дефіцит кваліфікованих кадрів, тож і початківців беруть`,
  },
  {
    imgUrl: `/assets/_b29d2cfb-8ded-4895-bb1c-744ff2598243.webp`,
    question: `Які ніші займає PHP?`,
    answer: `Зазвичай це ніші в веб розробці. Здебільшого Content Management Systems, E-commerce та кастомна розробка`,
  },
  {
    imgUrl: `/assets/_cb53ce6f-d260-40c4-a97b-1df3840e9459.webp`,
    question: `Мені бабця сказала, що PHP зараз не в тренді? Це дійсно так?`,
    answer: `PHP стабільно входить <a href="https://dou.ua/lenta/articles/language-rating-2022/" target="_blank"> до першої пʼятірки мов програмування</a>`,
  },
  {
    imgUrl: '/assets/_e03aec7f-c04d-42f5-8ee9-969dc665236e.webp',
    question: `Хто взагалі використовує PHP і для чого?`,
    answer: `За допомогою PHP зазвичай пишуть веб-застосунки як-от Facebook, Yahoo!, Wikipedia, TED, BlaBlaCar, WordPress, YouTube тощо`,
  },
]
