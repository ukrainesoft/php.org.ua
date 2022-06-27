- [« Зміни, що ламають зворотну
сумісність](migration74.incompatible.md)
- [Видалені модулі »](migration74.removed-extensions.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.3.x на PHP 7.4.x](migration74.md)
- Застаріла функціональність

## Застаріла функціональність

### Ядро PHP

#### Вкладені тернарні оператори без явної вказівки дужок

У вкладених тернарних операціях повинні явно використовуватися круглі
дужки, щоб визначити порядок операцій. Раніше, якщо дужки явно не
задані, в більшості випадків ліва асоціативність не призводила до
очікуваної поведінки.

`<?php1 ? 2 : 3 ? 4 : 5; // застаріло(1 ? 2 : 3) ? 4 : 5; // добро1?? 2 : (3 ? 4 : 5); // добре?> `

Дужки *not* потрібні при вкладанні в середній операнд, оскільки це
завжди однозначно і не залежить від асоціативності:

`1 ? 2 ? 3 : 4 : 5 // добре`

#### Звернення до індексу масиву та рядки через фігурні дужки

Синтаксис доступу до масиву та рядка з використанням фігурних дужок
оголошено застарілим. Використовуйте `$var[$idx]` замість `$var{$idx}`.

#### Приведення типу (real) та функція [is_real()](function.is-real.md)

Приведення типу `(real)` оголошено застарілим, натомість використовуйте
`(float)`.

Функція [is_real()](function.is-real.md) також оголошена застарілою,
замість неї використовуйте [is_float()](function.is-float.md).

#### Скасування прив'язки `$this` при використанні `$this`

Скасування прив'язки `$this` у нестатичному замиканні, яке використовує
`$this`, оголошена застарілою.

#### Ключове слово `parent` поза батьківським класом

Використання `parent` усередині класу, у якого немає батька, оголошено
застарілим, а в майбутньому станеться помилка компіляції. А поки що помилка
буде лише при зверненні до батька під час виконання.

#### INI-опція allow_url_include

Конфігураційна директива
[allow_url_include](filesystem.configuration.md#ini.allow-url-include)
оголошено застарілою. При увімкненій опції буде викликане повідомлення про
застарілі можливості під час завантаження.

#### Неприпустимі символи в основних функціях перетворення

Передача неприпустимих символів
[base_convert()](function.base-convert.md),
[bindec()](function.bindec.md), [octdec()](function.octdec.md)
тепер викликає повідомлення про застарілі можливості. Результат все
і буде обчислено так, якби неприпустимих символів не було.
Провідні та завершальні прогалини, а також префікси типу 0x (залежно
від системи числення) як і раніше дозволені.

#### Використання [array_key_exists()](function.array-key-exists.md) з об'єктом

Використання [array_key_exists()](function.array-key-exists.md) з
об'єктом оголошено застарілим. Натомість слід використовувати або
[isset()](function.isset.md), або
[property_exists()](function.property-exists.md).

#### Функції, пов'язані з чарівними лапками

Функції [get_magic_quotes_gpc()](function.get-magic-quotes-gpc.md) та
[get_magic_quotes_runtime()](function.get-magic-quotes-runtime.md)
оголошені застарілими. Вони завжди повертають **`false`**.

#### Функція [hebrevc()](function.hebrevc.md)

Функція [hebrevc()](function.hebrevc.md) оголошена застарілою. Її
можна замінити на вираз `nl2br(hebrev($str))`, або найкраще
використовувати підтримку Unicode RTL.

#### Функція [convert_cyr_string()](function.convert-cyr-string.md)

Функція [convert_cyr_string()](function.convert-cyr-string.md)
оголошено застарілою. Її можна замінити або на **mb_convert_string()**,
або [iconv()](function.iconv.md) або клас
[UConverter](class.uconverter.md).

#### Функція [money_format()](function.money-format.md)

Функція [money_format()](function.money-format.md) оголошена
застарілої. Вона може бути замінена на функціональність
інтернаціоналізації – класом
[NumberFormatter](class.numberformatter.md).

#### Функція [ezmlm_hash()](function.ezmlm-hash.md)

Функція [ezmlm_hash()](function.ezmlm-hash.md) оголошена застарілою.

#### Функція [restore_include_path()](function.restore-include-path.md)

Функція [restore_include_path()](function.restore-include-path.md)
оголошено застарілою. Її можна замінити на
`ini_restore('include_path')`.

#### Використання implode з нерекомендованим порядком параметрів

Передача параметрів у [implode()](function.implode.md) у зворотному
порядку оголошена застарілою - використовуйте `implode($glue, $parts)`
замість `implode($parts, $glue)`.

### COM

Імпорт бібліотек типів з реєстрацією констант без урахування регістру
оголошено застарілим.

### Фільтрування

Фільтр **`FILTER_SANITIZE_MAGIC_QUOTES`** оголошений застарілим замість
його використовуйте **`FILTER_SANITIZE_ADD_SLASHES`**.

### Багатобайтові рядки

Передача нерядкового шаблону в
[mb_ereg_replace()](function.mb-ereg-replace.md) оголошено застарілою.
На даний момент нерядкові значення інтерпретуються як кодові точки
ASCII. У PHP 8 шаблон оброблятиметься як рядок.

Передача кодування як 3-го параметра
[mb_strrpos()](function.mb-strrpos.md) оголошено застарілою. Замість
цього передавайте позицію як 0, а кодування у 4-му параметрі.

### Полегшений протокол доступу до каталогів (LDAP)

Функції
[ldap_control_paged_result_response()](function.ldap-control-paged-result-response.md)
та [ldap_control_paged_result()](function.ldap-control-paged-result.md)
оголошені застарілими. Для керування посторінковим режимом використовуйте
функцію [ldap_search()](function.ldap-search.md).

### Reflection

Виклики [ReflectionType::\_\_toString()](reflectiontype.tostring.md)
тепер створюють повідомлення про застарілі можливості. Цей метод
оголошено застарілим на користь використання
[ReflectionNamedType::getName()](reflectionnamedtype.getname.md) в
документації з PHP 7.1, але не видавав відповідного повідомлення щодо
технічних причин.

Методи `export()` у всіх класів [Reflection](class.reflection.md)
оголошені застарілими. Тепер створюйте об'єкт
[Reflection](class.reflection.md) і перетворіть його на рядок:

` <?php// Замість ReflectionClass::export(Foo::class, false) використовуйте:echo new ReflectionClass(Foo::class), "
";// Замість $str u003dReflectionClass::export(Foo::class, true) використовуйте:$str u003d (string) new ReflectionClass(Foo::class);?> `

### Сокети

Прапори **`AI_IDN_ALLOW_UNASSIGNED`** та **`AI_IDN_USE_STD3_ASCII_RULES`**
для функції
[socket_addrinfo_lookup()](function.socket-addrinfo-lookup.md)
оголошені застарілими через оновлення glibc.
