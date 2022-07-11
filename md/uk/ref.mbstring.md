- [« Вимоги, що пред'являються до кодувань символів
PHP](mbstring.php4.req.md)
- [mb_check_encoding »](function.mb-check-encoding.md)

- [PHP Manual](index.md)
- [Багатобайтові рядки](book.mbstring.md)
- Функції для роботи з багатобайтовими рядками

# Функції для роботи з багатобайтовими рядками

# Посилання

Схеми багатобайтного кодування символів та їх реалізації достатньо
складні, та його опис перебуває поза цієї документації. Більше
вичерпну інформацію про кодування та їх пристрій можна отримати
з нижченаведених джерел.

- Матеріали по Юнікоду

[»http://www.unicode.org/](http://www.unicode.org/)

- Інформація про символи японського/корейського/китайського кодування

[»https://resources.oreilly.com/examples/9781565922242/blob/master/doc/cjk.inf](https://resources.oreilly.com/examples/9781565922242/blob/master/doc/cjk.inf )

## Зміст

- [mb_check_encoding](function.mb-check-encoding.md) — Перевіряє,
що кодування рядків вибрано вірно
- [mb_chr](function.mb-chr.md) — Повертає символ за значенням
кодової точки Unicode
- [mb_convert_case](function.mb-convert-case.md) - Здійснює зміну
регістру символів у рядку
- [mb_convert_encoding](function.mb-convert-encoding.md) -
Перетворює рядок з одного кодування символів на інше
- [mb_convert_kana](function.mb-convert-kana.md) - Перетворення
кодувань "kana" з одного в інше ("zen-kaku", "han-kaku" та інші)
- [mb_convert_variables](function.mb-convert-variables.md) -
Перетворює символи на змінну з одного кодування на інше
- [mb_decode_mimeheader](function.mb-decode-mimeheader.md) -
Декодує рядок у MIME-заголовку
- [mb_decode_numericentity](function.mb-decode-numericentity.md) -
Декодує посилання на числовий рядок HTML на символ
- [mb_detect_encoding](function.mb-detect-encoding.md) - Визначення
кодування символів
- [mb_detect_order](function.mb-detect-order.md) -
Встановлення/отримання списку кодувань для механізмів визначення
кодування
- [mb_encode_mimeheader](function.mb-encode-mimeheader.md) -
Кодує рядок для MIME-заголовка
- [mb_encode_numericentity](function.mb-encode-numericentity.md) -
Кодує символ у числове HTML-посилання
- [mb_encoding_aliases](function.mb-encoding-aliases.md) - Отримує
псевдоніми відомого типу кодування
- [mb_ereg_match](function.mb-ereg-match.md) - Збіг з
регулярним виразом для багатобайтового рядка
- [mb_ereg_replace_callback](function.mb-ereg-replace-callback.md) -
Виконує пошук та заміну за регулярним виразом з підтримкою
багатобайтових кодувань використовуючи callback-функцію
- [mb_ereg_replace](function.mb-ereg-replace.md) - Здійснює
заміну за регулярним виразом з підтримкою багатобайтових кодувань
- [mb_ereg_search_getpos](function.mb-ereg-search-getpos.md) -
Повертає початкову позицію наступного збігу з регулярним
виразом
- [mb_ereg_search_getregs](function.mb-ereg-search-getregs.md) -
Виводить результат останнього порівняння з регулярним виразом
- [mb_ereg_search_init](function.mb-ereg-search-init.md) -
Ініціалізація пошуку відповідностей регулярному виразу
багатобайтовим рядком та текстом регулярного вираження
- [mb_ereg_search_pos](function.mb-ereg-search-pos.md) - Повертає
позицію і довжину збіглася з регулярним виразом ділянки
багатобайтового рядка
- [mb_ereg_search_regs](function.mb-ereg-search-regs.md) -
Повертає частину рядка, що збіглася з регулярним виразом.
- [mb_ereg_search_setpos](function.mb-ereg-search-setpos.md) -
Задає початкову позицію у рядку, з якого розпочнеться пошук
відповідностей регулярному виразу
- [mb_ereg_search](function.mb-ereg-search.md) — Пошук відповідності
регулярному виразу для рядків у багатобайтових кодуваннях
- [mb_ereg](function.mb-ereg.md) - Збіг з регулярним
виразом з підтримкою багатобайтових кодувань
- [mb_eregi_replace](function.mb-eregi-replace.md) - Здійснює
заміну за регулярним виразом з підтримкою багатобайтових символів
без урахування регістру
- [mb_eregi](function.mb-eregi.md) — Пошук відповідей регулярному
висловлювання з підтримкою багатобайтових символів без урахування регістру
- [mb_get_info](function.mb-get-info.md) — Отримує внутрішні
налаштування mbstring
- [mb_http_input](function.mb-http-input.md) — Визначення кодування
символів вхідних даних HTTP-запиту
- [mb_http_output](function.mb-http-output.md) — Встановлення/отримання
кодування символів виводу HTTP
- [mb_internal_encoding](function.mb-internal-encoding.md) -
Встановлення/отримання внутрішнього кодування скрипту
- [mb_language](function.mb-language.md) — Встановлює/отримує
поточна мова
- [mb_list_encodings](function.mb-list-encodings.md) - Повертає
масив усіх підтримуваних кодувань
- [mb_ord](function.mb-ord.md) — Отримує кодову точку символу
Unicode
- [mb_output_handler](function.mb-output-handler.md) -
Callback-функція, що перетворює кодування символів у вихідному буфері
- [mb_parse_str](function.mb-parse-str.md) — Розбирання даних запитів
GET/POST/COOKIE та встановлення значень глобальних змінних
- [mb_preferred_mime_name](function.mb-preferred-mime-name.md) -
Отримання набору символів MIME
- [mb_regex_encoding](function.mb-regex-encoding.md) -
Встановлює/отримує поточне кодування для багатобайтового
регулярного вираження
- [mb_regex_set_options](function.mb-regex-set-options.md) -
Встановлення/отримання стандартних значень для налаштувань функцій
mbregex
- [mb_scrub](function.mb-scrub.md) - Опис
- [mb_send_mail](function.mb-send-mail.md) - Надсилання
закодованого повідомлення
- [mb_split](function.mb-split.md) — Поділ рядків у багатобайтніх
кодування, використовуючи регулярний вираз
- [mb_str_split](function.mb-str-split.md) — Якщо задана
багатобайтовий рядок повертає масив символів
- [mb_strcut](function.mb-strcut.md) — Отримання частини рядка
- [mb_strimwidth](function.mb-strimwidth.md) — Отримання рядка,
обрізаною до заданого розміру
- [mb_stripos](function.mb-stripos.md) — Реєстронезалежний пошук
позиції першого входження одного рядка до іншого
- [mb_stristr](function.mb-stristr.md) — Знаходить перше входження
підстроки у рядку без урахування регістру
- [mb_strlen](function.mb-strlen.md) — Отримує довжину рядка
- [mb_strpos](function.mb-strpos.md) — Пошук позиції першого
входження одного рядка в інший
- [mb_strrchr](function.mb-strrchr.md) — Пошук останнього входження
одного рядка в інший
- [mb_strrichr](function.mb-strrichr.md) — Пошук останнього
входження одного рядка в інший, нечутливий до регістру
- [mb_strripos](function.mb-strripos.md) — Пошук останнього
входження одного рядка в інший, нечутливий до регістру
- [mb_strrpos](function.mb-strrpos.md) — Пошук позиції останнього
входження одного рядка в інший
- [mb_strstr](function.mb-strstr.md) — Знаходить перше входження
підстроки у рядку
- [mb_strtolower](function.mb-strtolower.md) — Приведення рядка до
нижнього регістру
- [mb_strtoupper](function.mb-strtoupper.md) — Приведення рядка до
верхнього регістру
- [mb_strwidth](function.mb-strwidth.md) — Повертає ширину рядка
- [mb_substitute_character](function.mb-substitute-character.md) -
Встановити/отримати символ заміни
- [mb_substr_count](function.mb-substr-count.md) - Повертає
кількість входжень підрядки
- [mb_substr](function.mb-substr.md) — Повертає частину рядка
