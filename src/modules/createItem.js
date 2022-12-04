const mealImage = (item, obj) => {
  const imageWrapper = document.createElement('div');
  imageWrapper.setAttribute('class', 'imageWrapper');
  const mealImage = document.createElement('IMG');
  mealImage.setAttribute('src', obj.strCategoryThumb);
  imageWrapper.appendChild(mealImage);
  item.appendChild(imageWrapper);
};

const likeBtn = (nameWrapper, obj) => {
  const like = document.createElement('i');
  like.className = 'fa-solid fa-heart';
  like.id = obj.idCategory;
  nameWrapper.appendChild(like);
};

const mealName = (item, obj) => {
  const nameWrapper = document.createElement('div');
  nameWrapper.className = 'nameWrapper';
  const h2 = document.createElement('h2');
  h2.innerHTML = obj.strCategory;
  nameWrapper.appendChild(h2);
  likeBtn(nameWrapper, obj);
  item.appendChild(nameWrapper);
};

const likeCounter = (item) => {
  const counter = document.createElement('h4');
  counter.innerHTML = '5 likes';
  item.appendChild(counter);
};

const btn = (item, obj) => {
  const buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'buttonWrapper';
  const commentsBtn = document.createElement('button');
  commentsBtn.type = 'button';
  commentsBtn.innerHTML = 'Comments';
  commentsBtn.id = obj.idCategory;
  const reservationBtn = document.createElement('button');
  reservationBtn.type = 'button';
  reservationBtn.innerHTML = 'Reservation';
  reservationBtn.id = obj.idCategory;
  buttonWrapper.appendChild(commentsBtn);
  buttonWrapper.appendChild(reservationBtn);
  item.appendChild(buttonWrapper);
};

const createItem = (list, obj) => {
  const item = document.createElement('div');
  item.className = 'item';
  mealImage(item, obj);
  mealName(item, obj);
  likeCounter(item);
  btn(item, obj);
  list.appendChild(item);
};

export default createItem;