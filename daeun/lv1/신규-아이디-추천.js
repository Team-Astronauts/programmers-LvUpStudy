function solution(new_id) {
  const regEx1 = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g;
  const regEx2 = /\.{2,}/g;
  const regEx3 = /^\.|\.$/;

  let replaced = new_id
    .toLowerCase()
    .replace(regEx1, '')
    .replace(regEx2, '.')
    .replace(regEx3, '');

  if (!replaced.length) replaced = 'a';
  if (replaced.length >= 16) replaced = replaced.slice(0, 15);

  replaced = replaced.replace(/\.$/, '');

  const length = replaced.length;

  if (replaced.length <= 2)
    replaced = replaced + replaced[length - 1].repeat(3 - length);

  return replaced;
}
