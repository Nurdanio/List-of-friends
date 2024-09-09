const specialNumbers = [2, 3, 4];

export const renderPhrase = (number) => {
  if (!number) {
    return "Не обессудь родной";
  }

  if (specialNumbers.includes(number)) {
    return `${number} человека тусанет с тобой сегодня`;
  }

  return `${number} человек тусанет с тобой сегодня`;
};
