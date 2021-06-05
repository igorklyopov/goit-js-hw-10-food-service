export default function makeElementsMurkup(elementsData, elementTemplate) {
  return elementsData.map(elementTemplate).join('');
}
