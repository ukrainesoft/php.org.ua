- [«UI\Controls\Form](class.ui-controls-form.md)
- [UI\Controls\Form::delete »](ui-controls-form.delete.md)

- [PHP Manual](index.md)
- [UI\Controls\Form](class.ui-controls-form.md)
- Додати керуючий елемент

# UI\Controls\Form::append

(UI 0.9.9)

UI\Controls\Form::append — Додати елемент керування

### Опис

public **UI\Controls\Form::append**(string `$label`,
[UI\Control](class.ui-control.md) `$control`, bool `$stretchy` u003d
**`false`**): int

Додає елемент управління до форми та встановлює мітку

### Список параметрів

`label`
Текст для мітки

`control`
Керуючий елемент

`stretchy`
Має значення true, щоб розтягнути елемент управління

### Значення, що повертаються

Повертає індекс доданого елемента управління, можливо значення
0
