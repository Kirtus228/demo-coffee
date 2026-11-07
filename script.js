/* Демо-сайт кофейни: минимум логики — валидация формы и «спасибо». */
(function () {
  var form = document.getElementById('bookForm');
  var note = document.getElementById('note');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var name = String(data.get('name') || '').trim();
    var phone = String(data.get('phone') || '').replace(/\D/g, '');

    if (name.length < 2 || phone.length < 10) {
      note.textContent = 'Заполните имя и телефон — так мы сможем подтвердить бронь.';
      return;
    }

    // В реальном сайте здесь был бы запрос к Телеграму или почте владельца.
    note.textContent = 'Спасибо, ' + name + '! В рабочей версии заявка уходит владельцу в мессенджер.';
    form.reset();
  });
})();
