- [« Типи ресурсів] (outcontrol.resources.md)
- [Приклади »](outcontrol.examples.md)

- [PHP Manual](index.md)
- [Контроль виведення](book.outcontrol.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи завжди доступні як частина ядра PHP.

**`PHP_OUTPUT_HANDLER_START`** (int)
Служить ознакою те, що буферування виведення почалося.

**`PHP_OUTPUT_HANDLER_WRITE`** (int)
Служить ознакою того, що буфер виводу очищується і в ньому є
дані для виведення.

**`PHP_OUTPUT_HANDLER_FLUSH`** (int)
Позначає, що буфер був скинутий (очищений та виведений).

**`PHP_OUTPUT_HANDLER_CLEAN`** (int)
Позначає, що буфер було очищено.

**`PHP_OUTPUT_HANDLER_FINAL`** (int)
Це означає, що це остання операція буферування.

**`PHP_OUTPUT_HANDLER_CONT`** (int)
Позначає, що буфер було очищено, але буферування виводу буде
продовжено.

Це синонім для **`PHP_OUTPUT_HANDLER_WRITE`**.

**`PHP_OUTPUT_HANDLER_END`** (int)
Позначає буферування виводу завершено.

Це синонім для **`PHP_OUTPUT_HANDLER_FINAL`**.

**`PHP_OUTPUT_HANDLER_CLEANABLE`** (int)
Визначає чи буфер виводу, створений
[ob_start()](function.ob-start.md), бути очищеним.

**`PHP_OUTPUT_HANDLER_FLUSHABLE`** (int)
Визначає чи буфер виводу, створений
[ob_start()](function.ob-start.md), бути скинутий (виведений та очищений).

**`PHP_OUTPUT_HANDLER_REMOVABLE`** (int)
Визначає чи буфер виводу, створений
[ob_start()](function.ob-start.md), бути віддаленим до завершення
скрипт.

**`PHP_OUTPUT_HANDLER_STDFLAGS`** (int)
Значення за промовчанням для прапорів буфера виводу. Рівняється
**`PHP_OUTPUT_HANDLER_CLEANABLE`** \| **`PHP_OUTPUT_HANDLER_FLUSHABLE`**
\| **`PHP_OUTPUT_HANDLER_REMOVABLE`**.
