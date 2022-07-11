- [«FDF](ref.fdf.md)
- [fdf_add_template »](function.fdf-add-template.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Додає код javascript у документ FDF

#fdf_add_doc_javascript

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_add_doc_javascript — Додає код javascript до документа FDF

### Опис

**fdf_add_doc_javascript**(resource `$fdf_document`, string
`$script_name`, string `$script_code`): bool

Додає скрипт до FDF, який Acrobat потім додає до скрипту
документа на рівні документа після того, як до нього буде імпортовано
FDF.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) або
[fdf_open_string()](function.fdf-open-string.md).

`script_name`
Ім'я сценарію.

`script_code`
Код скрипту. Рекомендовано використовувати `` для перенесення
рядків у коді скрипта.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додавання коду JavaScript до FDF**

` <?php$fdf u003d fdf_create();fdf_add_doc_javascript($fdf, "PlusOne", "function PlusOne(x){return x +1;}");fdf_save($fdf);?> `

створить FDF наступним чином:

%FDF-1.2
%âãÏÓ
1 0 obj
<<
/FDF << /JavaScript << /Doc [ (PlusOne)(function PlusOne\(x\){  return x+1;})] >> >>
>>
endobj
trailer
<<
/Root 1 0 R

>>
%%EOF
