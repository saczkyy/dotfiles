from qtile_extras.popup.toolkit import (
    PopupRelativeLayout,
    PopupGridLayout,
    PopupImage,
    PopupText
)
import sys

menu_width = 400
menu_height = 450
bar_height = 40
gap = 16

menu = None
isOpen = False
theme = None

controls = [
    PopupText(
        text="Lock",
        row=1,
        col=2,
        h_align="center"
    ),
    PopupText(
        text="Sleep",
        pos_x=0.4,
        pos_y=0.7,
        width=0.2,
        height=0.2,
        h_align="center"
    ),
    PopupText(
        text="Shutdown",
        pos_x=0.7,
        pos_y=0.7,
        width=0.2,
        height=0.2,
        h_align="center"
    ),
]

def create_menu(t, qtile):
    global menu, theme
    theme = t
    menu = PopupGridLayout(
        qtile,
        rows=7,
        cols=6,
        border=theme.Green.light2,
        border_width=4,
        width=menu_width,
        height=menu_height,
        controls=controls,
        background=theme.Brown.dark2,
        opacity=0.8,
        margin=4,
        close_on_click=False,
    )


def toggle_menu(qtile):
    global isOpen
    isOpen = not isOpen
    x = 0 + gap
    y = qtile.current_screen.height - bar_height - menu_height - gap

    if isOpen:
        menu.show(x=x, y=y)
    else:
        menu.hide()


