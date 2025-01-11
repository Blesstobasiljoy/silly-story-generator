function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', randomValueFromArray(insertX)); 
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    newStory = newStory.replace('Bob', customName.value);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
