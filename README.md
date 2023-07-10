# JS_Alhgorithm
third project in Sigma Software university

**Задача1**

Ви повинні реалізувати функцію, яка повертає різницю між
найбільшим та найменшим значенням у списку , отриманому як аргумент
функції. Масив, який отримує функція як аргумент, може містити позитивні
та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
Спочатку масив буде поданий у невідсортованому вигляді.
arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
arr([16]) => 0

**Задача2**

Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
масиву тільки ті слова, довжина яких перевищує число.

**Задача3**

Напишіть функцію, яка повертає true, якщо перший переданий
аргумент (рядок) закінчується другим аргументом (також рядком).
Приклад:
solution('abc', 'bc') => true
solution('abc', 'd') => false

**Задача 4**

Напишіть функцію, яка отримує масив цілих чисел і повертає масив
середніх значень кожного цілого числа та його послідовника, якщо він є.
Приклад:
averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]

**Задача5**

Створіть функцію, яка приймає рядок і повертає кількість голосних, які
у ній.
Приклад:
countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1

**5.2**

Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
Приклад:
removeABC("This might be a bit hard") ➞ "This might e it hrd"
removeABC("hello world!") ➞ null

**Задача6**

Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
(Set не використовувати:))
Приклад:
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]

**Задача7**

Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
значеннями, а значення ключами.
Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

**Задача8**

Івана Іванова обікрали. Але його речі було застраховано на певну суму.
Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
загальною вартістю цих речей та межею політики.
Приклад:
calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
Обмеження: Об'єкт завжди повинен містити елементи, сума предметів
завжди повинна бути більшою за страховку.

**Задача9**

Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
(b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
шириною (w) та висотою (h).
Приклад:
doesBrickFit(1, 1, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 2, 1, 1) ➞ false
Обмеження:
Цеглу можна повернути будь-якою стороною до отвору.
Ми припускаємо, що цегла підходить, якщо її розміри дорівнюють
розмірам отвору (тобто розмір цегли повинен бути меншим або дорівнює
розміру отвору, не строго менше).

Цегла не можна класти під неортогональним кутом.

**Задача10**

Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
\WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
без розширення.

**Задача11**

Дано два рядки. Чи можна перший рядок отримати з другого циклічним
зрушенням?

**Задача12**

З елементів масиву a, що складається з 2n елементів, отримати масиви b
і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
елемента, менший з них помістити в масив b, а більший - масив c. Виключити
з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
залишилися.

**Задача13**

Дано рядок, що складається зі слів, розділених пробілами. Сформувати
новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
першої літери першого слова; б) усі посилання у словах замінюються на
"[посилання заборонено]"; в) всі email замінюються на "[контакти
заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
видаляються.
Якщо кількість символів в отриманому рядку буде більшої ніж
кількість символів у вихідному, то запустити функцію, що буде кожні 5
секунд в alert буде питати, чи потрібна нам допомога.

**Задача14**

Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
що відкриваються і закриваються, тобто можна встановити взаємно
однозначну відповідність відкриваючих і закриваючих дужок, причому
відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
дотримується вивести цей текст на html – сторінку і заборонити користувачу
копіювати цей текст та перегляд коду сторінки.

**Задача15**

Написати функцію, яка генерує пароль для користувача. Вимоги:
довжина від 6 до 20 символів повинен бути рівно один символ підкреслення,
хоча б дві великі літери, не більше 5 цифр, будь-які дві цифри поспіль
неприпустимі.

**Задача16**

В заданому масиві найменший елемент помістити на перше місце,
найменший з тих, що залишилися - на останнє місце, наступний -
передостаннє і так далі - до середини масиву.

**Задача17**

Напишіть функцію, яка приймає рядок та повертає новий рядок,
відсортований за частотою появи символів. Символи з більшою частотою
повинні йти раніше за символи з меншою частотою. Використовуйте методи
роботи з рядками, об'єктами та сортуванням для вирішення задачі.

**Задача18**

Дано два рядки. Напишіть функцію, яка знаходить найбільший
загальний підрядок у цих рядках. Підрядка може містити лише послідовні
символи (без перепусток). Використовуйте методи роботи з рядками та
алгоритми пошуку для вирішення задачі.

**Задача19**

Напишіть функцію, яка приймає рядок та число зсуву та повертає
зашифровану версію рядка за допомогою шифру Цезаря. Кожна літера у
вихідному рядку має бути замінена на літеру, що знаходиться на заданій
кількості позицій вперед в алфавіті. Використовуйте методи роботи з рядками
та масивами для вирішення задачі.

**Задача20**

Напишіть функцію, яка приймає два рядки та перевіряє, чи є вони
анаграмами (чи мають однакові символи у різному порядку). Функція
повинна повернути true, якщо рядки є анаграмами, і false інакше.
Використовуйте методи роботи з рядками для вирішення задачі.

**Задача21**

Створіть об'єкт "Університет" з методами для додавання студента,
видалення студента, отримання інформації про студента за його
ідентифікатором та отримання списку студентів певного курсу. Реалізуйте
також функцію, яка дає змогу отримати список студентів певного факультету.
Використовуйте об'єкти та їх методи для вирішення задачі.

**Задача22**

Напишіть програму, яка аналізує текст та виводить статистику про
кількість слів, речень та символів у тексті. Реалізуйте також функцію, яка
визначає слова, що найчастіше зустрічаються в тексті. Використовуйте
методи роботи з рядками, регулярні вирази та об'єкти для вирішення задачі.
