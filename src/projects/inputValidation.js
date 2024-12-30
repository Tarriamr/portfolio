export function characterCountValidation(containerClass, min, minComment, max, maxComment) {
  const $span = document.querySelector(`.${containerClass}-span`);
  const $input = document.querySelector(`.${containerClass}-input`);
  const length = $input.value.trim().length;
  if (length < min) {
    $span.textContent = minComment;
    $input.style.borderColor = 'var(colorMain)';
    return false;
  } else if (length > max) {
    $span.textContent = maxComment;
    $input.style.borderColor = 'var(colorRed)';
    return false;
  } else {
    $span.textContent = '';
    $input.style.borderColor = 'var(colorMain)';
    return true;
  }
}

export function contentValidation(containerClass, comment) {
  const $error = document.querySelector(`.${containerClass}-span`);
  const $input = document.querySelector(`.${containerClass}-input`);
  const length = $input.value.trim().length;
  if (length < 1) {
    $error.textContent = comment;
    $input.style.borderColor = 'var(colorRed)';
    return false;
  } else {
    $error.textContent = '';
    $input.style.borderColor = 'var(colorMain)';
    return true;
  }
}

export function emailValidation(containerClass, comment) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const $error = document.querySelector(`.${containerClass}-span`);
  const $input = document.querySelector(`.${containerClass}-input`);
  if (!re.test($input.value.trim().toLowerCase())) {
    $error.textContent = comment;
    $input.style.borderColor = 'var(colorRed)';
    return false;
  } else {
    $error.textContent = '';
    $input.style.borderColor = 'var(colorMain)';
    return true;
  }
}
