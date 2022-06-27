- [« Міграція з PHP 7.2.x на PHP 7.3.x](migration73.md)
- [Нові функції »](migration73.new-functions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.2.x на PHP 7.3.x](migration73.md)
-   Нові можливості

## Нові можливості

### Ядро PHP

#### Більш гнучкий синтаксис Heredoc і Nowdoc

Після закриття ідентифікатора в doc-рядках більше не потрібно ставити
точку з комою або новий рядок. Крім того, що закриває ідентифікатор
може бути з відступом, і в цьому випадку він буде видалений з усіх рядків
doc-рядку.

#### Деструктурування масиву підтримує присвоєння за посиланнями

Деструктурування масиву тепер підтримує присвоєння за посиланнями
за допомогою синтаксису `[&$a, [$b, &$c]] u003d $d`. Те саме підтримується і
для [list()](function.list.md).

#### Оператор instanceof приймає літерали

Оператор `instanceof` тепер підтримує літерали як перший
операнда, і в цьому випадку результат завжди буде **`false`**.

#### Виняток CompileError замість деяких помилок компіляції

Додано новий виняток [CompileError](class.compileerror.md),
яке успадковується від [ParseError](class.parseerror.md). Невелике
кількість помилок компіляції тепер викидатиме
[CompileError](class.compileerror.md) замість створення фатальної
помилки. В даний час це впливає лише на помилки компіляції,
які можуть бути створені
[token_get_all()](function.token-get-all.md) у режимі
**`TOKEN_PARSE`**, але в майбутньому може бути перетворено більше помилок.

#### У викликах дозволена завершальна кома

Завершальні коми у викликах функцій та методів тепер дозволені.

#### Підтримка Argon2id

З аргументом **--with-password-argon2\[u003ddir\]** скрипта configure тепер
підтримуються обидва хеші, як Argon2i, так і Argon2id, у функціях
[password_hash()](function.password-hash.md),
[password_verify()](function.password-verify.md),
[password_get_info()](function.password-get-info.md) та
[password_needs_rehash()](function.password-needs-rehash.md). Паролі
можуть бути хешовані та перевірені, використовуючи константу
**`PASSWORD_ARGON2ID`**. Підтримка обох алгоритмів Argon2i та Argon2id в
функціях сімейства **password\_\*()** тепер вимагає, щоб PHP був
скомпільований з бібліотекою libargon2 версії ≥20161029.

### Менеджер процесів FastCGI

Для налаштування логування FPM було додано нові опції:

`log_limit`
Ця глобальна опція може використовуватись для встановлення ліміту
логування для рядка логування, що дозволяє записувати повідомлення
довжиною понад 1024 символи без перенесення. Також виправляє різні
проблеми із упаковкою (wrapping).

`log_buffering`
Ця глобальна опція дозволяє вести експериментальне логування без
додаткової буферизації.

`decorate_workers_output`
Цей варіант пула дозволяє відключити відмітку виводу (output decoration)
для обробників, коли `catch_workers_output` увімкнена.

### Функції BC Math

Функція [bcscale()](function.bcscale.md) тепер також може
використовуватися як гетер для вилучення поточного використовуваного
масштабу.

### Полегшений протокол доступу до каталогів (LDAP)

Була додана повна підтримка LDAP Controls до функцій запитів
[LDAP](book.ldap.md) та
[ldap_parse_result()](function.ldap-parse-result.md):

- Доданий параметр `$serverctrls` для відправки управління сервером
функціях [ldap_add()](function.ldap-add.md),
[ldap_mod_replace()](function.ldap-mod-replace.md),
[ldap_mod_add()](function.ldap-mod-add.md),
[ldap_mod_del()](function.ldap-mod-del.md),
[ldap_rename()](function.ldap-rename.md),
[ldap_compare()](function.ldap-compare.md),
[ldap_delete()](function.ldap-delete.md),
[ldap_modify_batch()](function.ldap-modify-batch.md),
[ldap_search()](function.ldap-search.md),
[ldap_list()](function.ldap-list.md) та
[ldap_read()](function.ldap-read.md).
- Додано параметр `$serverctrls` для отримання керування з сервера
у функції [ldap_parse_result()](function.ldap-parse-result.md).
- Підтримка **`LDAP_OPT_SERVER_CONTROLS`** та
**`LDAP_OPT_CLIENT_CONTROLS`** у функціях
[ldap_get_option()](function.ldap-get-option.md) та
[ldap_set_option()](function.ldap-set-option.md) було виправлено.

