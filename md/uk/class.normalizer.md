- [« Locale::setDefault](locale.setdefault.md)
- [Normalizer::getRawDecomposition
»](normalizer.getrawdecomposition.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас Normalizer

# Клас Normalizer

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

## Вступ

Нормалізація - це процес перетворення символів та їх
послідовностей у формальне уявлення нижчого рівня.
Цей процес дуже важливий при порівнянні рядків при сортуванні або при
пошуку, але також використовується при збереженні тексту, щоб бути
впевненим у цьому, що він зберігся коректно.

Консорціум Unicode визначив кілька форм нормалізації, що відображають
різні потреби додатків:

- Normalization Form D (NFD) - Канонічне розкладання
- Normalization Form C (NFC) - Канонічне розкладання з наступною
канонічним складанням
- Normalization Form KD (NFKD) - Сумісне розкладання
- Normalization Form KC (NFKC) - Сумісне розкладання з наступним
канонічним складанням

Різні форми встановлюються у вимогах наборів перетворень тексту.
Перетворення обчислюються з алгоритму та набору файлів даних.

## Огляд класів

class **Normalizer** {

/\* Методи \*/

public static
[getRawDecomposition](normalizer.getrawdecomposition.md)(string
`$string`, int `$form` u003d Normalizer::FORM_C): ?string

public static [isNormalized](normalizer.isnormalized.md)(string
`$string`, int `$form` u003d Normalizer::FORM_C): bool

public static [normalize](normalizer.normalize.md)(string `$string`,
int `$form` u003d Normalizer::FORM_C): string\|false

}

## Зумовлені константи

Дані константи задають форму нормалізації, що використовується нормалізатором:

**`Normalizer::FORM_C`** (int)
Форма нормалізації C (NFC) - канонічне розкладання, після якого
канонічна збірка

**`Normalizer::FORM_D`** (int)
Форма нормалізації D (NFD) - Канонічне розкладання

**`Normalizer::FORM_KC`** (int)
Форма нормалізації KC (NFKC) - Сумісне розкладання, після якого
канонічна збірка

**`Normalizer::FORM_KD`** (int)
Форма нормалізації KD (NFKD) - Сумісне розкладання

**`Normalizer::NONE`** (int)
Без розкладання/складання

**`Normalizer::OPTION_DEFAULT`** (int)
Звичайні налаштування нормалізації

## Дивіться також

- [» Нормалізація Unicode](http://unicode.org/reports/tr15/)
- [» Нормалізація Unicode.
FAQ](http://unicode.org/faq/normalization.md)
- [»  ICU Посібник користувача -
нормалізація](https://unicode-org.github.io/icu/userguide/transforms/normalization/)
- [»  ICU Опис API -
нормалізація](http://www.icu-project.org/apiref/icu4c/unorm_8h.md)

## Зміст

- [Normalizer::getRawDecomposition](normalizer.getrawdecomposition.md)
— Витягує властивість Decomposition_Mapping для заданого символу
UTF-8
- [Normalizer::isNormalized](normalizer.isnormalized.md)
Перевірити, чи переданий рядок відповідає заданій формі
нормалізації
- [Normalizer::normalize](normalizer.normalize.md) - Нормалізація
рядки
