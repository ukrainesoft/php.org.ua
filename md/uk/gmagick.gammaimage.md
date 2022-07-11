- [« Gmagick::frameimage](gmagick.frameimage.md)
- [Gmagick::getcopyright »](gmagick.getcopyright.md)

- [PHP Manual](index.md)
- [Gmagick](class.gmagick.md)
- Гамма-корекція зображення

# Gmagick::gammaimage

(PECL gmagick \>u003d Unknown)

Gmagick::gammaimage — Гамма-корекція зображення

### Опис

public **Gmagick::gammaimage**(float `$gamma`):
[Gmagick](class.gmagick.md)

Гамма-корекція зображення. Одне й те саме зображення, яке переглядається
на різних пристроях, матиме перцепційні відмінності у способах
представлення інтенсивності зображення на екрані. Вкажіть
індивідуальні рівні гами для червоного, зеленого та синього каналів або
регулюйте всі три за допомогою параметра гами. Значення зазвичай
коливаються від 0,8 до 2,3.

### Список параметрів

`gamma`
Кількість гамма-корекції.

### Значення, що повертаються

Гамма-скоригований об'єкт [Gmagick](class.gmagick.md).

### Помилки

Викликає **GmagickException** у разі виникнення помилки.
