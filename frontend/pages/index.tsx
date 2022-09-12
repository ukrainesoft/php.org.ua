import Base from '../components/base'
import CodeRunner from '../editor/CodeRunner'
import Xarrow from 'react-xarrows'

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
      <div className=" text-sky-700 dark:text-sky-500 text-center m-5 dark:bg-black bg-white p-2">
        Тут ви оволодієте навичками PHP розробника
      </div>

      <div className="flex flex-col w-full bg-white dark:bg-gray-800 sm:p-5 rounded-lg">
        <div className="text-2xl mb-5 self-center text-center">
          Що тут є, чого немає на офіційному сайті?
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 text-center">
            <ul className="list-disc list-inside text-start p-2">
              <li>Документація Українською 💛💙</li>
              <li>Найкращі практики програмування</li>
              <li>Відповіді на типові питання на співбесідах</li>
              <li>Актуальні приклади</li>
              <li>Сучасні підходи</li>
              <li>Новини зі світу php</li>
              <li>Розбори коду</li>
              <li>
                Ви побачете, як працює код,{' '}
                <span id="arrow-start">ось так</span>
              </li>
            </ul>
            <Xarrow
              start="arrow-start"
              end="arrow-end"
              startAnchor={['right', { position: 'right', offset: { x: 20 } }]}
              zIndex={10}
              // tailwind sky-600
              color="#0284c7"
            />
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
          <figure className="m-2 flex flex-row items-start">
            <img
              src={faq.imgUrl}
              alt=""
              className="rounded-lg float-left h-auto w-1/4"
            />
            <div className="m-2">
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
    imgUrl:
      'https://images.generated.photos/yLDjoIkGQJm49PXqtRK8fND9HqZpOvkCatH_fxs2Qs4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE0NzczLmpwZw.jpg',
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
    imgUrl:
      'https://images.generated.photos/sX1K0B6FCKrwTs0bBWp42Bm3gQtkj0eyMhbkIeXthHA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE2ODQ2LmpwZw.jpg',
    question: `Які ніші займає PHP?`,
    answer: `Зазвичай це ніші в веб розробці. Здебільшого Content Management Systems, E-commerce та кастомна розробка`,
  },
  {
    imgUrl:
      'https://images.generated.photos/9pb6HrUNj8D_9kLkhbe32sUYhFprtkxQOiMrvlzbUCs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc3Mjg1LmpwZw.jpg',
    question: `Мені бабця сказала, що PHP зараз не в тренді? Це дійсно так?`,
    answer: `PHP стабільно входить <a href="https://dou.ua/lenta/articles/language-rating-2022/" target="_blank"> до першої пʼятірки мов програмування</a>`,
  },
  {
    imgUrl:
      'https://images.generated.photos/xSjm-KcFCaxQT0sjhjhP2JC7P2K_UoETdoWbSeJEz2s/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTI4MTk5LmpwZw.jpg',
    question: `Хто взагалі використовує PHP і для чого?`,
    answer: `За допомогою PHP зазвичай пишуть веб-застосунки як-от Facebook, Yahoo!, Wikipedia, TED, BlaBlaCar, WordPress, YouTube тощо`,
  },
]
