# Опис
Це - україномовна документація мови програмування [PHP](https://php.net).
Зважаючи на те, що офеційна документація інколи не повна, часом не актуальна і наразі немає української версії, було прийнято рішення створити цей проєкт.
Веб-версія цієї документації доступна за адресою [https://php.org.ua](https://php.org.ua).

## Про PHP
PHP (англ. PHP: Hypertext Preprocessor — PHP: гіпертекстовий препроцесор) — скриптова мова програмування, була створена для генерації HTML-сторінок на стороні вебсервера. PHP є однією з найпоширеніших мов, що використовуються у сфері веброзробок. PHP проєкт відкритого програмного забезпечення i підтримується переважною більшістю хостинг-провайдерів.

## Формат
Файли документаціі зберігаються у вигляді md файлів у форматі Markdown із доповненням [Frontmatter](https://frontmatter.codes/docs/markdown) за адресою https://github.com/ukrainesoft/php.org.ua-docs

## Запуск локально
```
git clone https://github.com/ukrainesoft/php.org.ua
cd php.org.ua
git submodule init
git submodule update
cd frontend
yarn dev # or `npm run dev`
```
Веб-сервер буде доступний за адресою http://localhost:3000/

## Roadmap
- 👌 Перевести документацію із формату xml до md (це допоможе упростити подальший переклад).
```
for f in *.html; do pandoc "$f" -s -t markdown_github-raw_html -o "../ru_md/${f%.txt}.md"; done
```
- 👌 Перекласти усі сторінки документації на українську мову за допомогою машинного перекладу.
```
for f in *.md; do echo $f; time trans -no-auto -b -s ru -t uk -i $f -o ../ua/$f; done;
```
- Пофіксити markdown таблиць [markdown-table-formatter](https://github.com/nvuillam/markdown-table-formatter) буде доречним.
- Оновити розділи із листінгом скриптів ([php-cs-fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) настане у пригоді).
- 👌 Підготувати домен для хостінгу GitHub Pages.
- 👌 Розробити фронтенд (Jekyll / VueJS / ReactJS). Вибір пав на Next.js
- 👌 Розділити фронтенд від мануалу на рівні репозиторія.
- Оновити приклади документації для нових версій PHP.
- Додати можливість запускати приклади PHP коду клієнтом.
- Додати новини PHP.
- Оновити документацію, зробити її більш натуральною.
