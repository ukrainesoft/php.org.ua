- [«Ev::nowUpdate](ev.nowupdate.md)
- [Ev::resume »](ev.resume.md)

- [PHP Manual](index.md)
- [Ev](class.ev.md)
- Отримати бітову маску рекомендованих бекендів для даної платформи

# Ev:: recommendedBackends

(PECL ev \>u003d 0.2.0)

Ev::recommendedBackends — Отримати бітову маску рекомендованих
бекендів для даної платформи

### Опис

final public static **Ev::recommendedBackends**(): int

Повертає набір всіх бекендів, вбудованих у використовувану `libev` і,
також, рекомендованих для даної платформи, у тому сенсі, що вони будуть
працювати з більшістю типів дескрипторів файлів. Зазвичай цей перелік
менше, ніж **ev_supported_backends()**. Наприклад,
`kqueue` не працює на більшості систем `BSD` і не буде
автовизначено, якщо ви примусово його не запросите. Це набір
бекендів які опитуватиме `libev`, якщо бекенд не заданий у явному
вигляді.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає бітову маску, що містить [прапори]
бекенда](class.ev.md#ev.constants.watcher-backends), об'єднані з
допомогою побітового *АБО*.

### Приклади

**Приклад #1 Вбудовування одного циклу в інший**

` <?php/** Попытаемся получить встраиваемый событийный цикл и встроить его в* событийный цикл по умолчанию.* Если это невозможно - используем цикл по умолчанию.* Цикл по умолчанию хранится в $loop_hi, а встраиваемый в $loop_lo* (который равен $loop_hi в випадку, якщо не можна використовувати вбудований цикл).** Приклад взято з сайту* http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#Examples_CONTENT-9*/ $loop_hi u003d EvLoop::defaultLoop();$loop_lo u003d NULL;$embed   u003d NULL;/** Дивимося, якщо хоч би один відповіднийбекенд* (флаг & Ev::recommendedBackends() ? new EvLoop(Ev::embeddableBackends() & Ev::recommendedBackends()) : 0;if ($loop_lo) { $embed u003d nev EvEmbed($loop_lo, function $ ;}?> `

### Дивіться також

- [EvEmbed](class.evembed.md)
- [Ev::embeddableBackends()](ev.embeddablebackends.md) - Повертає
набір бекендів, які можна вбудувати в інші цикли подій
- [Ev::supportedBackends()](ev.supportedbackends.md) - Повертає
набір бекендів, що підтримуються поточною конфігурацією libev
- [Прапори бекенда](class.ev.md#ev.constants.watcher-backends)
- [Приклади](ev.examples.md)
