def solution(phone_book):
  phone_book.sort()

  for targeA, targetB in zip(phone_book, phone_book[1:]):
    if targetB.startswith(targeA):
      return False
  return True
