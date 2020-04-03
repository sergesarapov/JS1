let game = {
  run() {
    while (true) {
      const direction = mover.getDirection();
      if (direction == null) {
        console.log("Game over");
        return;
      }
      const nextPoint = mover.getNextPosition(direction);
      // Проверяю не попадает ли значение nextPoint.x и nextPoint.y
      // за поле отрисовки
      if (mover.getWallPosition(nextPoint)) {
        alert("Вы не можете туда идти");
      } else {
        renderer.clear();
        player.move(nextPoint);
        renderer.render();
      }
    }
  },

  init() {
    console.log("Ваше положение на поле в виде буквы о.");
    renderer.render();
    console.log("Чтобы начать игру наберите game.run() и нажмите Enter");
  }
};

game.init();
