enum ActionKind {
    Walking,
    Idle,
    Jumping,
    disparar
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`correr2`,
    170,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`correr`,
    170,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.Walking)
    animation.runImageAnimation(
    mySprite,
    assets.animation`saltar`,
    90,
    false
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Marco Rossi0`, SpriteKind.Player)
forever(function () {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.setCurrentTilemap(tilemap`nivel2`)
})
