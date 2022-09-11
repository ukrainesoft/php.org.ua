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
    <div className="flex flex-col items-center bg-[url('/hero-bg.svg')] bg-repeat">
      <div className="flex flex-row text-center items-center justify-center align-bottom">
        <div className="text-9xl font-logo italic text-sky-600  mt-10 font-bold w-full">
          php
        </div>
      </div>
      <div className=" text-sky-700 text-center m-5">
        Тут ви оволодієте навичками PHP розробника
      </div>

      <div className="flex flex-col w-full bg-white sm:p-5">
        <div className="text-3xl mb-6 self-center">
          Що тут є, чого немає на офіційному сайті?
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 hidden sm:block text-center">
            <ul className="list-disc text-start">
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