### Функції мультибайтових рядків

#### Повна підтримка case-mapping та case-folding

Додано підтримку повного процесу перетворення регістру символів
(case-mapping) та порівняння на ідентичність різних регістрів
(Case-folding). На відміну від простого case-mapping, повний case-mapping
може змінити довжину рядка. Приклад:

`<?phpmb_strtoupper("Straße");// Виведе STRAßE в PHP 7.2// Виведе¸STRASSE в PHP 7.3?>

Різні режими перетворення та порівняння регістру символів доступні в
функції [mb_convert_case()](function.mb-convert-case.md):

- **`MB_CASE_LOWER`** (використовується
[mb_strtolower()](function.mb-strtolower.md))
- **`MB_CASE_UPPER`** (використовується
[mb_strtoupper()](function.mb-strtoupper.md))
- **`MB_CASE_TITLE`**
- **`MB_CASE_FOLD`**
- **`MB_CASE_LOWER_SIMPLE`**
- **`MB_CASE_UPPER_SIMPLE`**
- **`MB_CASE_TITLE_SIMPLE`**
- **`MB_CASE_FOLD_SIMPLE`** (використовується нечутливими до
регістру операціями)

Виконує лише безумовний, незалежний від мови, повний процес
перетворення.

#### Операції, нечутливі до регістру, використовують case-folding

Строкові операції без урахування регістру тепер використовують case-folding
замість case-mapping регістру при порівнянні. Це означає, що тепер
більше символів будуть вважатися (без урахування регістру) рівними.

#### MB_CASE_TITLE виконує перетворення title-case

Функція [mb_convert_case()](function.mb-convert-case.md) з
**`MB_CASE_TITLE`** тепер виконує перетворення title-case на
Залежно від властивостей Unicode, заснованих на Cased і CaseIgnorable. В
зокрема, це також покращує обробку лапок та апострофів.

#### Підтримка Unicode 11

Таблиці даних [мультибайтових рядків](book.mbstring.md) було оновлено
до Юнікод версії 11.

#### Підтримка великих рядків

[Функції мультибайтових рядків](ref.mbstring.md) тепер коректно
підтримують рядки розміром понад 2 Гб.

#### Поліпшення продуктивності

Продуктивність модуля [мультибайтових рядків](book.mbstring.md)
була значно повсюдно покращена. Найбільші поліпшення в
функціях перетворення регістру.

#### Підтримка іменованих фрагментів

Функції `mb_ereg_*` тепер підтримують іменовані фрагменти.
Відповідні функції, такі як [mb_ereg()](function.mb-ereg.md),
тепер повертатимуть іменовані фрагменти як із їх номером групи,
так і з їх ім'ям, аналогічно PCRE:

` <?phpmb_ereg('(?<word>\w+)', '국', $matches);// u003d> [0 u003d> "국", 1 u003d> "국", "word" u003d> "국 "];?> `

Крім того, функція [mb_ereg_replace()](function.mb-ereg-replace.md)
тепер підтримує позначення `\k<>` та `\k''` для посилання на
іменовані фрагменти в рядку, що замінює:

` <?phpmb_ereg_replace('\s*(?<word>\w+)\s*', "_\k<word>_\k'word'_", ' foo ');// u003d> "_foo_foo_" ?> `

`\k<>` і `\k''` також можуть використовуватися для нумерованих посилань,
які також працюють із номерами груп більше 9.

### Readline

У функції [readline_info()](function.readline-info.md) додано
підтримка параметрів `completion_append_character` та
`completion_suppress_append`. Ці опції доступні, лише якщо PHP
скомпільований з бібліотекою libreadline (а не libedit).
