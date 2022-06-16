- [«Зумовлені константи](parle.constants.md)
- [Уявлення символів »](parle.regex.chars.md)

- [PHP Manual](index.md)
- [Parle](book.parle.md)
- Зіставлення з шаблоном Parle

# Зіставлення з шаблоном Parle

## Зміст

- [Подання символів](parle.regex.chars.md)
- [Класи символів](parle.regex.charclass.md)
- [Класи символів Unicode](parle.regex.unicodecharclass.md)
- [Чергування та повторення](parle.regex.alternation.md)
- [Якоря](parle.regex.anchors.md)
- [Угруповання](parle.regex.grouping.md)

Parle підтримує зіставлення регулярних виразів аналогічно flex.
Також підтримуються такі набори символів POSIX: `[: alnum:]`,
`[:alpha:]`, `[:blank:]`, `[:cntrl:]`, `[:digit:]`, `[:graph:]`,
`[:lower:]`, `[:print:]`, `[:punct:]`, `[:space:]`, `[:upper:]` і
`[:xdigit:]`.

Класи символів Unicode в даний час не включені за промовчанням,
передайте --enable-parle-utf32, щоб зробити їх доступними. Конкретна
кодування може бути відображене за допомогою правильно побудованого
регулярного вираження. Наприклад, щоб відповідати символу євро,
закодованому в UTF-8, можна використовувати регулярний вираз
`[\xe2][\x82][\xac]`. Шаблон для рядка кодування UTF-8 може бути
`[ -\x7f]{+}[\x80-\xbf]{+}[\xc2-\xdf]{+}[\xe0-\xef]{+}[\xf0-\xff]+`.
