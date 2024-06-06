import os
import subprocess

import fontawesome as fa
from libqtile import bar, hook, layout, qtile
from libqtile.config import Click, Drag, Group, Key, Match, Screen
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal
from qtile_extras import widget

from widgets import volume, battery, menu_popup
import themes 

theme = themes.Green_Leaves
menu_popup.create_menu(qtile)

mod = "mod4"
terminal = guess_terminal()

keys = [
    ### WINDOW MANAGING ###
    # A list of available commands that can be bound to keys can be found
    # at https://docs.qtile.org/en/latest/manual/config/lazy.html
    # Switch between windows
    Key([mod], "h", lazy.layout.left(), desc="Move focus to left"),
    Key([mod], "l", lazy.layout.right(), desc="Move focus to right"),
    Key([mod], "j", lazy.layout.down(), desc="Move focus down"),
    Key([mod], "k", lazy.layout.up(), desc="Move focus up"),
    Key([mod], "space", lazy.layout.next(), desc="Move window focus to other window"),
    # Move windows between left/right columns or move up/down in current stack.
    # Moving out of range in Columns layout will create new column.
    Key([mod, "shift"], "h", lazy.layout.shuffle_left(), desc="Move window to the left"),
    Key([mod, "shift"], "l", lazy.layout.shuffle_right(), desc="Move window to the right"),
    Key([mod, "shift"], "j", lazy.layout.shuffle_down(), desc="Move window down"),
    Key([mod, "shift"], "k", lazy.layout.shuffle_up(), desc="Move window up"),
    # Grow windows. If current window is on the edge of screen and direction
    # will be to screen edge - window would shrink.
    Key([mod, "control"], "h", lazy.layout.grow_left(), desc="Grow window to the left"),
    Key([mod, "control"], "l", lazy.layout.grow_right(), desc="Grow window to the right"),
    Key([mod, "control"], "j", lazy.layout.grow_down(), desc="Grow window down"),
    Key([mod, "control"], "k", lazy.layout.grow_up(), desc="Grow window up"),

    Key([mod], "i", lazy.layout.grow()),
    Key([mod], "m", lazy.layout.shrink()),
    Key([mod], "n", lazy.layout.normalize()),
    Key([mod], "o", lazy.layout.maximize()),

    Key([mod], "m", lazy.window.toggle_maximize(), desc="Toggle maximize"),
    Key([mod], "f", lazy.window.toggle_floating(), desc="Toggle floating"),

    ### GROUPS ###
    Key([mod], "right", lazy.screen.next_group(), desc="Next group"),
    Key([mod], "left", lazy.screen.prev_group(), desc="Previous group"),

    ### APPS ###
    Key([mod], "b", lazy.spawn('firefox'), desc="Spawn firefox"),
    Key([mod], "c", lazy.spawn('code'), desc="Spawn code"),
    Key([mod, "control"], "c", lazy.spawn('code .config/qtile'), desc="Spawn code"),
    Key([mod], "t", lazy.spawn('thunar'), desc="Spawn thunar"),
    Key([mod], "Return", lazy.spawn(terminal), desc="Launch terminal"),

    ### FUNCTION ROW ###
    Key([], "XF86MonBrightnessUp", lazy.spawn('xbacklight -inc 5'), desc="Brightness up"),
    Key([], "XF86MonBrightnessDown", lazy.spawn('xbacklight -dec 5'), desc="Brightness down"),
    Key([], "XF86AudioRaiseVolume", lazy.spawn('amixer set "Master" 5%+'), desc="Volume up"),
    Key([], "XF86AudioLowerVolume", lazy.spawn('amixer set "Master" 5%-'), desc="Volume down"),
    Key([], "XF86AudioMute", lazy.spawn('amixer set "Master" toggle'), desc="Mute toggle"),




    # Toggle between split and unsplit sides of stack.
    # Split = all windows displayed
    # Unsplit = 1 window displayed, like Max layout, but still with
    # multiple stack panes
    Key(
        [mod, "shift"],
        "Return",
        lazy.layout.toggle_split(),
        desc="Toggle between split and unsplit sides of stack",
    ),

    Key([mod], "Tab", lazy.next_layout(), desc="Toggle between layouts"),
    Key([mod], "w", lazy.window.kill(), desc="Kill focused window"),
    Key([mod, "control"], "r", lazy.reload_config(), desc="Reload the config"),
    Key([mod, "control"], "q", lazy.shutdown(), desc="Shutdown Qtile"),
    Key([mod, "shift"], "q", lazy.function(menu_popup.toggle_menu)),

    Key([mod], "r", lazy.spawn('rofi -show drun'), desc="Open rofi"),
    Key([mod, "shift"], "r", lazy.spawn('rofi -show run'), desc="Open rofi"),
]

