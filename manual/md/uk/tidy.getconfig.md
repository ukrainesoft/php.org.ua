- [« tidy::$errorBuffer](tidy.props.errorbuffer.md)
- [tidy::getHtmlVer »](tidy.gethtmlver.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Отримує поточну конфігурацію Tidy

# tidy::getConfig

# tidy_get_config

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.7.0)

tidy::getConfig -- tidy_get_config -- Отримує поточну конфігурацію Tidy

### Опис

Об'єктно-орієнтований стиль

public **tidy::getConfig**(): array

Процедурний стиль

**tidy_get_config**([tidy](class.tidy.md) `$tidy`): array

Отримує список опцій конфігурації, що використовуються у вказаному об'єкті tidy
`tidy`.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає масив опцій конфігурації.

Інформацію про кожен параметр можна отримати тут:
[»http://api.md-tidy.org/#quick-reference](http://api.md-tidy.org/#quick-reference).

### Приклади

**Приклад #1 Приклад використання **tidy::getConfig()****

`<?php$html u003d '<p>тест</p>';$config u003d array('indent' u003d> TRUE,                'output-xhtml' u003d> TRUE,                tidy_parse_string($html, $config);print_r($tidy->getConfig());?> `

Результат виконання цього прикладу:

Array
(
[indent-spaces] u003d> 2
[wrap] u003d> 200
[tab-size] u003d> 8
[char-encoding] u003d> 1
[input-encoding] u003d> 3
[output-encoding] u003d> 1
[newline] u003d> 1
[doctype-mode] u003d> 1
[doctype] u003d>
[repeated-attributes] u003d> 1
[alt-text] u003d>
[slide-style] u003d>
[error-file] u003d>
[output-file] u003d>
[write-back] u003d>
[markup] u003d> 1
[show-warnings] u003d> 1
[quiet] u003d>
[indent] u003d> 1
[hide-endtags] u003d>
[input-xml] u003d>
[output-xml] u003d> 1
[output-xhtml] u003d> 1
[output-html] u003d>
[add-xml-decl] u003d>
[uppercase-tags] u003d>
[uppercase-attributes] u003d>
[bare] u003d>
[clean] u003d>
[logical-emphasis] u003d>
[drop-proprietary-attributes] u003d>
[drop-font-tags] u003d>
[drop-empty-paras] u003d> 1
[fix-bad-comments] u003d> 1
[break-before-br] u003d>
[split] u003d>
[numeric-entities] u003d>
[quote-marks] u003d>
[quote-nbsp] u003d> 1
[quote-ampersand] u003d> 1
[wrap-attributes] u003d>
[wrap-script-literals] u003d>
[wrap-sections] u003d> 1
[wrap-asp] u003d> 1
[wrap-jste] u003d> 1
[wrap-php] u003d> 1
[fix-backslash] u003d> 1
[indent-attributes] u003d>
[assume-xml-procins] u003d>
[add-xml-space] u003d>
[enclose-text] u003d>
[enclose-block-text] u003d>
[keep-time] u003d>
[word-2000] u003d>
[tidy-mark] u003d>
[gnu-emacs] u003d>
[gnu-emacs-file] u003d>
[literal-attributes] u003d>
[show-body-only] u003d>
[fix-uri] u003d> 1
[lower-literals] u003d> 1
[hide-comments] u003d>
[indent-cdata] u003d>
[force-output] u003d> 1
[show-errors] u003d> 6
[ascii-chars] u003d> 1
[join-classes] u003d>
[join-styles] u003d> 1
[escape-cdata] u003d>
[language] u003d>
[ncr] u003d> 1
[output-bom] u003d> 2
[replace-color] u003d>
[css-prefix] u003d>
[new-inline-tags] u003d>
[new-blocklevel-tags] u003d>
[new-empty-tags] u003d>
[new-pre-tags] u003d>
[accessibility-check] u003d> 0
[vertical-space] u003d>
[punctuation-wrap] u003d>
[merge-divs] u003d> 1
)

### Дивіться також

- **tidy_reset_config()**
- **tidy_save_config()**
