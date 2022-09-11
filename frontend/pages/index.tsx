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
            <ul className="list-disc text-start p-2">
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
              className="place-self-end w-1/3 -mt-12 pb-10 -z-10"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </Base>
)