### GROUPS ###
# groups = [Group(i) for i in "vibe ess dev www".split(' ')]
groupData = [('', {'layout':'spiral'}), #home
             ('', {'layout':'zoomy'}), #discord
             ('', {'layout':'max'}), #fa.icons['spotify']{}
             ('', {'layout':'monadtall'}), #terminal
             ('', {'layout':'monadtall'}), #fa.icons['code']
             ('', {'layout':'max'})] #fa.icons['firefox'] doesnt work for some reason
groups = [Group(name, **kwargs) for name, kwargs in groupData]

for i, group in enumerate(groups):
    i+=1
    keys.extend(
        [
            # mod1 + letter of group = switch to group
            Key(
                [mod],
                str(i),
                lazy.group[group.name].toscreen(),
                desc="Switch to group {}".format(group.name),
            ),
            # mod1 + shift + letter of group = switch to & move focused window to group
            Key(
                [mod, "shift"],
                str(i),
                lazy.window.togroup(group.name, switch_group=True),
                desc="Switch to & move focused window to group {}".format(group.name),
            ),
            # Or, use below if you prefer not to switch to that group.
            # # mod1 + shift + letter of group = move focused window to group
            # Key([mod, "shift"], i.name, lazy.window.togroup(i.name),
            #     desc="move focused window to group {}".format(i.name)),
        ]
    )

layouts = [
    # layout.Columns(border_focus_stack=["#d75f5f", "#8f3d3d"], **theme.border),
    layout.MonadTall(ratio=0.75, **theme.border, **theme.gap),
    layout.Max(),
    layout.Zoomy(**theme.border),
    layout.Spiral(**theme.border),
]

widget_defaults = dict(
    font="RobotoMono Nerd Font",
    fontsize=16,
    padding=4,
)
extension_defaults = widget_defaults.copy()

##### BAR ######
separator = widget.Sep(linewidth=2, padding=12, **theme.separatorKwargs)

screens = [
    Screen(
        bottom=bar.Bar(
            [   
                widget.Spacer(length=8),

                widget.TextBox(
                    font='Noto Nerd Font',
                    mouse_callbacks={'Button1': lambda: qtile.cmd_function(menu_popup.toggle_menu)},
                    **theme.menuTextBoxKwargs
                ),

                widget.Spacer(length=4),
                separator,

                widget.GroupBox(
                    font="Noto Nerd Font",
                    **theme.groupboxKwargs
                ),

                separator,
                widget.Spacer(length=4),

                widget.WindowName(
                    **theme.windowKwargs
                ),

                ### RIGHT SIDE ###
                widget.OpenWeather(
                    location='Białystok',
                    app_key='a7687fe74a2f227a2ff2727c3f8aebfe',
                    **theme.openWeatherKwargs,
                ),

                widget.Memory(
                    **theme.memoryKwargs
                ),

                widget.CheckUpdates(
                    distro='Arch_yay',
                    display_format=' {updates}',
                    font='Noto Nerd Font',
                    execute='alacritty --hold -e yay',
                    **theme.checkUpdatesKwargs
                ),

                # widget.Volume(
                #     emoji=True,
                #     font='Noto Emoji',
                #     **theme.essentialsKwargs
                # ),
                volume.Volume(
                    emoji=True,
                    font='Noto Emoji',
                    **theme.essentialsKwargs
                ),
                widget.Spacer(length=4),

                battery.Battery(
                        format='{icon} {percent:.0%}', 
                        font="Noto Nerd Font",
                        **theme.essentialsKwargs
                ),
                widget.Spacer(length=8, **theme.hack),

                widget.Clock(
                    **theme.clockKwargs
                ),

                widget.CurrentLayoutIcon(
                    **theme.layoutKwargs
                ),
            ],
            40,
            background=theme.bg,
            opacity=0.8,
        ),
    ),
]

# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(), start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(), start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front()),
]

dgroups_key_binder = None
dgroups_app_rules = []  # type: list
follow_mouse_focus = True
bring_front_click = False
cursor_warp = False
floating_layout = layout.Floating(
    float_rules=[
        # Run the utility of `xprop` to see the wm class and name of an X client.
        *layout.Floating.default_float_rules,
        Match(wm_class="confirmreset"),  # gitk
        Match(wm_class="makebranch"),  # gitk
        Match(wm_class="maketag"),  # gitk
        Match(wm_class="ssh-askpass"),  # ssh-askpass
        Match(title="branchdialog"),  # gitk
        Match(title="pinentry"),  # GPG key password entry
    ]
)
auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True

# If things like steam games want to auto-minimize themselves when losing
# focus, should we respect this or not?
auto_minimize = True

# When using the Wayland backend, this can be used to configure input devices.
wl_input_rules = None

# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "LG3D"

@hook.subscribe.startup_once
def startup_once():
    autostart = os.path.expanduser('~/.config/qtile/autostart.sh')
    subprocess.Popen([autostart])