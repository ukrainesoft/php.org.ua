- [«Componere\Patch](class.componere-patch.md)
- [Componere\Patch::apply »](componere-patch.apply.md)

- [PHP Manual](index.md)
- [Componere\Patch](class.componere-patch.md)
- Конструктор класу Patch

# Componere\Patch::\_\_construct

(Componere 2 \>u003d 2.1.0)

Componere\Patch::\_\_construct - Конструктор класу Patch

### Опис

public **Componere\Patch::\_\_construct**(object `$instance`)

public **Componere\Patch::\_\_construct**(object `$instance`, array
`$interfaces`)

### Список параметрів

`instance`
Призначення для цього патчу

`interfaces`
Реєстронезалежний масив імен класів

### Винятки

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо клас не може бути знайдений `interfaces`

**Увага**

Викидає виняток [RuntimeException](class.runtimeexception.md),
якщо клас в `interfaces` не є інтерфейсом
