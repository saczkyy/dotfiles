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


def create_menu(t, qtile):
    global menu, theme
    theme = t

    controls = [
    PopupText(
        fontsize=34,
        font="Noto Nerd Font",
        text="󰂯",
        row=0,
        col=3,
        h_align="center",
        highlight=theme.Popup.bluetooth,
        highlight_method='text',
        can_focus=True,
    ),
    PopupText(
        fontsize=34,
        font="Noto Nerd Font",
        text="󰠥",
        row=0,
        col=4,
        h_align="center"
    ),
    PopupText(
        fontsize=34,
        font="Noto Nerd Font",
        text="",
        row=0,
        col=5,
        h_align="center",
        # highlight=theme.Popup.spoof,
        highlight_method='text',
        can_focus=True,
    ),

    PopupText(
        fontsize=34,
        font="Noto Nerd Font",
        text="",
        row=6,
        col=0,
        h_align="center",
        highlight=theme.Popup.power,
        highlight_method='text',
        can_focus=True,
    ),
    PopupText(
        fontsize=34,
        font="Noto Nerd Font",
        text="",
        row=6,
        col=1,
        h_align="center",
        highlight=theme.Popup.restart,
        highlight_method='text',
        can_focus=True,
    ),
    PopupText(
        fontsize=34,
        font="Noto Nerd Font",
        text="",
        row=6,
        col=2,
        h_align="center",
        highlight=theme.Popup.lock,
        highlight_method='text',
        can_focus=True,
    ),
]
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
        opacity=0.9,
        margin=16,
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


