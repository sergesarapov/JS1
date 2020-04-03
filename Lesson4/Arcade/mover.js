let mover = {
  getDirection() {
    // ДОбавляю возможные дополнительные направления
    const avaliableDirections = [2, 4, 6, 8, 7, 9, 1, 3];
    while (true) {
      let direction = parseInt(
        prompt(
          'Введи число (2, 4, 6 или 8), чтобы задать прямое направление, \n чтобы двигаться по диагонали, используй 7, 9, 1 и 3.  "Отмена"'
        )
      );
      if (isNaN(direction)) {
        return null;
      }
      if (!avaliableDirections.includes(direction)) {
        alert(
          "Для перемещения введи 2, 4, 6 или 8. Чтобы двигаться по диагонали, используй 7, 9, 1 и 3."
        );
        continue;
      }
      return direction;
    }
  },
  getNextPosition(direction) {
    const nextPosition = {
      x: player.x,
      y: player.y
    };
    switch (direction) {
      case 2:
        nextPosition.y++;
        break;
      case 4:
        nextPosition.x--;
        break;
      case 6:
        nextPosition.x++;
        break;
      case 8:
        nextPosition.y--;
        break;
      // Движение по диагонали
      case 7:
        nextPosition.y--;
        nextPosition.x--;
        break;
      case 9:
        nextPosition.y--;
        nextPosition.x++;
        break;
      case 3:
        nextPosition.y++;
        nextPosition.x++;
        break;
      case 1:
        nextPosition.y++;
        nextPosition.x--;
        break;
    }
    return nextPosition;
  },
  // Проверяю, является ли переданное значение
  // выходящим за поле отрисовки, возвращаю true в game
  getWallPosition(nextPoint) {
    if (
      nextPoint.x > 9 || //9 - потому что отсчет идет с 0
      nextPoint.x < 0 ||
      nextPoint.y > 9 ||
      nextPoint.y < 0
    ) {
      return true;
    }
  }
};
