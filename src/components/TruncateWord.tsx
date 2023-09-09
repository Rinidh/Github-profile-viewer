interface Props {
  longWord: string | null;
}

const TruncateWord = ({ longWord }: Props) => {
  if (longWord) {
    if (longWord.length < 9) return longWord;

    let shortenedName = "";
    for (let index = 0; index < 9; index++) {
      //"index < 9" means upto 9 characters will be added to shortenedName
      shortenedName += longWord[index];
    }
    shortenedName += "...";
    return shortenedName;
  } else return "No name";
};

export default TruncateWord;
